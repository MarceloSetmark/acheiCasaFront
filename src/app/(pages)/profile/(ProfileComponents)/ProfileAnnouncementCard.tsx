import React, { useState } from 'react';
import { Eye, Pencil, Star } from 'lucide-react';

interface ProfileAnnouncementCardProps {
  announcement: {
    id: number;
    title: string;
    address: string;
    city: string;
    province: string;
    price: number;
    favorite: number;
    accommodation_photo: { photo_path: string }[];
    views?: number;
    clicks?: number;
  };
  onEdit?: () => void;
  onFavorite?: () => void;
}

const ProfileAnnouncementCard = ({
  announcement,
  onEdit = () => {},
  onFavorite = () => {},
}: ProfileAnnouncementCardProps) => {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => setIsActive(!isActive);

  const {
    title,
    address,
    city,
    province,
    price,
    favorite,
    accommodation_photo,
    views = 0,
    clicks = 0,
  } = announcement;

  const imageSrc = accommodation_photo.length > 0
    ? accommodation_photo[0].photo_path
    : 'https://via.placeholder.com/120';

  return (
    <div className='flex items-center justify-between w-full rounded-2xl p-6 shadow bg-white border border-gray-100 mb-5'>
      <div className='flex items-center gap-4'>
        {/* Favorite Button */}
        <button
          onClick={onFavorite}
          className="text-gray-300 hover:text-yellow-400 transition-transform hover:scale-110"
          title="Favoritar"
        >
          <Star fill={favorite ? "#FFD700" : "none"} size={22} />
        </button>

        {/* Property Image */}
        <figure className="relative w-[120px] h-[120px] rounded-xl overflow-hidden shadow-sm">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Property Details */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm font-medium text-gray-500">
            {Number(price).toLocaleString("pt-AO", {
              style: "currency",
              currency: "AOA",
            })}
          </p>
          <p className="text-xs text-gray-400">
            {address}, {city} - {province}
          </p>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        {/* Status Box */}
        <div className="bg-gray-100 rounded-xl shadow-sm flex items-center justify-between px-4 py-2 w-48">
          <span className="text-sm text-gray-600 font-medium">
            {isActive ? "Activo" : "Inactivo"}
          </span>
          <button
            onClick={toggleActive}
            className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>

        {/* Estatísticas */}
        <div className="flex items-center gap-6">
          <div className="flex items-center text-gray-500 text-sm">
            <Eye size={18} className="mr-1" />
            {views}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Star size={18} className="mr-1" />
            {clicks}
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div>
        <button
          onClick={onEdit}
          className="flex items-center text-[16px] gap-1 px-5 py-3 text-sm text-gray-400 bg-white rounded-[25px] hover:bg-gray-100 transition-colors duration-200 shadow-sm cursor-pointer"
        >
          <span>Editar</span>
          <Pencil className='text-[#FF453A]' size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProfileAnnouncementCard;
