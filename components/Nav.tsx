import Link from 'next/link';
import Logotipo from './Logotipo';
import { User } from 'lucide-react';

export default async function Nav() {
  return (
    <div className="my-2 flex w-full justify-center text-gray-900">
      <nav className="mx-8 flex h-10 w-full items-center justify-between gap-2 rounded-full bg-white/90 px-3 shadow">
        <Logotipo />
        <div className="flex gap-3">
          <Link href="/" className="">
            Início
          </Link>

          <Link href="/guia" className="">
            Guia
          </Link>

          <Link href="/sobre" className="">
            Sobre
          </Link>

          <Link href="/contatos" className="">
            Contatos
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="">
            Login
          </Link>
          <Link href="/conta" className="">
            <User size={19} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
