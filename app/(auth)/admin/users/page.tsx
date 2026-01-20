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
import { UserCog, ShieldCheck, User as UserIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { EditUserDialog } from './EditUserDialog';
import { DeleteUserDialog } from './DeleteUserDialog';
import { ResetPasswordDialog } from './ResetPasswordDialog';
import { CreateUserDialog } from './CreateUserDialog';

const UsersAdminPage = async () => {
  const session = await auth();
  const currentUser = session?.user;

  // Proteção de Rota
  if (!currentUser || currentUser.role !== 'admin') redirect('/login');

  // Busca de usuários
  const response = await api('/admin/users');
  const users = (await response.json()) as User[];

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
        <CreateUserDialog />
      </div>

      <div className="overflow-hidden rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow>
              <TableHead className="w-25">Iniciais</TableHead>
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
                    <Avatar className="">
                      <AvatarImage src={user.image} />
                      <AvatarFallback
                        title={user.fullName || user.username}
                        className=""
                      >
                        {user.fullName
                          ? user.fullName
                              .trim()
                              .split(/\s+/)
                              .filter(Boolean)
                              .map((n) => n[0])
                              .filter(
                                (_, i, a) => i === 0 || i === a.length - 1,
                              )
                              .join('')
                              .toUpperCase()
                          : 'U'}
                      </AvatarFallback>
                    </Avatar>
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
                      <ResetPasswordDialog userId={user.id} />
                      <EditUserDialog user={user} />
                      <DeleteUserDialog
                        userId={user.id}
                        disabled={user.id === currentUser.id}
                      />
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
