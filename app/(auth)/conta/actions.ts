'use server';

import { signOut } from '@/auth';
import { redirect } from 'next/navigation';

export async function changeName(formData: FormData) {
  const name = formData.get('name');
  console.log(name);
}

export async function logout() {
  await signOut({ redirect: false });
  redirect('/login');
}
