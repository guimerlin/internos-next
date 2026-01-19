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
import { Plus, Upload, FileText, CalendarDays } from 'lucide-react';

// Importe sua Server Action real
import { uploadHolerite } from './action';

export function HoleriteUploadDialog({
  userId,
  userName,
}: {
  userId: number;
  userName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
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

        <form
          action={async (formData: FormData) => {
            setIsLoading(true);
            try {
              // O userId precisa ser string para o append no FormData
              formData.append('userId', String(userId));

              await uploadHolerite(formData);
              setIsOpen(false);
            } catch (error) {
              console.error('Erro ao enviar:', error);
            } finally {
              setIsLoading(false);
            }
          }}
          className="grid gap-4 py-4"
        >
          {/* Natureza */}
          <div className="grid gap-2">
            <Label htmlFor="natureza" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Natureza
            </Label>
            <Input
              id="natureza"
              name="natureza"
              placeholder="Ex: Folha Mensal"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Referência (Mês/Ano) */}
            <div className="grid gap-2">
              <Label
                htmlFor="referenciaMes"
                className="flex items-center gap-2"
              >
                <CalendarDays className="h-4 w-4" />
                Mês Referência
              </Label>
              <Input
                id="referenciaMes"
                name="referenciaMes"
                type="month" // Formato nativo YYYY-MM
                required
              />
            </div>

            {/* Data de Emissão */}
            <div className="grid gap-2">
              <Label htmlFor="dataEmissao" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Data Emissão
              </Label>
              <Input
                id="dataEmissao"
                name="dataEmissao"
                type="date" // Formato nativo YYYY-MM-DD
                defaultValue={new Date().toISOString().split('T')[0]} // Hoje por padrão
                required
              />
            </div>
          </div>

          {/* Arquivo */}
          <div className="grid gap-2">
            <Label htmlFor="image" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Arquivo (PDF ou Imagem)
            </Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*,application/pdf"
              required
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Salvar Holerite'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
