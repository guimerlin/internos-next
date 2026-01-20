import logo from '@/public/favicon.png';
import Image from 'next/image';
import { Bell, BookOpen, DollarSign, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div className="mx-5">
        <section className="section" id="inicio">
          <div className="my-20 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-red-500 p-2">
              <Image src={logo} width={100} height={100} alt="Logotipo" />
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed font-bold text-gray-600">
              Portal do Colaborador
            </p>
          </div>
        </section>

        <section className="px-6 py-16" id="sobre">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
                Portal do Colaborador
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                Este portal foi desenvolvido pela{' '}
                <span className="font-semibold text-blue-600">
                  Rede Cesaria
                </span>{' '}
                para que nossos funcionários possam acessar informações
                essenciais do trabalho em um ambiente seguro e centralizado.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1: Guias Rápidos */}
              <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-blue-200">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110">
                  <BookOpen size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">
                  Guias Rápidos
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Tutoriais e manuais práticos de todas as nossas ferramentas de
                  trabalho disponíveis para consulta imediata.
                </p>
              </div>

              {/* Card 2: Avisos */}
              <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-amber-200">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition-transform group-hover:scale-110">
                  <Bell size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">
                  Avisos da Equipe
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Mantenha-se atualizado com comunicados internos, eventos e
                  todas as novidades importantes da nossa rede.
                </p>
              </div>

              {/* Card 3: Pagamento */}
              <div className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-emerald-200">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform group-hover:scale-110">
                  <DollarSign size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">
                  Informações de Pagamento
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Área dedicada para consulta de holerites, informes de
                  rendimentos e dúvidas sobre seus benefícios financeiros.
                </p>
              </div>
            </div>

            {/* Banner Informativo Final */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-lg">
              <div className="mb-2 flex items-center justify-center gap-3">
                <Rocket size={20} className="text-blue-200" />
                <p className="text-lg font-semibold italic">
                  Estamos em constante evolução!
                </p>
              </div>
              <p className="mx-auto max-w-2xl text-blue-100">
                Em breve, novas funcionalidades serão disponibilizadas para que
                a equipe tenha um lugar completo ao qual recorrer sempre que
                precisar de ajuda.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
