'use client'

import EditButtonAnnouncement from '../(editComponents)/editButton'

export default function EditFavorite() {
  return (
    <div className="mx-auto px-4 py-10 mt-[98px]">
      <section className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Editar Anúncio</h2>
        
        <div className="space-y-6">
          <EditButtonAnnouncement 
            title="Fotos"
            discrition="Atualize as imagens dos compartimentos do imóvel." 
            image_button="https://i.ibb.co/mCFMgkWC/image-2.png"
          />

          <EditButtonAnnouncement 
            title="Localização"
            discrition="Atualize o endereço e pontos de referência do imóvel." 
            image_button="https://i.ibb.co/99CbSkWZ/GPS-1.png"
          />

          <EditButtonAnnouncement 
            title="Descrição"
            discrition="Edite os detalhes e características do imóvel." 
            image_button="https://i.ibb.co/LDc8yqhV/descri-o1-1.png"
          />

          <EditButtonAnnouncement 
            title="Preço"
            discrition="Ajuste o valor de venda ou aluguel do imóvel." 
            image_button="https://i.ibb.co/RpVxs5mK/4981ffbae81185e76307244a26f88fc9.jpg"
          />
        </div>
      </section>
    </div>
  )
}
