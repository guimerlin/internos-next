import { cookies } from 'next/headers';

export async function api(endpoint: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  console.log(token);
  console.log(endpoint);
  console.log(options);

  const baseUrl = process.env.NEXT_PUBLIC_WORKER_URL;

  // Mesclamos os headers existentes com o Cookie de autenticação
  const headers = {
    ...options.headers,
    'Content-Type': 'application/json',
    ...(token ? { Cookie: `auth_token=${token}` } : {}),
  };

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
  });

  // Se o Worker retornar 401, você pode tratar um logout global aqui
  if (response.status === 401) {
    // Lógica opcional de redirecionamento ou erro
  }

  return response;
}
