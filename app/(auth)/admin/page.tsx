import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item';

const AdminPage = () => {
  return (
    <div className="mx-auto my-20 flex max-w-2xl flex-col items-center justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Página de Administração</CardTitle>
          <CardDescription>
            Atalhos para as páginas de administração do sistema.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Dashboard</ItemTitle>
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
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Gerenciar Usuários</ItemTitle>
              <ItemDescription>
                Adicione, edite ou remova usuários do sistema.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Link
                href="/admin/users"
                className={buttonVariants({ variant: 'outline' })}
              >
                Abrir
              </Link>
            </ItemActions>
          </Item>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;