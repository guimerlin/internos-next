'use server';

import { uploadImage } from '@/lib/imageKit';
import { revalidatePath } from 'next/cache';
import { api } from '@/lib/api';

export async function uploadHolerite(formData: FormData) {
  // 1. Extração de todos os campos do FormData
  const userId = formData.get('userId');
  const natureza = formData.get('natureza') as string;
  const referenciaMes = formData.get('referenciaMes') as string;
  const dataEmissao = formData.get('dataEmissao') as string;
  const file = formData.get('image') as File;

  // 2. Validação básica
  if (!file || file.size === 0) {
    return { success: false, error: 'Arquivo inválido ou não selecionado' };
  }

  if (!userId || !natureza || !referenciaMes || !dataEmissao) {
    return { success: false, error: 'Todos os campos são obrigatórios' };
  }

  try {
    const fileUrl = await uploadImage(file);

    const response = await api('/admin/payslips', {
      method: 'POST',
      body: JSON.stringify({
        userId: Number(userId),
        natureza: natureza.trim(),
        fileUrl,
        referenciaMes,
        dataEmissao,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Erro ao salvar no banco de dados');
    }

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error: any) {
    console.error('Erro no processo de upload de holerite:', error);
    return {
      success: false,
      error: error.message || 'Falha ao processar upload',
    };
  }
}

export async function exclude(formData: FormData) {
  const id = formData.get('id') as string;
  try {
    await api(`/admin/payslips/${id}`, { method: 'DELETE' });
    revalidatePath('/admin/dashboard');
  } catch (e) {
    console.error('Erro ao remover holerite:', e);
    throw e;
  }
}
