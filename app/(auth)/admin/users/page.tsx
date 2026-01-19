import React from 'react';
import { api } from '@/lib/api';
import { redirect } from 'next/navigation';
import { User } from '@/types';
import { auth } from '@/auth';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  UserCog,
  Trash2,
  KeyRound,
  UserPlus,
  ShieldCheck,
  User as UserIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Componentes que você teria (Modais/Dialogs)
// import { EditUserDialog } from "./_components/edit-user-dialog";
// import { DeleteUserDialog } from "./_components/delete-user-dialog";
// import { ResetPasswordDialog } from "./_components/reset-password-dialog";
// import { CreateUserDialog } from "./_components/create-user-dialog";

const UsersAdminPage = async () => {
  const session = await auth();
  const currentUser = session?.user;

  // Proteção de Rota
  if (!currentUser || currentUser.role !== 'admin') redirect('/login');

  // Busca de usuários
  const response = await api('/admin/users');
  const users = await response.json();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-gray-900">
            <UserCog className="text-primary h-8 w-8" />
            Gerenciamento de Usuários
          </h1>
          <p className="text-muted-foreground mt-1">
            Administre contas, permissões e segurança dos colaboradores.
          </p>
        </div>

        {/* Componente para criar novo usuário */}
        {/* <CreateUserDialog /> */}
        <Button className="flex gap-2">
          <UserPlus className="h-4 w-4" /> Criar Usuário
        </Button>
      </div>

      <div className="overflow-hidden rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              <TableHead className="w-[100px]">Iniciais</TableHead>
              <TableHead>Nome Completo</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Cargo / Nível</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <TableRow
                  key={user.id}
                  className="transition-colors hover:bg-gray-50/50"
                >
                  <TableCell>
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                      {user.fullName
                        ?.trim()
                        .split(/\s+/)
                        .map((n) => n[0])
                        .filter((_, i, a) => i === 0 || i === a.length - 1)
                        .join('')
                        .toUpperCase() || '??'}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {user.fullName || 'Sem nome cadastrado'}
                  </TableCell>
                  <TableCell className="text-gray-500">
                    @{user.username}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === 'admin' ? 'default' : 'secondary'}
                      className="gap-1 capitalize"
                    >
                      {user.role === 'admin' ? (
                        <ShieldCheck className="h-3 w-3" />
                      ) : (
                        <UserIcon className="h-3 w-3" />
                      )}
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {/* Botão Resetar Senha */}
                      {/* <ResetPasswordDialog userId={user.id} /> */}
                      <Button
                        variant="outline"
                        size="icon"
                        title="Resetar Senha"
                        className="h-8 w-8 border-orange-200 text-orange-600 hover:bg-orange-50"
                      >
                        <KeyRound className="h-4 w-4" />
                      </Button>

                      {/* Botão Editar Info */}
                      {/* <EditUserDialog user={user} /> */}
                      <Button
                        variant="outline"
                        size="icon"
                        title="Editar Usuário"
                        className="h-8 w-8 border-blue-200 text-blue-600 hover:bg-blue-50"
                      >
                        <UserCog className="h-4 w-4" />
                      </Button>

                      {/* Botão Deletar (Não permite deletar a si mesmo) */}
                      {/* <DeleteUserDialog userId={user.id} disabled={user.id === currentUser.id} /> */}
                      <Button
                        variant="outline"
                        size="icon"
                        title="Excluir Usuário"
                        className="h-8 w-8 border-red-200 text-red-600 hover:bg-red-50"
                        disabled={user.id === currentUser.id}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-muted-foreground h-24 text-center"
                >
                  Nenhum usuário encontrado no sistema.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersAdminPage;
