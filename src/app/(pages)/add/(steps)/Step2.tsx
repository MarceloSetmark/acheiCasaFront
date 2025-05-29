'use client';

import { useEffect, useState } from 'react';
import CardSpace from "../(addComponents)/CardSpace";

const Step2 = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
      }, []);
    
  const cardElement = [
    {
      id: 1,
      text: "Praia",
      img_src: "/icons-filter/praia.svg"
    },
    {
        id: 2,
        text: "Reserva",
        img_src: "/icons-filter/ticket-airline.svg"
    },
    {
        id: 3,
        text: "Quartos",
        img_src: "/icons-filter/quarto.svg"
    },
    {
        id: 4,
        text: "Residências",
        img_src: "/icons-filter/casa.svg"
    },
    {
        id: 5,
        text: "Terreno",
        img_src: "/icons-filter/campo.svg"
    },
    {
    id: 6,
    text: "Lojas",
    img_src: "/icons-filter/loja.svg"
    },
    {
    id: 7,
    text: "Escritórios",
    img_src: "/icons-filter/escritorio.svg"
    },
    {
    id: 8,
    text: "Armazém",
    img_src: "/icons-filter/storage.svg"
    }
  ];

  return (
    <section className={`max-w-6xl mx-auto px-4 py-10 transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
      <h1 className="font-inter font-bold text-[40px] leading-[100%] text-center text-black mb-10">
        Como é o seu espaço?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cardElement.map(({ id, text, img_src }) => (
          <CardSpace key={id} text={text} img_src={img_src} />
        ))}
      </div>
    </section>
  );
};

export default Step2;
