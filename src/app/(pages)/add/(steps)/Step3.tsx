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
      text: "Arrendamento",
      img_src: "/icons-filter/botao-home.svg"
    },
    {
        id: 2,
        text: "Venda",
        img_src: "/icons-filter/sell.svg"
    },
  ];

  return (
    <section className={`max-w-6xl mx-auto px-4 py-10 transition-all duration-700 ease-out ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
      <h1 className="font-inter font-bold text-[40px] leading-[100%] text-center text-black mb-10">
        Tipo de negócio
      </h1>

      <div className="flex items-center justify-center gap-8">
        {cardElement.map(({ id, text, img_src }) => (
          <CardSpace key={id} text={text} img_src={img_src} />
        ))}
      </div>
    </section>
  );
};

export default Step2;
