'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UserPlus } from 'lucide-react';
import { createUserAction } from './actions';
import ImageUploadPreview from '@/components/UploadImagePreview';

export function CreateUserDialog() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState('user');

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <UserPlus className="h-4 w-4" /> Criar Usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Novo Usuário</DialogTitle>
          <DialogDescription>
            Preencha os dados para criar uma nova conta de acesso.
          </DialogDescription>
        </DialogHeader>

        <form
          action={async (formData) => {
            await createUserAction(formData);
            setOpen(false);
          }}
          className="grid gap-4 py-4"
        >
          {/* Foto */}
          <div className="grid gap-2">
            <ImageUploadPreview />
          </div>

          {/* Nome Completo */}
          <div className="grid gap-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Ex: João da Silva"
              required
            />
          </div>

          {/* Username */}
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="joao.silva"
              required
            />
          </div>

          {/* Senha Inicial */}
          <div className="grid gap-2">
            <Label htmlFor="password">Senha Inicial</Label>
            <Input id="password" name="password" type="password" required />
          </div>

          {/* Cargo (Role) */}
          <div className="grid gap-2">
            <Label htmlFor="role">Nível de Acesso</Label>
            {/* Input hidden para garantir que o valor vá no formData */}
            <input type="hidden" name="role" value={role} />
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o cargo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">Usuário (Padrão)</SelectItem>
                <SelectItem value="admin">Administrador</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button type="submit">Criar Conta</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
