import React from 'react';
import { api } from '@/lib/api';
import { redirect } from 'next/navigation';
import { User } from '@/types';
import { auth } from '@/auth';

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.role !== 'admin') redirect('/login');

  const users = (await (await api('/admin/users')).json()) as User[];
  console.log('USERS', users);

  return (
    <div>
      <div>
        <h1>Gerenciamento de Usuários</h1>
      </div>
    </div>
  );
};

export default page;
