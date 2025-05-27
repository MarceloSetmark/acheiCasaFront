'use client'

import { useState } from 'react'
import EditButtonAnnouncement from '../(editComponents)/editButton'
import EditPhotos from './(editComponents)/EditPhotos'
import EditLocation from './(editComponents)/EditLocation'
import EditDescription from './(editComponents)/EditDescription'
import EditPrice from './(editComponents)/EditPrice'

export default function EditFavorite() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const renderComponent = () => {
    switch (selectedOption) {
      case 'Fotos':
        return <EditPhotos />
      case 'Localização':
        return <EditLocation />
      case 'Descrição':
        return <EditDescription />
      case 'Preço':
        return <EditPrice />
      default:
        return (
          <div className="text-gray-100 text-lg font-medium">
            Selecione uma opção ao lado para editar o anúncio.
          </div>
        )
    }
  }

  return (
    <div className="mx-auto px-4 py-10 mt-[98px] flex flex-col lg:flex-row gap-8">
      {/* Seção de opções */}
      <section className="rounded-xl shadow p-6 bg-white w-full lg:w-[400px] max-h-[650px] overflow-y-auto">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Editar Anúncio</h2>

  <div className="space-y-6">
    <EditButtonAnnouncement 
      title="Fotos"
      discrition="Atualize as imagens dos compartimentos do imóvel." 
      image_button="https://i.ibb.co/mCFMgkWC/image-2.png"
      onClick={() => setSelectedOption('Fotos')}
    />

    <EditButtonAnnouncement 
      title="Localização"
      discrition="Atualize o endereço e pontos de referência do imóvel." 
      image_button="https://i.ibb.co/99CbSkWZ/GPS-1.png"
      onClick={() => setSelectedOption('Localização')}
    />

    <EditButtonAnnouncement 
      title="Descrição"
      discrition="Edite os detalhes e características do imóvel." 
      image_button="https://i.ibb.co/LDc8yqhV/descri-o1-1.png"
      onClick={() => setSelectedOption('Descrição')}
    />

    <EditButtonAnnouncement 
      title="Preço"
      discrition="Ajuste o valor de venda ou aluguel do imóvel." 
      image_button="https://i.ibb.co/RpVxs5mK/4981ffbae81185e76307244a26f88fc9.jpg"
      onClick={() => setSelectedOption('Preço')}
    />
  </div>
</section>


      {/* Seção de edição */}
      <section className="bg-white w-full min-h-[300px] p-6 rounded-xl shadow flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {selectedOption ? `Editando: ${selectedOption}` : 'Nenhuma opção selecionada'}
        </h3>

        <div>
          {renderComponent()}
        </div>
      </section>
    </div>
  )
}
