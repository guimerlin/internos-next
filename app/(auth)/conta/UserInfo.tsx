'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
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
import { User } from '@/types';

interface UserInfoProps {
  user: User;
}

const UserInfo = ({ user }: UserInfoProps) => {
  return (
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
            <ItemDescription>{user?.fullName}</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="default">
          <ItemContent>
            <ItemTitle>Username:</ItemTitle>
            <ItemDescription>{user?.username}</ItemDescription>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter className="justify-center">
        <Link
          href="/conta?action=edit"
          className={buttonVariants({ variant: 'default' })}
        >
          Editar Informações
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserInfo;
