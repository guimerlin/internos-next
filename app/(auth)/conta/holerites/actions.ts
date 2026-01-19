'use server';

import { api } from '@/lib/api';
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
    await api(`/user/payslips/${holeriteId}/view`, { method: 'PATCH' });
    revalidatePath('/conta/holerites');
    redirect(imageLink);
  } catch (e) {
    console.error('Erro ao marcar holerite como visualizado:', e);
    throw e;
  }
}
