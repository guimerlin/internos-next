'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useUpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Função para criar uma nova Query String mesclando com a atual
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams],
  );

  // Função que efetivamente atualiza a URL
  const setParam = useCallback(
    (name: string, value: string) => {
      const queryString = createQueryString(name, value);
      router.push(`${pathname}?${queryString}`, { scroll: false });
    },
    [router, pathname, createQueryString],
  );

  return { setParam, searchParams };
}
