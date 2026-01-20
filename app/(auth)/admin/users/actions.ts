'use server';

import { api } from '@/lib/api';
import { uploadImage } from '@/lib/imageKit';
import { revalidatePath } from 'next/cache';

export async function createUserAction(formData: FormData) {
  const fullName = formData.get('fullName') as string;
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const image = formData.get('profileImage') as File;
  const role = formData.get('role') as string;

  const bodyData = {} as any;
  if (image.size === 0) {
    const imageUrl = await uploadImage(image);
    bodyData.image = imageUrl;
  }
  bodyData.username = username;
  bodyData.password = password;
  bodyData.fullName = fullName;
  bodyData.role = role;

  try {
    const response = await api('/admin/users', {
      method: 'POST',
      body: JSON.stringify(bodyData),
      cache: 'no-store',
    });

    if (!response.ok) throw new Error('Erro ao criar usuário');
    revalidatePath('/admin/users');
  } catch (error) {
    console.error('Erro na criação de usuário via Worker:', error);
    throw new Error('Erro ao criar usuário');
  }
}

export async function updateUserAction(formData: FormData) {
  const userId = formData.get('userId');
  const fullName = formData.get('fullName');
  const role = formData.get('role');
  const profileImage = formData.get('profileImage') as File;
  const username = formData.get('username');

  const imageUrl =
    profileImage.size === 0 ? await uploadImage(profileImage) : undefined;

  const updateData = {} as any;
  if (fullName) updateData.fullName = fullName;
  if (role) updateData.role = role;
  if (imageUrl) updateData.image = imageUrl;
  if (username) updateData.username = username;
  console.log(updateData);

  const response = await api(`/admin/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(updateData),
  });
  if (!response.ok) throw new Error('Erro ao deletar usuário');

  console.log('Atualizar usuário:', userId);
  revalidatePath('/admin/users');
}

export async function resetPasswordAction(formData: FormData) {
  const newPassword = formData.get('newPassword');
  const userId = formData.get('userId');

  const response = await api(`/admin/users/${userId}/reset-password`, {
    method: 'PATCH',
    body: JSON.stringify({ newPassword }),
  });
  if (!response.ok) throw new Error('Erro ao redefinir senha');
  console.log('REDEFINIR SENHA:', newPassword);
  revalidatePath('/admin/users');
}

export async function deleteUserAction(formData: FormData) {
  const userId = formData.get('userId');

  const response = await api(`/admin/users/${userId}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Erro ao deletar usuário');

  console.log('DELETAR USUÁRIO:', userId);
  revalidatePath('/admin/users');
}
