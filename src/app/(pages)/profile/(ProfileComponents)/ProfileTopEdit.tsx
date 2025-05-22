import React from 'react';
import { KeyRound } from 'lucide-react';
import ChangeImageModal from './ChangeImageModal';
import EditButon from './ProfileEditButton';

interface TopEdit {
  user: any;
  changePassword?: () => void;
}

const ProfileTopEdit = ({ user, changePassword }: TopEdit) => {
  const [showImageModal, setShowImageModal] = React.useState(false);

  return (
    <>
      <div key={user.id} className="w-full flex items-center justify-between gap-4">
        {/* Área da foto */}
        <div className="flex items-center justify-start gap-4">
          <div 
            className="flex flex-col items-center group cursor-pointer" 
            onClick={() => setShowImageModal(true)}
          >
            <figure className="w-[130px] h-[130px] rounded-full p-[5px] bg-[#FF453A] shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden select-none relative">
              {user.path_photo ? (
                <img
                  src={user.path_photo}
                  alt={`Imagem de perfil de ${user.first_name} ${user.last_name}`}
                  className="w-full h-full object-cover rounded-full select-none"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold bg-gray-400 rounded-full text-[55px]">
                  {user.first_name.charAt(0)}
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                Alterar imagem
              </div>
            </figure>

            <span className="mt-2 text-sm text-gray-600 group-hover:underline select-none">
              Clique aqui para alterar a imagem
            </span>
          </div>

          {/* Informações do usuário */}
          <div>
            <p className="font-bold text-2xl leading-none tracking-normal text-[#000000] select-none">
              {`${user.first_name} ${user.last_name}`}
            </p>
            <p className="my-[5px] font-normal text-base leading-none tracking-normal text-[#999999] select-none">
              {user.rule}
            </p>
            <p className="font-normal italic text-[13px] leading-none tracking-normal text-[#999999] select-none">
              {user?.province && user?.municipality
                ? `${user.province} ${user.municipality}`
                : 'Localização não disponível'}
            </p>
          </div>
        </div>

        {/* Botão de alterar senha */}
        <div>
          <EditButon 
            text="Alterar Senha" 
            icon={KeyRound} 
            onClick={changePassword} 
          />
        </div>
      </div>

      {/* Modal de alteração de imagem */}
      <ChangeImageModal 
        isOpen={showImageModal} 
        onClose={() => setShowImageModal(false)}
        currentImage={user.path_photo}
        onUpload={async (file) => {
          // TODO: Implement file upload logic
          console.log('Upload file:', file);
        }}
      />
    </>
  );
};

export default ProfileTopEdit;