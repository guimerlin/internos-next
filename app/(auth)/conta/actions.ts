'use server';

import { signOut } from '@/auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { api } from '@/lib/api';
import { uploadImage } from '@/lib/imageKit';

export async function logout() {
  await signOut({ redirect: false });
  redirect('/login');
}

export async function save(formData: FormData) {
  const fullName = formData.get('fullName') as string;
  const password = formData.get('password') as string;
  const username = formData.get('username') as string;
  const file = formData.get('profileImage') as File;

  if (!fullName && !password && !username && file.size === 0) {
    throw new Error('Nenhuma informação para atualizar');
  }

  const updateData = {
    ...(fullName && { fullName: fullName.trim() }),
    ...(password && { password: password.trim() }),
    ...(username && { username: username.trim() }),
    ...(file && { image: await uploadImage(file) }),
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
