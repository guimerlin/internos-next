import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardAction,
} from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { NotebookText, LayoutGrid } from 'lucide-react';

export default async function Ferramentas() {
  return (
    <section className="w-full" id="ferramentas">
      <div className="flex w-full flex-col items-center justify-center py-20 text-center">
        <h2 className="mb-16 text-center text-5xl font-bold text-gray-800">
          Tópicos Úteis
        </h2>
        <div className="flex w-full justify-center gap-5 pb-20">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardAction>
                <NotebookText />
              </CardAction>
              <CardTitle>Regimento Interno</CardTitle>
              <CardDescription>
                Consulte as diretrizes, normas e procedimentos que orientam as
                operações e a conduta em nossa rede.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex-col gap-2">
              <Link
                href="/regimento"
                className={buttonVariants({ variant: 'default' })}
              >
                Ir para o Regimento
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardAction>
                <LayoutGrid />
              </CardAction>
              <CardTitle>Aplicações Internas</CardTitle>
              <CardDescription>
                Manuais, tutoriais e informações detalhadas sobre nossos
                sistemas essenciais: Cesária App, Pharmagno ERP e MagnoPDV.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex-col gap-2">
              <Link
                href="/apps"
                className={buttonVariants({ variant: 'default' })}
              >
                Ver Aplicações
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
