import { signIn } from '@/auth';
import { LogIn, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/favicon.png';

export default function SignIn() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logotipo ou Nome da Rede */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-blue-200">
            <Image src={logo} width={100} height={100} alt="Logotipo" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
          Rede Cesaria
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Acesse o seu Portal do Colaborador
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border border-slate-100 bg-white px-4 py-8 shadow-xl shadow-slate-200/50 sm:rounded-3xl sm:px-10">
          <div className="space-y-6">
            <div>
              <p className="mb-4 text-center text-sm font-medium text-slate-700">
                Utilize sua conta corporativa para entrar
              </p>

              <form
                action={async () => {
                  'use server';
                  await signIn('google', { redirectTo: '/dashboard' });
                }}
              >
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
                >
                  {/* Ícone do Google em SVG direto para garantir as cores oficiais */}
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Entrar com Google
                </button>
              </form>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 font-medium text-slate-400 italic">
                  Rede Cesaria
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs leading-relaxed text-slate-500">
                Ao entrar, você concorda com nossos <br />
                <a
                  href="#"
                  className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-500"
                >
                  Termos de Uso
                </a>{' '}
                e{' '}
                <a
                  href="#"
                  className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-500"
                >
                  Privacidade
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé de Ajuda */}
        <div className="mt-8 text-center">
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            O que é este portal?
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
