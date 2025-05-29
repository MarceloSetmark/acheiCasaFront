"use client";
import { useEffect, useState } from "react";

export default function Step1() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12 p-6 h-[100%] w-[1400px] mx-auto transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="md:w-1/2 space-y-4 pl-40">
        <p className="w-[70px] font-medium text-[20px] leading-[100%] tracking-[0] text-[#7F7F7F] border-b-4 border-[#FF453A] pb-1">
          Etapa 1
        </p>
        <h1 className="font-bold text-[40px] leading-[100%] tracking-[0] font-inter text-gray-800 w-[383px] mb-12 mt-4">
          Fala-nos um pouco sobre o teu espaço.
        </h1>
        <div className="text-[#999999] font-normal text-[20px] leading-[1.5em] tracking-[0] font-inter w-[383px]">
          <p className="mb-6">
            Escolha o tipo de propriedade que pretendes anunciar e indique se os
            hóspedes terão acesso a toda a casa ou apenas a um quarto.
          </p>
          <p>
            Depois, só precisas de nos dizer onde fica a tua acomodação e quantas
            pessoas pode receber com conforto.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <figure className="w-[610px] h-[610px]">
          <img
            src="/icon-house.png"
            alt="Ícone de uma casa"
            className="w-full h-full"
          />
        </figure>
      </div>
    </section>
  );
}
