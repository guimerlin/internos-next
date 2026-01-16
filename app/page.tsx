import Link from 'next/link';
import logo from '@/public/favicon.png';
import Image from 'next/image';

// Seções
import Ferramentas from './Ferramentas';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      <main>
        {/* PÁGINA 1: INÍCIO */}
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

        <Ferramentas />

        {/* PÁGINA 4: CONTATO */}
        <section className="section" id="contato">
          <div className="main-container text-center">
            <h2 className="section-title title-font animate-on-scroll mb-8 text-4xl font-bold">
              Precisa de Ajuda?
            </h2>
            <p
              className="animate-on-scroll mx-auto mb-12 max-w-2xl text-lg text-gray-600"
              style={{ transitionDelay: '0.1s' }}
            >
              Nossa equipe está sempre pronta para ajudar. Entre em contato com
              nossos responsáveis para esclarecimentos, suporte técnico ou
              qualquer dúvida.
            </p>
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <a
                href="https://wa.me/5515997245620"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  transitionDelay: '0.2s',
                }}
              >
                <div className="content-card text-left">
                  <h3
                    className="title-font mb-4 text-xl font-bold"
                    style={{ color: '#fbbf24' }}
                  >
                    Administração
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <strong>Daniele Corrêa</strong>
                  </p>
                  <p className="text-gray-600">
                    Administradora responsável por questões gerais, financeiras
                    e procedimentos administrativos.
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/5511933854995"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  transitionDelay: '0.3s',
                }}
              >
                <div className="content-card text-left">
                  <h3
                    className="title-font mb-4 text-xl font-bold"
                    style={{ color: '#ef4444' }}
                  >
                    Supervisão
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <strong>Leonardo Gabriel</strong>
                  </p>
                  <p className="text-gray-600">
                    Supervisor responsável por cronogramas, tarefas diárias e
                    orientações operacionais.
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/5511911964201"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  transitionDelay: '0.4s',
                }}
              >
                <div className="content-card text-left">
                  <h3
                    className="title-font mb-4 text-xl font-bold"
                    style={{ color: '#00f72d' }}
                  >
                    Suporte e TI
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <strong>Luiz Guilherme</strong>
                  </p>
                  <p className="text-gray-600">
                    Responsável por gerenciamento de computadores e Sistemas das
                    Lojas.
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5515996380576"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  transitionDelay: '0.4s',
                }}
              >
                <div className="content-card text-left">
                  <h3 className="title-font mb-4 text-xl font-bold text-indigo-500">
                    Marketing
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <strong>Rodrigo Olimpio</strong>
                  </p>
                  <p className="text-gray-600">
                    Rsponsável por campanhas de Marketing e Divulgação da Rede.
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5511965024941"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  transitionDelay: '0.4s',
                }}
              >
                <div className="content-card text-left">
                  <h3 className="title-font mb-4 text-xl font-bold text-blue-600">
                    Compras
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <strong>Junior</strong>
                  </p>
                  <p className="text-gray-600">
                    Responsável por compras de medicamentos.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
