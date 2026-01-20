import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rotas que não precisam de autenticação
const publicRoutes = ['/login', '/cadastro', '/auth/login'];

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const workerRes = await fetch(
      `${process.env.NEXT_PUBLIC_WORKER_URL}/auth/validate`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `auth_token=${token}`,
        },
        body: JSON.stringify({ token }),
      },
    );

    if (!workerRes.ok) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('auth_token');
      return response;
    }

    await workerRes.json();
    const response = NextResponse.next();
    const newCookieHeader = workerRes.headers.get('set-cookie');

    if (newCookieHeader) {
      const newToken = newCookieHeader.split(';')[0].split('=')[1];

      response.cookies.set('auth_token', newToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
      });

      response.cookies.set('auth_token', newToken);
    }

    return response;
  } catch (error) {
    console.error('Middleware Auth Error:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
