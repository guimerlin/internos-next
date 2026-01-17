import Link from 'next/link';
import Logotipo from './Logotipo';
import { auth } from '@/auth';
import { ProfileDropdown } from './ProfileDropdown';

export default async function Nav() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="sticky top-0 z-50 my-2 flex w-full justify-center text-gray-900">
      <nav className="flex h-15 w-full items-center justify-between gap-2 bg-white/90 px-3 shadow">
        <Logotipo />
        <div className="flex gap-3">
          <Link href="/" className="">
            Início
          </Link>

          <Link href="/regimento" className="">
            Regimento
          </Link>

          {/* <Link href="/sobre" className="">
            Sobre
          </Link> */}

          <Link href="/contatos" className="">
            Contatos
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {!user ? (
            <Link href="/login" className="">
              Login
            </Link>
          ) : (
            <ProfileDropdown />
          )}
        </div>
      </nav>
    </div>
  );
}
