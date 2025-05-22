'use client'

import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  APIUPLOADIMAGE from '@/app/Req/ApiUploadPicture'

interface ProfileImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => Promise<void>;
  currentImage?: string | null;
}

export default function ProfileImageModal({
  isOpen,
  onClose,
  onUpload,
  currentImage,
}: ProfileImageModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    /* setError(null); */
    const file = e.target.files?.[0];
    
    if (!file) return;

    // Validação básica do arquivo
    if (!file.type.startsWith('image/')) {
      /* setError('Por favor, selecione um arquivo de imagem válido.'); */
      toast.error('Por favor, selecione um arquivo de imagem válido.')
      return;
    }

    if (file.size > 2 * 1024 * 1024) { 
      /* setError('A imagem deve ter menos de 2MB.'); */
      toast.error('A imagem deve ter menos de 2MB.')
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) {
        toast.error('Por favor, selecione uma imagem.');
      return;
    }
    setIsUploading(true);
    try {
        const response = await APIUPLOADIMAGE(selectedFile);
        if (response?.success === true) {
            toast.success('Imagem enviada com sucesso!');
          } else {
            toast.error('Falha no envio da imagem.');
          }
        setTimeout(() => {
            handleClose();
            location.reload();
        }, 4000);
    } catch (err) {
        toast.error('Ocorreu um erro ao fazer upload. Por favor, tente novamente.');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
/*     setError(null); */
    onClose();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-[#191919]/80 flex items-center justify-center z-500 p-4">
        <ToastContainer />
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#0000]">Alterar foto de perfil</h2>
            <button 
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mb-4">
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                  onLoad={() => previewUrl && URL.revokeObjectURL(previewUrl)}
                />
              ) : currentImage ? (
                <Image
                  src={currentImage}
                  alt="Current profile"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            <button
              onClick={triggerFileInput}
              className="px-4 py-2 bg-[#FF453A] text-white rounded-md hover:bg-red-500 transition-colors cursor-pointer"
            >
              Selecionar Imagem
            </button>

            {selectedFile && (
              <p className="mt-2 text-sm text-gray-600">
                {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          {/* {error && (
            <div className="mb-4 p-2 bg-red-500 text-red-600 rounded-md text-sm">
              {error}
            </div>
          )} */}

          <div className="flex justify-end gap-3">
            <button
              onClick={handleClose}
              disabled={isUploading}
              className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="cursor-pointer px-4 py-2 bg-[#FF453A] text-white rounded-md hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Enviando...' : 'Salvar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
