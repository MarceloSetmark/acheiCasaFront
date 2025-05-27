'use client'

import React from 'react'
import { Pencil } from 'lucide-react'

interface EditPhotosCardProps {
  image_edit: string
  title: string
  onClick?: () => void
  isVisible?: boolean
}

const EditPhotosCard = ({ image_edit, title, onClick, isVisible = true }: EditPhotosCardProps) => {
  if (!isVisible) return null 

  return (
    <div
      onClick={onClick}
      className="relative w-[200px] rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer group transition-all"
    >
      <figure className="w-full h-[140px] overflow-hidden">
        <img
          src={image_edit}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="p-2 bg-white flex justify-between items-center">
        <p className="text-sm font-bold text-gray-800">{title}</p>
        <Pencil className="w-4 h-4 text-gray-600 group-hover:text-black" />
      </div>
    </div>
  )
}

export default EditPhotosCard
