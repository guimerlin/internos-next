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
import { auth } from '@/auth';
import Link from 'next/link';
import { logout } from '@/app/(auth)/conta/actions';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export async function ProfileDropdown() {
  const session = await auth();
  const user = session?.user;
  if (!user) return null;
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <div className="flex items-center gap-2">
            <p>{user.fullName}</p>
            <Avatar>
              <AvatarImage src={user.image} />
              <AvatarFallback title={user.fullName}>{initials}</AvatarFallback>
            </Avatar>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href="/conta">
            <DropdownMenuItem>Perfil</DropdownMenuItem>
          </Link>
          <Link href="/conta/pagamentos">
            <DropdownMenuItem disabled>Pagamentos</DropdownMenuItem>
          </Link>
          <Link href="/conta/holerites">
            <DropdownMenuItem>Holerites</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>Avisos</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Suporte</DropdownMenuItem>
        <DropdownMenuItem disabled>Cursos</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form action={logout}>
            <Button type="submit" variant="destructive">
              Sair
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
