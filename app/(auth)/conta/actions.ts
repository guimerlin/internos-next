'use server';

import { signOut } from '@/auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { api } from '@/lib/api';

export async function logout() {
  await signOut({ redirect: false });
  redirect('/login');
}

export async function save(formData: FormData) {
  const fullName = formData.get('fullName') as string;
  const password = formData.get('password') as string;
  const username = formData.get('username') as string;

  if (!fullName && !password && !username) {
    throw new Error('Nenhuma informação para atualizar');
  }

  const updateData = {
    ...(fullName && { fullName }),
    ...(password && { password }),
    ...(username && { username }),
  };

  try {
    const response = await api('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(updateData),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar no banco');
    }

    revalidatePath('/conta');
    redirect('/conta');
  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    return;
  }
}
