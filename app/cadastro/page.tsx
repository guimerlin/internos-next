import { auth, signUp } from '@/auth';
import { LogIn, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/favicon.png';
import { redirect } from 'next/navigation';
import ImageUploadPreview from '@/components/UploadImagePreview';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default async function SignIn() {
  const session = await auth();
  if (session?.user) return redirect('/');

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
          Cadastre-se no Portal do Colaborador
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border border-slate-100 bg-white px-4 py-8 shadow-xl shadow-slate-200/50 sm:rounded-3xl sm:px-10">
          <div className="space-y-6">
            <div>
              <p className="mb-4 text-center text-sm font-medium text-slate-700">
                Preencha os campos abaixo para se registrar.
              </p>

              <form action={signUp}>
                <div className="mb-8 flex w-full flex-col items-start justify-center gap-2">
                  <div className="w-full pb-8">
                    <ImageUploadPreview />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="fullName"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Seu nome Completo"
                      id="fullName"
                      required
                      className="w-full rounded-md border border-gray-400 p-2 text-gray-900"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="username"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      Usuário
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Seu nome de Usuário"
                      id="username"
                      required
                      className="w-full rounded-md border border-gray-400 p-2 text-gray-900"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="password"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Sua Senha"
                      id="password"
                      required
                      className="w-full rounded-md border border-gray-400 p-2 text-gray-900"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="confirmPassword"
                      className="mb-1 block text-sm font-medium text-slate-700"
                    >
                      Confirme sua Senha
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirme sua Senha"
                      id="confirmPassword"
                      required
                      className="w-full rounded-md border border-gray-400 p-2 text-gray-900"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
                >
                  <LogIn size={16} />
                  Cadastrar
                </button>
              </form>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 font-medium text-slate-400 italic">
                  <Link
                    href="/login"
                    className={buttonVariants({ variant: 'link' })}
                  >
                    Já tem uma conta?
                  </Link>
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
