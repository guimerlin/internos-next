'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect as Redirect } from 'next/navigation';
import { Session } from './types';

export async function auth(): Promise<Session | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  if (!token) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORKER_URL}/auth/validate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `auth_token=${token}`,
        },
        body: JSON.stringify({ token }),
        cache: 'no-store',
      },
    );

    if (!response.ok) return null;

    const data = await response.json();

    if (data.valid && data.user) {
      return {
        user: data.user,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };
    }

    return null;
  } catch (error) {
    console.error('Erro na autenticação via Worker:', error);
    return null;
  }
}

export async function signUp(
  username: string,
  password: string,
  fullName?: string,
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORKER_URL}/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          fullName,
        }),
        cache: 'no-store',
      },
    );

    if (!response.ok) return null;
    Redirect('/login');
  } catch (error) {
    console.error('Erro na criação de usuário via Worker:', error);
    return null;
  }
}

export async function signIn(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORKER_URL}/auth/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        cache: 'no-store',
      },
    );

    if (!response.ok) {
      return { error: 'Credenciais inválidas' };
    }

    const setCookieHeader = response.headers.get('set-cookie');

    if (setCookieHeader) {
      const token = setCookieHeader.split(';')[0].split('=')[1];

      const cookieStore = await cookies();
      cookieStore.set('auth_token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
      });
    }

    // Se preferir pegar o token do JSON (caso seu Worker retorne { token: '...' })
    // const data = await response.json();
    // cookieStore.set('auth_token', data.token, { ... });
  } catch (error) {
    console.error('Erro no login:', error);
    return;
  }

  revalidatePath('/');
  Redirect('/');
}

export async function signOut({ redirect = true }: { redirect?: boolean }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  // 1. Avisa o Worker para invalidar (opcional se você não usa sessões no DB)
  if (token) {
    await fetch(`${process.env.NEXT_PUBLIC_WORKER_URL}/auth/logout`, {
      method: 'POST',
      headers: { Cookie: `auth_token=${token}` },
    });
  }

  // 2. Limpa o cookie localmente no Next.js (Crucial!)
  cookieStore.delete('auth_token');

  if (redirect) Redirect('/login');
}
