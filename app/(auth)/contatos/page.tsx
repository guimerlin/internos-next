import React from 'react';
import {
  MessageCircle,
  Briefcase,
  Users,
  Monitor,
  Megaphone,
  ShoppingCart,
  LifeBuoy,
} from 'lucide-react';

const contacts = [
  {
    name: 'Daniele Corrêa',
    role: 'Administração',
    desc: 'Questões gerais, financeiras e procedimentos administrativos.',
    phone: '5515997245620',
    icon: <Briefcase className="text-amber-500" size={24} />,
    borderColor: 'hover:border-amber-400',
  },
  {
    name: 'Leonardo Gabriel',
    role: 'Supervisão',
    desc: 'Cronogramas, tarefas diárias e orientações operacionais.',
    phone: '5511933854995',
    icon: <Users className="text-red-500" size={24} />,
    borderColor: 'hover:border-red-400',
  },
  {
    name: 'Luiz Guilherme',
    role: 'Suporte e TI',
    desc: 'Gerenciamento de computadores e sistemas das lojas.',
    phone: '5511911964201',
    icon: <Monitor className="text-green-500" size={24} />,
    borderColor: 'hover:border-green-400',
  },
  {
    name: 'Rodrigo Olimpio',
    role: 'Marketing',
    desc: 'Campanhas de marketing e divulgação da rede.',
    phone: '5515996380576',
    icon: <Megaphone className="text-indigo-500" size={24} />,
    borderColor: 'hover:border-indigo-400',
  },
  {
    name: 'Junior',
    role: 'Compras',
    desc: 'Responsável por compras de medicamentos.',
    phone: '5511965024941',
    icon: <ShoppingCart className="text-blue-600" size={24} />,
    borderColor: 'hover:border-blue-500',
  },
];

const Contatos = async () => {
  return (
    <section className="bg-white py-20" id="contato">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-50 p-2">
            <LifeBuoy className="mr-2 text-blue-600" size={20} />
            <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
              Suporte Interno
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Precisa de Ajuda?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Nossa equipe está sempre pronta para ajudar. Entre em contato com os
            responsáveis para esclarecimentos, suporte técnico ou qualquer
            dúvida.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={`https://wa.me/${contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200 ${contact.borderColor}`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-2xl bg-white p-3 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {contact.icon}
                </div>
                <MessageCircle
                  size={20}
                  className="text-slate-300 transition-colors group-hover:text-green-500"
                />
              </div>

              <h3 className="mb-1 text-sm font-bold tracking-widest text-slate-400 uppercase">
                {contact.role}
              </h3>
              <p className="mb-2 text-xl font-bold text-slate-800">
                {contact.name}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {contact.desc}
              </p>

              <div className="mt-4 flex items-center text-sm font-semibold text-green-600 opacity-0 transition-opacity group-hover:opacity-100">
                Chamar no WhatsApp →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contatos;
