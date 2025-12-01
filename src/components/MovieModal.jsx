// src/components/MovieModal.jsx

import React from 'react';
import { X, Play, Plus, ThumbsUp, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MovieModal({ isOpen, onClose, movie }) {
  if (!isOpen || !movie) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") onClose();
  };

  const hasCustomScenes = movie.scenesImages && movie.scenesImages.length > 0;

  return (
    <div 
      id="modal-overlay"
      className="fixed inset-0 z-[100] bg-black/80 flex justify-center items-end md:items-center pt-4 pb-0 md:pb-8 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleOutsideClick}
    >
      {/* ALTERAÇÃO PRINCIPAL: 
         - Adicionado 'max-h-[90vh]' para o modal nunca ser maior que 90% da tela.
         - O botão de fechar fica neste container relativo, então ele não some ao rolar.
      */}
      <div className="relative w-full md:max-w-[850px] bg-[#181818] md:rounded-xl rounded-t-xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 md:zoom-in-95 duration-300 max-h-[90vh] md:max-h-[95vh]">
        
        {/* Botão Fechar (X) - Fica fixo em relação ao modal */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 md:w-9 md:h-9 bg-black/50 md:bg-[#181818]/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ÁREA DE ROLAGEM (Scroll)
           Todo o conteúdo (Imagem, Texto, Cenas) fica aqui dentro.
           Se for muito grande, a barra de rolagem aparece aqui.
        */}
        <div className="overflow-y-auto w-full h-full scrollbar-hide">
          
          {/* --- CABEÇALHO (Imagem Grande) --- */}
          <div className="relative h-[250px] md:h-[480px] w-full shrink-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10" />
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight" style={{ WebkitTextStroke: '1px black' }}>
                {movie.title}
              </h1>
              
              <div className="flex items-center gap-3">
                <Link to="/dashboard">
                  <button className="flex items-center gap-2 px-6 py-2 md:px-8 bg-white text-black rounded font-bold text-base md:text-lg hover:bg-white/90 transition">
                    <Play className="w-5 h-5 md:w-6 md:h-6 fill-black" /> Assistir
                  </button>
                </Link>
                <button className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition text-gray-300 hover:text-white">
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button className="w-8 h-8 md:w-10 md:h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition text-gray-300 hover:text-white">
                  <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* --- CORPO (Informações) --- */}
          <div className="px-6 py-4 md:px-10 md:py-4 flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 bg-[#181818]">
            
            <div className={`text-white ${!movie.isEmotionalCard ? 'md:col-span-2' : 'md:col-span-3'}`}>
              <div className="flex items-center gap-3 mb-4 text-sm font-medium">
                <span className="text-green-400 font-bold">98% relevante</span>
                <span>{movie.year}</span>
                <span className="border border-gray-500 px-1 rounded text-xs">HD</span>
                <span className="bg-red-600 px-2 py-0.5 rounded text-xs font-bold">12+</span>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2">{movie.subtitle}</h3> 
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {movie.description}
              </p>
            </div>

            {!movie.isEmotionalCard && (
              <div className="text-sm text-gray-400 space-y-2 mt-2 md:mt-0">
                <p><span className="text-gray-500">Elenco:</span> {movie.cast}</p>
                <p><span className="text-gray-500">Gêneros:</span> {movie.genre}</p>
              </div>
            )}
          </div>

          {/* --- LISTA DE EPISÓDIOS / CENAS --- */}
          {!movie.isEmotionalCard && (
            <div className="px-6 md:px-10 py-6 border-t border-gray-700 pb-10 bg-[#181818]">
              
              {hasCustomScenes ? (
                <>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">Cenas Especiais</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"> 
                    {movie.scenesImages.map((sceneImg, index) => (
                      <div key={index} className="bg-[#2f2f2f] rounded-md overflow-hidden group cursor-pointer hover:bg-[#3f3f3f] transition">
                          <div className="relative h-24 md:h-32 overflow-hidden"> 
                              <img src={sceneImg} className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute bottom-1 left-2 text-white font-bold drop-shadow-md text-xs md:text-sm">Episódio {index + 1}</div>
                          </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">Episódios</h3>
                    <span className="text-sm text-gray-400">Temporada 1</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-[#2f2f2f] rounded-md overflow-hidden group">
                        <div className="relative h-24 md:h-32 overflow-hidden">
                          <img src={movie.image} className="w-full h-full object-cover opacity-70" />
                          <div className="absolute bottom-1 left-2 text-white font-bold drop-shadow-md text-xs md:text-sm">Episódio {item}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}