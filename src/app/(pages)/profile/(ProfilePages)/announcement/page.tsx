'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MenuProfile from '../../(ProfileComponents)/ProfileMenu';
import ProfileAnnouncementCard from '../../(ProfileComponents)/ProfileAnnouncementCard';
import Loader from '@/app/(components)/Loader/loader';
import Anuncios from '../../../../objects/announcement';

export default function Announcement () {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleCardClick = (id: number) => {
        router.push(`/profile/announcement/edit_announcement/${id}`);
    };

    if (loading) return <Loader />;

    return (
        <div className="mx-auto px-4 py-8 mt-[98px]">
            <MenuProfile profile={false} anuncio={true} history={false} favorite={false} title='Gerir Anúncios'/>
            <div>
                {Anuncios.map((item) => (
                    <ProfileAnnouncementCard
                        key={item.id}
                        announcement={item}
                        onEdit={() => handleCardClick(item.id)} 
                        onFavorite={() => console.log("Favorite", item.id)}
                    />
                ))}
            </div>
        </div>
    );
}
