import React from 'react';
import {
  ShieldCheck,
  Clock,
  UserCheck,
  Store,
  Truck,
  HeartHandshake,
  AlertCircle,
  FileText,
  Target,
  Eye,
  Award,
  ChevronRight,
  Phone,
  Package,
  Trash2,
  CheckCircle2,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const RegimentoInterno = async () => {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-red-100 selection:text-red-900">
      {/* Header / Hero Section */}
      <div className="border-b border-zinc-100 bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-1 w-10 bg-red-600" />
            <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
              Drogaria Cesária
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
            Regimento Interno <br />
            <span className="font-light text-zinc-500">
              Manual de Cultura e Conduta
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
            Este documento serve como guia para garantir que nossa missão seja
            cumprida diariamente, orientando nossas ações rumo à excelência no
            atendimento e saúde.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-6 py-16">
        {/* Missão, Visão e Valores - Lado a Lado */}
        <section className="mb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
            <div className="rounded-sm border-l-4 border-red-600 bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3 text-red-600">
                <Target size={24} />
                <h2 className="font-bold tracking-wider uppercase">Missão</h2>
              </div>
              <p className="leading-relaxed text-zinc-700">
                Promover saúde e bem-estar à comunidade, oferecendo um
                atendimento humanizado e personalizado, de acordo com a
                necessidade de cada cliente. Garantir acesso a medicamentos e
                perfumaria com qualidade e competitividade, orientando para a
                adesão correta aos tratamentos, sem distinção de classe.
              </p>
            </div>

            <div className="rounded-sm border-l-4 border-zinc-900 bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3 text-zinc-900">
                <Eye size={24} />
                <h2 className="font-bold tracking-wider uppercase">Visão</h2>
              </div>
              <p className="leading-relaxed text-zinc-700">
                Consolidar a Drogaria Cesária como referência no varejo
                farmacêutico da região até 2026, reconhecida pelo atendimento
                humanizado, entrega ágil e preços acessíveis.
              </p>
            </div>

            <div className="rounded-sm border-l-4 border-red-600 bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3 text-red-600">
                <Award size={24} />
                <h2 className="font-bold tracking-wider uppercase">Valores</h2>
              </div>
              <ul className="grid grid-cols-2 gap-2 font-medium text-zinc-700">
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" />{' '}
                  Honestidade
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" />{' '}
                  Responsabilidade
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" />{' '}
                  Transparência
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" />{' '}
                  Humanização
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" /> Dedicação
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" /> Seriedade
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" /> Leveza
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-red-600" /> Alegria
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Regulamento Interno - Subseções */}
        <section className="mx-auto max-w-4xl">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-3xl font-black tracking-tighter text-zinc-900 uppercase">
              Regulamento Interno
            </h2>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {/* 1. Apresentação Pessoal e Uniformes */}
            <AccordionItem
              value="item-1"
              className="rounded-sm border border-zinc-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="rounded-sm bg-red-50 p-2 text-red-600">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-zinc-900 uppercase">
                      1. Apresentação Pessoal e Uniformes
                    </h3>
                    <p className="mt-1 text-xs font-normal text-zinc-500">
                      Identidade, conservação e normas da Vigilância Sanitária.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 border-t border-zinc-50 pt-6 pb-8 leading-relaxed text-zinc-700">
                <p>
                  <strong>1.1. Obrigatoriedade:</strong> O uso do uniforme
                  fornecido pela empresa é obrigatório. O colaborador deve zelar
                  pela sua conservação e limpeza.
                </p>
                <p>
                  <strong>1.2. Exceções:</strong> Em caso de impossibilidade
                  justificada, utilizar roupas discretas/modestas, sem logos
                  grandes, times de futebol ou estampas chamativas.
                </p>
                <p>
                  <strong>1.3. Farmacêuticos:</strong> O uso do jaleco é
                  obrigatório durante todo o expediente para fácil identificação
                  e cumprimento das normas da Vigilância Sanitária.
                </p>
                <p>
                  <strong>1.4. Autoimagem:</strong> A aparência deve transmitir
                  higiene e profissionalismo, pois lidamos diretamente com o
                  público e saúde.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* 2. Jornada de Trabalho e Registro de Ponto */}
            <AccordionItem
              value="item-2"
              className="rounded-sm border border-zinc-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="rounded-sm bg-zinc-100 p-2 text-zinc-900">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-zinc-900 uppercase">
                      2. Jornada de Trabalho e Registro de Ponto
                    </h3>
                    <p className="mt-1 text-xs font-normal text-zinc-500">
                      Pontualidade, intervalos e responsabilidades legais.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 border-t border-zinc-50 pt-6 pb-8 leading-relaxed text-zinc-700">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold tracking-widest text-red-600 uppercase">
                      Regras de Registro
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle2
                          size={14}
                          className="mt-1 shrink-0 text-red-600"
                        />{' '}
                        Registro pessoal e intransferível.
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2
                          size={14}
                          className="mt-1 shrink-0 text-red-600"
                        />{' '}
                        Proibido bater ponto por terceiros (falta grave).
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2
                          size={14}
                          className="mt-1 shrink-0 text-red-600"
                        />{' '}
                        Horário Britânico é inválido; deve espelhar a realidade.
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2
                          size={14}
                          className="mt-1 shrink-0 text-red-600"
                        />{' '}
                        Variações de até 5 min (limite 10 min/dia) não são
                        descontadas.
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold tracking-widest text-red-600 uppercase">
                      Procedimentos
                    </h4>
                    <p className="text-sm">
                      <strong>Intervalos:</strong> Almoço/descanso deve ser
                      gozado integralmente e registrado. Proibido trabalhar no
                      período.
                    </p>
                    <p className="text-sm">
                      <strong>Faltas:</strong> Comunicar imediatamente.
                      Atestados em até 24h ou no primeiro dia útil de retorno.
                    </p>
                    <p className="text-sm">
                      <strong>Trocas:</strong> Proibidas sem autorização prévia
                      da gerência (Leonardo).
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 3. Padrão de Atendimento e Vendas */}
            <AccordionItem
              value="item-3"
              className="rounded-sm border border-zinc-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="rounded-sm bg-red-50 p-2 text-red-600">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-zinc-900 uppercase">
                      3. Padrão de Atendimento e Vendas
                    </h3>
                    <p className="mt-1 text-xs font-normal text-zinc-500">
                      O Sorriso Cesária, atenção farmacêutica e canais digitais.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 border-t border-zinc-50 pt-6 pb-8 leading-relaxed text-zinc-700">
                <div className="border-l-2 border-red-600 bg-zinc-50 p-4">
                  <p className="text-sm italic">
                    {`"O Sorriso Cesária será a marca que nos destacará. O
                    atendimento é nossa prioridade absoluta."`}
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>3.1. Posologia:</strong> É obrigatório anotar o modo
                    de usar na caixinha. É um diferencial de cuidado.
                  </p>
                  <p>
                    <strong>3.2. Venda Agregada:</strong> Oferecer tratamentos
                    complementares (Vitamina C com antigripais, B12 com
                    enxaqueca, etc.). O foco é a saúde completa.
                  </p>

                  <div className="rounded-sm border border-zinc-100 p-4">
                    <h4 className="mb-3 flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase">
                      <Phone size={14} className="text-red-600" /> Atendimento
                      WhatsApp
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Envio de fotos obrigatório para evitar erros.</li>
                      <li>
                        • Descrição completa: Nome, dosagem, laboratório e preço
                        {`"DE/POR"`}.
                      </li>
                      <li>
                        {`• Exemplo: "Domperidona 10mg (Eurofarma) de R$22,30 por
                        R$18,90. Precisará de 3 caixas."`}
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 4. Operacional de Loja e Estoque */}
            <AccordionItem
              value="item-4"
              className="rounded-sm border border-zinc-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="rounded-sm bg-zinc-100 p-2 text-zinc-900">
                    <Store size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-zinc-900 uppercase">
                      4. Operacional de Loja e Estoque
                    </h3>
                    <p className="mt-1 text-xs font-normal text-zinc-500">
                      Organização, precificação, transferências e limpeza.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 border-t border-zinc-50 pt-6 pb-8 leading-relaxed text-zinc-700">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="border-b border-zinc-100 pb-2 text-xs font-bold tracking-widest text-zinc-900 uppercase">
                      Organização das Gôndolas
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <strong>Éticos:</strong> Primeiras prateleiras, lado
                        direito, ordem alfabética.
                      </li>
                      <li>
                        <strong>Genéricos/Similares:</strong> Ordem alfabética
                        da molécula.
                      </li>
                      <li>
                        <strong>Outros:</strong> Por indicação (piolho,
                        colírios, etc.).
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="border-b border-zinc-100 pb-2 text-xs font-bold tracking-widest text-zinc-900 uppercase">
                      Manutenção e Limpeza
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <strong>Diária:</strong> Espanar gôndolas e álcool nos
                        balcões.
                      </li>
                      <li>
                        <strong>Semanal:</strong> Ar condicionado e banheiros.
                      </li>
                      <li>
                        <strong>Mensal:</strong> Limpeza pesada e detalhada.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-sm border border-red-100 bg-red-50 p-4 text-sm text-red-900">
                  <strong>Atenção:</strong> A falta de preços viola o Código de
                  Defesa do Consumidor e é passível de advertência. Todos os
                  produtos devem ter preço visível.
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 5. Entregas e Malotes */}
            <AccordionItem
              value="item-5"
              className="rounded-sm border border-zinc-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="rounded-sm bg-red-50 p-2 text-red-600">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-zinc-900 uppercase">
                      5. Entregas e Malotes
                    </h3>
                    <p className="mt-1 text-xs font-normal text-zinc-500">
                      Logística, taxas de entrega e organização financeira.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 border-t border-zinc-50 pt-6 pb-8 leading-relaxed text-zinc-700">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-1 space-y-3">
                    <h4 className="text-xs font-bold text-zinc-900 uppercase">
                      Logística de Entrega
                    </h4>
                    <p className="text-sm">
                      Raio padrão: <strong>5km</strong>. Acima disso, consultar
                      Léo ou Dani.
                    </p>
                    <div className="rounded-sm bg-zinc-50 p-3 text-sm">
                      <p>• 0 a 3km: R$ 3,00</p>
                      <p>• Km adicional: R$ 1,00</p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="text-xs font-bold text-zinc-900 uppercase">
                      Malotes
                    </h4>
                    <p className="text-sm">
                      Organização pelo turno <strong>noturno</strong> e envio
                      pelo <strong>matutino</strong>. Atenção rigorosa aos
                      prazos de convênios e premiáveis.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 6. Benefícios e Compras Internas */}
            <AccordionItem
              value="item-6"
              className="rounded-sm border border-zinc-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="rounded-sm bg-zinc-100 p-2 text-zinc-900">
                    <Package size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-zinc-900 uppercase">
                      6. Benefícios e Compras Internas
                    </h3>
                    <p className="mt-1 text-xs font-normal text-zinc-500">
                      Convênio farmácia, vale transporte e ética.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 border-t border-zinc-50 pt-6 pb-8 leading-relaxed text-zinc-700">
                <p>
                  <strong>6.1. Convênio Farmácia:</strong> Compra a preço de
                  custo para desconto em folha. Apenas para uso próprio ou
                  familiar de 1º grau.{' '}
                  <strong>Proibido registrar a própria compra.</strong>
                </p>
                <p>
                  <strong>6.2. Registro de Convênios:</strong> Responsabilidade
                  total do operador. Verificar cadastro, valor e saldo via
                  Cesária App.
                </p>
                <p>
                  <strong>6.3. Vale Transporte:</strong> Uso exclusivo para
                  deslocamento residência-trabalho. Uso indevido é falta grave.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* 7. Conduta, Proibições e Penalidades */}
            <AccordionItem
              value="item-7"
              className="rounded-sm border border-zinc-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-6 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="rounded-sm bg-red-50 p-2 text-red-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide text-zinc-900 uppercase">
                      7. Conduta, Proibições e Penalidades
                    </h3>
                    <p className="mt-1 text-xs font-normal text-zinc-500">
                      Regras de convivência, uso de celular e escala punitiva.
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-6 border-t border-zinc-50 pt-6 pb-8 leading-relaxed text-zinc-700">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-600 uppercase">
                      <Trash2 size={14} /> Proibições
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • Algazarra, discussões ou brincadeiras excessivas.
                      </li>
                      <li>• Palavras ou gestos impróprios à moralidade.</li>
                      <li>
                        • Uso de celular pessoal (restrito a emergências).
                      </li>
                      <li>• Introduzir estranhos no balcão ou estoque.</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-900 uppercase">
                      <AlertCircle size={14} /> Escala de Punição
                    </h4>
                    <ol className="list-inside list-decimal space-y-2 text-sm">
                      <li>Advertência Verbal</li>
                      <li>Advertência Escrita</li>
                      <li>Suspensão</li>
                      <li>Justa Causa (conforme gravidade)</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Footer / Assinatura */}
        {/* <footer className="mx-auto mt-24 max-w-4xl border-t border-zinc-100 pt-12 pb-20">
          <div className="rounded-sm bg-zinc-900 p-10 text-white shadow-xl">
            <div className="mb-6 flex items-center gap-3">
              <FileText className="text-red-500" size={24} />
              <h2 className="text-xl font-bold tracking-tighter uppercase">
                Declaração de Ciência
              </h2>
            </div>
            <p className="mb-10 leading-relaxed text-zinc-400">
              Ao assinar este documento, o colaborador declara que recebeu, leu
              e compreendeu o Manual de Cultura e Conduta Interna da Drogaria
              Cesária, comprometendo-se a cumprir as normas estabelecidas.
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="space-y-2">
                <div className="mb-4 h-px w-full bg-zinc-700" />
                <p className="text-xs tracking-widest text-zinc-500 uppercase">
                  Assinatura do Colaborador
                </p>
              </div>
              <div className="space-y-2">
                <div className="mb-4 h-px w-full bg-zinc-700" />
                <p className="text-xs tracking-widest text-zinc-500 uppercase">
                  Data de Recebimento
                </p>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-xs tracking-[0.2em] text-zinc-400 uppercase">
            Drogaria Cesária © 2026 • Todos os direitos reservados
          </p>
        </footer> */}
      </main>
    </div>
  );
};

export default RegimentoInterno;
