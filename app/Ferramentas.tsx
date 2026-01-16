import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
  CardAction,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { NotebookText, LayoutGrid } from 'lucide-react';

export default async function Ferramentas() {
  return (
    <section className="section" id="ferramentas">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="mb-16 text-center text-5xl font-bold text-gray-900">
          Por Onde Começar:
        </h2>
        <div className="flex w-full justify-center gap-5 pb-20">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardAction>
                <NotebookText />
              </CardAction>
              <CardTitle>Regimento Interno</CardTitle>
              <CardDescription>
                Nossas principais Regras e Protocolos da Rede.
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
                Acesse os manuais e informações sobre nossos sistemas
                principais: Cesária App, Pharmagno ERP e MagnoPDV.
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
