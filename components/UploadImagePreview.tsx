'use client';

import React, { useState, useRef } from 'react';

const ImageUploadPreview = ({ prevPreview }: { prevPreview?: string }) => {
  const [preview, setPreview] = useState<string | null>(prevPreview || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Container da Imagem Redonda */}
      <div
        onClick={triggerClick}
        className="flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-300 bg-gray-50 transition-opacity hover:opacity-80"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="p-2 text-center text-xs text-gray-400">
            Selecionar Foto
          </div>
        )}
      </div>

      {/* Input escondido */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
        name="profileImage" // Ajuste conforme seu schema
      />

      <button
        type="button"
        onClick={triggerClick}
        className="text-sm font-medium text-blue-600"
      >
        Alterar foto
      </button>
    </div>
  );
};

export default ImageUploadPreview;
