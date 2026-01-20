import React from 'react';
import favicon from '@/public/favicon.png';
import Image from 'next/image';

const Logotipo = async () => {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-red-500 p-1">
        <Image
          src={favicon}
          alt="Logo da Rede Cesária"
          width={19}
          height={19}
        />
      </div>
      <span className="hidden font-semibold text-red-600 md:block">
        Rede Cesária
      </span>
    </div>
  );
};

export default Logotipo;
