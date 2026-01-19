import React from 'react';
import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { logout } from './actions';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item';
import UserInfo from './UserInfo';
import EditInfo from './EditInfo';
import { redirect } from 'next/navigation';
import { User } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ action: string }>;
}) => {
  const session = await auth();
  const user = session?.user;
  const SearchParams = await searchParams;

  if (!user) return redirect('/login');

  const initials = user.fullName
    ? user.fullName
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((n) => n[0])
        .filter((_, i, a) => i === 0 || i === a.length - 1)
        .join('')
        .toUpperCase()
    : 'U';

  return (
    <div className="mx-8 my-20 flex flex-col items-center justify-center">
      <div className="flex items-center gap-5">
        <Avatar className="h-[100] w-[100]">
          <AvatarImage src={user.image} />
          <AvatarFallback title={user.fullName} className="">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="">
          <p className="text-xl font-semibold">Bem vindo, {user?.fullName}!</p>
          <p className="text-sm font-light text-gray-500">{user?.username}</p>
          <form action={logout}>
            <Button variant="link" type="submit">
              Não é você?
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-2 md:flex-row md:items-start md:justify-center">
        {SearchParams.action !== 'edit' ? (
          <UserInfo user={user} />
        ) : (
          <EditInfo user={user} />
        )}

        <Card className="w-auto">
          <CardHeader>
            <CardTitle>Opções Úteis</CardTitle>
            <CardDescription>
              Atalhos para páginas e funções uteis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {user.role === 'admin' && (
              <Item variant="outline">
                <ItemContent>
                  <ItemTitle>Admin</ItemTitle>
                  <ItemDescription>
                    Faça Uploads e Atualizações de informações.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Link
                    href="/admin/dashboard"
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Abrir
                  </Link>
                </ItemActions>
              </Item>
            )}
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Pagamentos</ItemTitle>
                <ItemDescription>
                  Verifique Recibo de pagamentos e Premiações.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Link
                  href="conta/pagamentos"
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Abrir
                </Link>
              </ItemActions>
            </Item>
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Holerites</ItemTitle>
                <ItemDescription>
                  Visualize todos os seus Holerites postados.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Link
                  href="/conta/holerites"
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Abrir
                </Link>
              </ItemActions>
            </Item>
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Avisos</ItemTitle>
                <ItemDescription>
                  Verifique avisos e lembretes postados.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <Link
                  href="/conta/avisos"
                  className={buttonVariants({ variant: 'outline' })}
                >
                  Abrir
                </Link>
              </ItemActions>
            </Item>
          </CardContent>
          <CardFooter className="justify-center">
            <Link href="/ajuda" className={buttonVariants({ variant: 'link' })}>
              Precisa de Ajuda?
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
