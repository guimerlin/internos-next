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

interface UserInfoProps {
  user: any;
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
        <input type="hidden" name="userId" value={user.id} />
        <CardContent>
          <Item variant="default">
            <ItemContent>
              <ItemTitle>
                <label htmlFor="name">Nome:</label>
              </ItemTitle>
              <ItemDescription>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user?.name}
                  className="rounded-sm border border-gray-800 p-1 text-gray-900"
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
