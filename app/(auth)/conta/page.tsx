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

const page = async () => {
  const session = await auth();
  const user = session?.user;

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
        <Card>
          <CardHeader>
            <CardTitle>Suas Informações</CardTitle>
            <CardDescription>
              Verifique ou atualize suas informações pessoais.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Item variant="default">
              <ItemContent>
                <ItemTitle>Nome:</ItemTitle>
                <ItemDescription>{user?.name}</ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="default">
              <ItemContent>
                <ItemTitle>Email:</ItemTitle>
                <ItemDescription>{user?.email}</ItemDescription>
              </ItemContent>
            </Item>
          </CardContent>
          <CardFooter className="justify-center">
            <Link
              href="/conta/editar"
              className={buttonVariants({ variant: 'default' })}
            >
              Editar Informações
            </Link>
          </CardFooter>
        </Card>
        <Card className="w-auto">
          <CardHeader>
            <CardTitle>Opções Úteis</CardTitle>
            <CardDescription>
              Atalhos para páginas e funções uteis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
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
