import EditPhotosCard from "./EditPhotosCard";

export default function EditPhotos() {
  return (
    <div className="h-[500px] overflow-y-auto overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EditPhotosCard 
          title="Sala de almoço"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
        <EditPhotosCard 
          title="Sala de descanso"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
        <EditPhotosCard 
          title="Cozinha"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
        <EditPhotosCard 
          title="Sala de estar"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
        <EditPhotosCard 
          title="Quarto casal"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
        <EditPhotosCard 
          title="Quarto Suítes"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
        <EditPhotosCard 
          title="Piscina"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
        <EditPhotosCard 
          title="Garagem"
          image_edit="https://i.ibb.co/mCFMgkWC/image-2.png"
          isVisible={true}
        />
      </div>
    </div>
  );
}
