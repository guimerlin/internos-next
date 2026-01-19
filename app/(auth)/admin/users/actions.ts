'use server';

import { revalidatePath } from 'next/cache';

export async function createUserAction(formData: FormData) {
  // Simula delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('CRIAR USUÁRIO:', Object.fromEntries(formData));
  // Aqui entraria: await api('/admin/users', { method: 'POST', body: ... })

  revalidatePath('/admin/users');
}

export async function updateUserAction(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('ATUALIZAR USUÁRIO:', Object.fromEntries(formData));
  // Aqui entraria: await api(`/admin/users/${id}`, { method: 'PUT', ... })

  revalidatePath('/admin/users');
}

export async function resetPasswordAction(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('RESETAR SENHA:', Object.fromEntries(formData));

  revalidatePath('/admin/users');
}

export async function deleteUserAction(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('DELETAR USUÁRIO ID:', formData.get('userId'));

  revalidatePath('/admin/users');
}
