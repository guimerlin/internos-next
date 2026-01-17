import React, { use } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { auth } from '@/auth';
import { notFound } from 'next/navigation';
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Holerite } from '@/types';
import Image from 'next/image';
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemActions,
} from '@/components/ui/item';
import { view } from './actions';
import { Button } from '@/components/ui/button';

async function fetchUserData(userId: string): Promise<{
  uid: string;
  holerites: Holerite[];
}> {
  try {
    const holeritesQuery = query(
      collection(db, 'holerites'),
      where('uid', '==', userId),
    );
    const userDocQuery = query(
      collection(db, 'users'),
      where('uid', '==', userId),
    );

    const [holeritesSnap, userSnap] = await Promise.all([
      getDocs(holeritesQuery),
      getDocs(userDocQuery),
    ]);

    const holerites = holeritesSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const userData =
      userSnap.docs.length > 0
        ? { uid: userSnap.docs[0].id, ...userSnap.docs[0].data() }
        : { uid: userId };
    return {
      ...userData,
      holerites,
    };
  } catch (e) {
    console.error('Erro ao buscar dados do usuário:', e);
    throw e;
  }
}

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user || !user.id) notFound();

  const userData = await fetchUserData(user.id);

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Cabeçalho da Página */}
      <div className="mb-10 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold tracking-tight">Documentos</h1>
        <p className="text-muted-foreground mt-2">
          Visualize seus holerites e comprovantes.
        </p>
      </div>

      {/* Grid Layout: Resolve o problema de alinhamento */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {userData.holerites.length > 0 ? (
          userData.holerites.map((holerite) => (
            <Card
              key={holerite.id}
              className={`flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg ${
                !holerite.view
                  ? 'border-blue-500/50 shadow-md ring-1 ring-blue-500/20'
                  : ''
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="truncate text-lg leading-tight capitalize">
                    {holerite.natureza.toLowerCase()}
                  </CardTitle>

                  {/* Badge de 'Novo' feita com Tailwind puro para não depender de outro componente */}
                  {!holerite.view && (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                      Novo
                    </span>
                  )}
                </div>
                <CardDescription>
                  {new Date(holerite.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </CardDescription>
              </CardHeader>

              {/* Área da Imagem: Usando flex-1 para empurrar o footer para baixo */}
              <CardContent className="flex-1 p-4 pt-2">
                <div className="bg-muted/30 relative h-48 w-full overflow-hidden rounded-md border">
                  {/* O 'fill' faz a imagem ocupar o container 'relative' acima sem estourar */}
                  <Image
                    src={holerite.imagem}
                    alt={holerite.natureza}
                    fill
                    className="object-contain p-2 transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <form action={view} className="w-full">
                  <input type="hidden" name="id" value={holerite.id} />
                  <input
                    type="hidden"
                    name="view"
                    value={holerite.view ? 'S' : 'N'}
                  />
                  <input
                    type="hidden"
                    name="imageLink"
                    value={holerite.imagem}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    variant={!holerite.view ? 'default' : 'outline'}
                  >
                    {!holerite.view ? 'Visualizar Documento' : 'Ver Novamente'}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          ))
        ) : (
          /* Estado Vazio */
          <div className="bg-muted/10 col-span-full rounded-xl border-2 border-dashed py-16 text-center">
            <p className="text-muted-foreground">
              Nenhum documento disponível no momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
