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

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ action: string }>;
}) => {
  const session = await auth();
  const user = session?.user;
  const SearchParams = await searchParams;

  if (!user) return redirect('/login');

  return (
    <div className="mx-8 my-20 flex flex-col items-center justify-center">
      <div className="flex items-center gap-5">
        {user?.image && (
          <Image
            src={user?.image}
            width={100}
            height={100}
            alt="User Profile"
            className="rounded-full border-3 border-gray-300"
          />
        )}
        <div className="">
          <p className="text-xl font-semibold">Bem vindo, {user?.name}!</p>
          <p className="text-sm font-light text-gray-500">{user?.email}</p>
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
            {!user.admin && (
              <Item variant="outline">
                <ItemContent>
                  <ItemTitle>Admin</ItemTitle>
                  <ItemDescription>
                    Faça Uploads e Atualizações em informações.
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
