'use client'

import React from 'react'


interface EditButtonAnnouncementProps {
  title: string;
  discrition: string;
  image_button:string;

}

const EditButton = ({ title, discrition, image_button }: EditButtonAnnouncementProps) => {
  return (
    <button
      className="w-[360px] h-[120px] rounded-2xl border border-gray-300 bg-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02] overflow-hidden text-left flex flex-col sm:flex-row cursor-pointer"
    >
        <figure className="w-[160px] h-[100%]">
            <img
            src={image_button}
            alt="Anúncio"
            className="w-[100%] h-full object-cover"
            />
      </figure>
      <div className="flex-1 p-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{discrition}</p>
      </div>
    </button>
  )
}

export default EditButton
