'use client';

import Link from 'next/link';
import { FileQuestion, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-100 text-slate-400">
        <FileQuestion size={48} />
      </div>

      <h1 className="mb-4 text-6xl font-black text-slate-900">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-slate-800">
        Página não encontrada
      </h2>
      <p className="mb-10 max-w-md leading-relaxed text-slate-600">
        Desculpe, a página que você está procurando não existe ou foi movida
        para um novo endereço no portal.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95"
        >
          <Home size={18} />
          Voltar ao Início
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50 active:scale-95"
        >
          <ArrowLeft size={18} />
          Página Anterior
        </button>
      </div>
    </div>
  );
}
