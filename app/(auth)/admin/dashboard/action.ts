'use server';

import { db } from '@/lib/firebase/config';
import { uploadImage } from '@/lib/imageKit';
import { addDoc, collection } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

export async function uploadHolerite(formData: FormData) {
  const userId = formData.get('userId') as string;
  const natureza = formData.get('natureza') as string;
  const file = formData.get('image') as File;

  if (!file || file.size === 0) {
    throw new Error('Arquivo inválido');
  }

  try {
    const response = await uploadImage(file);

    await addDoc(collection(db, 'holerites'), {
      natureza: natureza,
      imagem: response,
      view: false,
      data: new Date().toISOString(),
      targetUid: userId,
      uid: userId,
      createdAt: new Date().toISOString(),
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Erro no upload:', error);
    return { success: false, error: 'Falha ao processar upload' };
  }
}
