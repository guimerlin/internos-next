import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { UserWithPayslips } from '@/types';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, Paperclip } from 'lucide-react';
import { HoleriteUploadDialog } from './HoleriteUpload';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { exclude } from './action';
import Link from 'next/link';
import { api } from '@/lib/api';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const page = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user || user.role !== 'admin') return redirect('/login');

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

  const users = (await (
    await api('/admin/users-with-payslips')
  ).json()) as UserWithPayslips[];

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* --- SEU HEADER --- */}
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="pb-5">
            <Avatar className="h-[100] w-[100] border-2 border-red-600">
              <AvatarImage src={user.image} />
              <AvatarFallback title={user.fullName} className="">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <p className="text-xl font-bold text-gray-900">
            Painel Administrativo
          </p>
          <p className="text-sm font-extralight text-gray-500">
            Fazendo alterações em nome de
          </p>
          <p className="pt-2 font-semibold text-gray-800">{user.fullName}</p>
        </div>
      </div>

      {/* --- GRID DE USUÁRIOS --- */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Informações de Pagamentos
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((colaborador) => (
            <Card
              key={colaborador.id}
              className="overflow-hidden shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-white pb-2">
                <div className="flex items-center gap-3">
                  {/* Avatar do Colaborador (Fallback se não tiver imagem) */}
                  <Avatar className="">
                    <AvatarImage src={colaborador.image} />
                    <AvatarFallback
                      title={colaborador.fullName || colaborador.username}
                      className=""
                    >
                      {colaborador.fullName
                        ? colaborador.fullName
                            .trim()
                            .split(/\s+/)
                            .filter(Boolean)
                            .map((n) => n[0])
                            .filter((_, i, a) => i === 0 || i === a.length - 1)
                            .join('')
                            .toUpperCase()
                        : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-bold">
                      {colaborador.fullName || colaborador.username}
                    </CardTitle>
                    <p className="text-muted-foreground text-xs">
                      {colaborador.role || 'Colaborador'}
                    </p>
                  </div>
                </div>

                {/* BOTÃO DIALOG DE UPLOAD AQUI */}
                <HoleriteUploadDialog
                  userId={colaborador.id}
                  userName={colaborador.fullName || colaborador.username}
                />
              </CardHeader>

              <CardContent>
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                    Holerites Enviados
                  </p>

                  <ScrollArea className="h-30 rounded-md border bg-gray-50 p-2">
                    {colaborador.payslips && colaborador.payslips.length > 0 ? (
                      <ul className="space-y-2">
                        {colaborador.payslips.map((holerite) => (
                          <Link
                            key={holerite.id}
                            href={holerite.fileUrl as string}
                            className="flex items-center justify-between rounded bg-white p-2 text-sm shadow-sm"
                          >
                            <div className="flex items-center gap-2">
                              <Paperclip className="h-3 w-3 text-red-500" />
                              <span className="max-w-30 truncate font-medium text-gray-700">
                                {holerite.natureza}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Calendar className="h-3 w-3" />
                              {/* Exemplo de data, ajuste conforme seu banco */}
                              <span>
                                {new Date(
                                  holerite.dataEmissao,
                                ).toLocaleDateString()}
                              </span>
                              <form action={exclude}>
                                <input
                                  type="hidden"
                                  value={holerite.id}
                                  name="id"
                                />
                                <Button
                                  variant="ghost"
                                  className="text-red-500"
                                >
                                  <Trash />
                                </Button>
                              </form>
                            </div>
                          </Link>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-xs text-gray-400">
                        <p>Nenhum documento</p>
                      </div>
                    )}
                  </ScrollArea>

                  <div className="text-muted-foreground mt-4 flex items-start justify-between text-xs">
                    <span>Total: {colaborador.payslips?.length || 0}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
