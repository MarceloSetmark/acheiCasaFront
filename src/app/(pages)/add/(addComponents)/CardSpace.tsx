'use client'

import React from 'react'

interface CardSpaceProps {
  text: string;
  img_src: string;
}

const CardSpace = ({ text, img_src }: CardSpaceProps) => {
  return (
    <div
      className="border border-[#D9D9D9] p-5 w-[300px] h-[120px] rounded-[30px] flex items-center justify-start cursor-pointer transition hover:shadow-md"
      role="button"
    >
      <div className="w-12 h-12 flex-shrink-0">
        <img
          src={img_src}
          alt={`Ícone de ${text}`}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="font-inter font-bold text-[24px] leading-[100%] tracking-[0] ml-6 text-[#7F7F7F]">
        {text}
      </p>
    </div>
  );
};

export default CardSpace;
