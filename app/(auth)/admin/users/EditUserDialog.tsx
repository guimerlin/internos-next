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
import { UserCog } from 'lucide-react';
import { updateUserAction } from './actions';
import { User } from '@/types'; // Sua interface User

export function EditUserDialog({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState(user.role);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Editar Usuário"
          className="h-8 w-8 border-blue-200 text-blue-600 hover:bg-blue-50"
        >
          <UserCog className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
          <DialogDescription>
            Alterar dados de <strong>{user.username}</strong>.
          </DialogDescription>
        </DialogHeader>

        <form
          action={async (formData) => {
            await updateUserAction(formData);
            setOpen(false);
          }}
          className="grid gap-4 py-4"
        >
          <input type="hidden" name="userId" value={user.id} />

          {/* Nome */}
          <div className="grid gap-2">
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              name="fullName"
              defaultValue={user.fullName || ''}
              required
            />
          </div>

          {/* Cargo */}
          <div className="grid gap-2">
            <Label htmlFor="role">Nível de Acesso</Label>
            <input type="hidden" name="role" value={role} />
            <Select value={role} onValueChange={(val: any) => setRole(val)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">Usuário</SelectItem>
                <SelectItem value="admin">Administrador</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button type="submit">Salvar Alterações</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
