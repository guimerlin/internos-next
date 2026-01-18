import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { db } from '@/lib/firebase/config';
import Image from 'next/image';
import { collection, getDocs } from 'firebase/firestore';
import { Holerite, User } from '@/types';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Calendar, Paperclip } from 'lucide-react';
import { HoleriteUploadDialog } from './HoleriteUpload';

async function fetchAllUsersWithData(): Promise<User[]> {
  try {
    const [holeritesSnap, usersSnap] = await Promise.all([
      getDocs(collection(db, 'holerites')),
      getDocs(collection(db, 'users')),
    ]);

    const holeritesPorUsuario: Record<string, Holerite[]> = {};

    holeritesSnap.forEach((doc) => {
      const data = doc.data() as Omit<Holerite, 'id'>;
      const holerite = { id: doc.id, ...data };
      const userUid = data.uid;

      if (!holeritesPorUsuario[userUid]) {
        holeritesPorUsuario[userUid] = [];
      }
      holeritesPorUsuario[userUid].push(holerite);
    });

    const users: User[] = usersSnap.docs.map((doc) => {
      const userData = doc.data();
      const uid = userData.uid || doc.id;

      return {
        uid: doc.id,
        ...userData,
        holerites: holeritesPorUsuario[uid] || [],
      } as User;
    });

    return users;
  } catch (e) {
    console.error('Erro ao buscar todos os usuários e holerites:', e);
    throw e;
  }
}

const page = async () => {
  const session = await auth();
  const user = session?.user;

  const users = await fetchAllUsersWithData();
  console.log(users);

  if (!user) return redirect('/login');

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* --- SEU HEADER --- */}
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="pb-5">
            <Image
              src={user.image as string}
              alt="User image"
              width={100}
              height={100}
              className="rounded-full border-2 border-red-600 shadow-lg"
            />
          </div>
          <p className="text-xl font-bold text-gray-900">
            Painel Administrativo
          </p>
          <p className="text-sm font-extralight text-gray-500">
            Fazendo alterações em nome de
          </p>
          <p className="pt-2 font-semibold text-gray-800">{user.name}</p>
        </div>
      </div>

      {/* --- GRID DE USUÁRIOS --- */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Colaboradores
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((colaborador) => (
            <Card
              key={colaborador.uid}
              className="overflow-hidden border-t-4 border-t-red-600 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-white pb-2">
                <div className="flex items-center gap-3">
                  {/* Avatar do Colaborador (Fallback se não tiver imagem) */}
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200">
                    {colaborador.image ? (
                      <Image
                        src={colaborador.image}
                        alt={colaborador.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs font-bold text-gray-500">
                        {colaborador.name?.substring(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      {colaborador.name || colaborador.nome}
                    </CardTitle>
                    <p className="text-muted-foreground text-xs">
                      {colaborador.role || 'Colaborador'}
                    </p>
                  </div>
                </div>

                {/* BOTÃO DIALOG DE UPLOAD AQUI */}
                <HoleriteUploadDialog
                  userId={colaborador.uid}
                  userName={colaborador.name}
                />
              </CardHeader>

              <CardContent>
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                    Holerites Recentes
                  </p>

                  <ScrollArea className="h-[120px] rounded-md border bg-gray-50 p-2">
                    {colaborador.holerites &&
                    colaborador.holerites.length > 0 ? (
                      <ul className="space-y-2">
                        {colaborador.holerites.map((holerite) => (
                          <li
                            key={holerite.id}
                            className="flex items-center justify-between rounded bg-white p-2 text-sm shadow-sm"
                          >
                            <div className="flex items-center gap-2">
                              <Paperclip className="h-3 w-3 text-red-500" />
                              <span className="max-w-[120px] truncate font-medium text-gray-700">
                                {holerite.natureza}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <Calendar className="h-3 w-3" />
                              {/* Exemplo de data, ajuste conforme seu banco */}
                              <span>
                                {new Date(holerite.data).toLocaleDateString()}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center text-xs text-gray-400">
                        <p>Nenhum documento</p>
                      </div>
                    )}
                  </ScrollArea>

                  <div className="text-muted-foreground mt-4 flex items-center justify-between text-xs">
                    <span>Total: {colaborador.holerites?.length || 0}</span>
                    <Badge
                      variant="outline"
                      className="border-red-200 bg-red-50 text-red-700"
                    >
                      Ativo
                    </Badge>
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
