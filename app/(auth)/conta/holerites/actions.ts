'use server';

import { db } from '@/lib/firebase/config';
import { doc, updateDoc } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function view(formData: FormData) {
  const holeriteId = formData.get('id') as string;
  const imageLink = formData.get('imageLink') as string;
  const viwed = formData.get('view') as string;

  if (viwed === 'S') {
    console.log('Visto, apenas redirecionando...');
    redirect(imageLink);
    return;
  }

  try {
    const holeriteRef = doc(db, 'holerites', holeriteId);
    await updateDoc(holeriteRef, {
      view: true,
    });
    revalidatePath('/conta/holerites');
    redirect(imageLink);
  } catch (e) {
    console.error('Erro ao marcar holerite como visualizado:', e);
    throw e;
  }
}
