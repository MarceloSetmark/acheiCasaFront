
'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';


const Card = ({ object }: {object:any}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = object.images || [object.image]

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      }
    
      const nextImage = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }

  return (
    <div key={object.id} className="">
        <figure className='w-full h-[250px] rounded-[20px] relative overflow-hidden group' title={object.title}>
        <a href="#">
          <img
            src={images[currentIndex]}
            alt={object.title}
            className="absolute w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
          />
        </a>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/70 rounded-full hover:bg-white transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/70 rounded-full hover:bg-white transition"
            >
              <ChevronRight size={16} />
            </button>

            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-[2px] rounded">
              {currentIndex + 1}/{images.length}
            </div>
          </>
        )}
      </figure> 
        <div className="">
            <div className='flex items-center justify-between mt-2'>
                <h3 className="font-bold text-xs leading-none tracking-normal capitalize text-[#000]">
                    <a href="#">{object.location}</a>
                </h3>
                <div className="font-bold text-[10px] leading-none tracking-normal flex items-center justify-end">
                    <Star className="text-[#999999] mr-1" width={10}/>
                    <span className="text-[#999999]">{object.rating}</span>
                </div>
            </div>
            <div className='flex items-end justify-between'>
                <div className="font-medium text-[10px] leading-none tracking-normal capitalize text-[#999999]">
                    <p className="">{object.dimensions}</p>
                    <p className="mt-[2px]">{object.type}</p>
                </div>
                <p className="font-bold text-[12px] leading-none tracking-normal capitalize text-[#000]">
                {isNaN(Number(object.price)) 
                    ? object.price 
                    : new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(Number(object.price))}
                </p>
            </div>                        
        </div>
    </div>
  )
}

export default Card
