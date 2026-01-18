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

interface UserInfoProps {
  user: any;
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
