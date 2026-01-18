'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Upload, FileText } from 'lucide-react';

// Server Action (importe a sua função real aqui)
import { uploadHolerite } from './action';

export function HoleriteUploadDialog({
  userId,
  userName,
}: {
  userId: string;
  userName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
          {/* Aqui está o ícone. Se realmente preferir =, use <Equal /> */}
          <Plus className="h-4 w-4" />
          <span className="sr-only">Adicionar Holerite</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo Holerite</DialogTitle>
          <DialogDescription>
            Enviando para:{' '}
            <span className="text-primary font-semibold">{userName}</span>
          </DialogDescription>
        </DialogHeader>

        {/* O Formulário aponta para sua Server Action */}
        <form
          action={async (formData) => {
            // Passa o ID do usuário oculto ou via bind
            formData.append('userId', userId);
            await uploadHolerite(formData); // Sua função de salvar
            setIsOpen(false); // Fecha o modal após enviar
          }}
          className="grid gap-4 py-4"
        >
          {/* Campo Natureza */}
          <div className="grid gap-2">
            <Label htmlFor="natureza" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Natureza do Documento
            </Label>
            <Input
              id="natureza"
              name="natureza"
              placeholder="Ex: Folha Mensal, 13º Salário..."
              required
            />
          </div>

          {/* Campo Imagem (Upload) */}
          <div className="grid gap-2">
            <Label htmlFor="image" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Arquivo (Imagem)
            </Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              required
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit">Enviar Holerite</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
