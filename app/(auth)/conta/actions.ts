'use server';

import { signOut } from '@/auth';
import { redirect } from 'next/navigation';
import { db } from '@/lib/firebase/config';
import { updateDoc, doc, collection } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

export async function changeName(formData: FormData) {
  const name = formData.get('name');
  console.log(name);
}

export async function logout() {
  await signOut({ redirect: false });
  redirect('/login');
}

export async function save(formData: FormData) {
  const name = formData.get('name') as string;
  const userId = formData.get('userId') as string;

  if (!userId || !name) {
    throw new Error('ID do usuário ou nome não fornecidos.');
  }

  try {
    const userRef = doc(db, 'users', userId);

    await updateDoc(userRef, {
      name: name,
      updatedAt: new Date().toISOString(),
    });

    revalidatePath('/perfil');
    redirect('/conta');

    return;
  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    return;
  }
}
