'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log do erro para monitoramento
    console.error('Erro capturado:', error);

    // Timer para tentar recuperar automaticamente após 5 segundos
    const timer = setTimeout(() => {
      reset(); // Tenta renderizar novamente a rota
    }, 5000);

    return () => clearTimeout(timer);
  }, [error, reset]);

  return (
    <div className="flex h-screen min-h-[400px] flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <h2 className="mb-2 text-2xl font-bold text-red-700">
        Ops! Algo deu errado.
      </h2>
      <p className="mb-4 text-red-600">
        Ocorreu o seguinte erro:{' '}
        <span className="font-mono font-bold">{error.message}</span>
      </p>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-gray-500 italic">
          Tentando recarregar automaticamente em 5 segundos...
        </p>
        <button
          onClick={() => reset()}
          className="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          Tentar agora
        </button>
      </div>
    </div>
  );
}
