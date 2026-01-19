'use client';

import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
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
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item';
import { save } from './actions';
import { User } from '@/types';

interface UserInfoProps {
  user: User;
}

const EditInfo = ({ user }: UserInfoProps) => {
  console.log(user);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atualizar Informações</CardTitle>
        <CardDescription>
          Verifique ou atualize suas informações pessoais.
        </CardDescription>
      </CardHeader>
      <form action={save}>
        <CardContent>
          <Item variant="default">
            <ItemContent>
              <ItemTitle>
                <label htmlFor="fullName">Nome:</label>
              </ItemTitle>
              <ItemDescription>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder={user?.fullName || 'Seu Nome Completo'}
                  className="rounded-sm border border-gray-800 p-1 text-gray-900"
                />
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="default">
            <ItemContent>
              <ItemTitle>
                <label htmlFor="username">Username:</label>
              </ItemTitle>
              <ItemDescription>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder={user?.username}
                  className="rounded-sm border border-gray-800 p-1 text-gray-900"
                />
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item variant="default">
            <ItemContent>
              <ItemTitle>
                <label htmlFor="password">Senha:</label>
              </ItemTitle>
              <ItemDescription>
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="rounded-sm border border-gray-800 p-1 text-gray-900"
                  placeholder="Sua nova Senha"
                />
              </ItemDescription>
            </ItemContent>
          </Item>
        </CardContent>
        <CardFooter className="justify-center gap-2">
          <Button variant="outline" type="submit">
            Salvar
          </Button>
          <Link
            href="/conta"
            className={buttonVariants({ variant: 'outline' })}
          >
            Cancelar
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditInfo;
