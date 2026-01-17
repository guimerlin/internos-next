import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-react';
import Image from 'next/image';
import { auth } from '@/auth';
import Link from 'next/link';

export async function ProfileDropdown() {
  const session = await auth();
  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {user?.image ? (
            <div className="flex items-center gap-2">
              <p>{user.name}</p>
              <Image
                src={user.image}
                width={35}
                height={35}
                alt="User Profile Picture"
                className="rounded-full border-2 border-gray-500"
                priority
              />
            </div>
          ) : (
            <User />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href="/conta">
            <DropdownMenuItem>Perfil</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Pagamentos</DropdownMenuItem>
          <DropdownMenuItem>Configurações</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Avisos</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Suporte</DropdownMenuItem>
        <DropdownMenuItem disabled>Cursos</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
