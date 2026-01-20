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
import { KeyRound } from 'lucide-react';
import { resetPasswordAction } from './actions';

export function ResetPasswordDialog({ userId }: { userId: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Resetar Senha"
          className="h-8 w-8 border-orange-200 text-orange-600 hover:bg-orange-50"
        >
          <KeyRound className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Resetar Senha</DialogTitle>
          <DialogDescription>
            Defina uma nova senha para este usuário. Ele perderá o acesso até
            logar com a nova credencial.
          </DialogDescription>
        </DialogHeader>

        <form
          action={async (formData) => {
            await resetPasswordAction(formData);
            setOpen(false);
          }}
          className="grid gap-4 py-4"
        >
          <input type="hidden" name="userId" value={userId} />

          <div className="grid gap-2">
            <Label htmlFor="newPassword">Nova Senha</Label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Mínimo 6 caracteres"
              minLength={6}
              required
            />
          </div>

          <DialogFooter>
            <Button type="submit" variant="destructive">
              Alterar Senha
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
