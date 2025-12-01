import React from 'react';
import { X, Play, Plus, ThumbsUp, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente visual da Janela (Modal)
export default function MovieModal({ isOpen, onClose, movie }) {
  if (!isOpen || !movie) return null;

  // Fecha ao clicar fora
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") onClose();
  };

  // Verifica se existem cenas customizadas (para o bloco de cenas)
  const hasCustomScenes = movie.scenesImages && movie.scenesImages.length > 0;

  return (
    <div 
      id="modal-overlay"
      className="fixed inset-0 z-[100] bg-black/70 flex justify-center overflow-y-auto pt-8 pb-8 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleOutsideClick}
    >
      <div className="relative w-full max-w-[850px] bg-[#181818] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 mb-auto">
        
        {/* Botão Fechar (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-9 h-9 bg-[#181818] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition-colors text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* --- CABEÇALHO (Imagem Grande) --- */}
        <div className="relative h-[480px] w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10" />
          <img 
            src={movie.image} 
            alt={movie.title} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 w-full p-10 z-20">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg" style={{ WebkitTextStroke: '1px black' }}>
              {movie.title}
            </h1>
            
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <button className="flex items-center gap-2 px-8 py-2 bg-white text-black rounded font-bold text-lg hover:bg-white/90 transition">
                  <Play className="w-6 h-6 fill-black" /> Assistir
                </button>
              </Link>
              <button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition text-gray-300 hover:text-white">
                <Plus className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:bg-white/10 transition text-gray-300 hover:text-white">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <div className="ml-auto w-10 h-10 border-2 border-gray-400/50 rounded-full flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* --- CORPO (Informações) --- */}
        <div className="px-10 py-4 grid grid-cols-3 gap-8">
          {/* Coluna Esquerda (Info + Sinopse) - Usa col-span-3 se for card de Emoção */}
          <div className={`text-white ${!movie.isEmotionalCard ? 'col-span-2' : 'col-span-3'}`}>
            <div className="flex items-center gap-3 mb-4 text-sm font-medium">
              <span className="text-green-400 font-bold">98% relevante</span>
              <span>{movie.year}</span>
              <span className="border border-gray-500 px-1 rounded text-xs">HD</span>
              <span className="bg-red-600 px-2 py-0.5 rounded text-xs font-bold">12+</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{movie.subtitle}</h3> 
            <p className="text-gray-300 leading-relaxed text-sm">
              {movie.description}
            </p>
          </div>

          {/* Coluna Direita (Elenco/Gênero) - ESCONDIDA se for card de Emoção */}
          {!movie.isEmotionalCard && (
            <div className="text-sm text-gray-400 space-y-2">
              <p><span className="text-gray-500">Elenco:</span> {movie.cast}</p>
              <p><span className="text-gray-500">Gêneros:</span> {movie.genre}</p>
              <p><span className="text-gray-500">Cenas:</span> Emocionantes, Divertidas</p>
            </div>
          )}
        </div>

        {/* --- LISTA DE EPISÓDIOS / CENAS --- ESCONDIDA se for card de Emoção */}
        {!movie.isEmotionalCard && (
          <div className="px-10 py-6 border-t border-gray-700">
            
            {hasCustomScenes ? (
              <>
                <h3 className="text-xl font-bold text-white mb-4">Cenas Especiais</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4"> 
                  {movie.scenesImages.map((sceneImg, index) => (
                    <div key={index} className="bg-[#2f2f2f] rounded-md overflow-hidden group cursor-pointer hover:bg-[#3f3f3f] transition">
                        <div className="relative h-32 overflow-hidden"> 
                            <img src={sceneImg} className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute bottom-2 left-2 text-white font-bold drop-shadow-md">Episódio {index + 1}</div>
                            <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity border-2 border-white rounded-full p-1" />
                        </div>
                        <div className="p-3">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-white font-bold text-sm"></span> 
                                <span className="text-gray-400 text-xs"></span>
                            </div>
                            <p className="text-gray-400 text-xs line-clamp-2">
                            </p>
                        </div>
                    </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Simulando Episódios/Sugestões (Conteúdo original para outros filmes) */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Episódios</h3>
                <span className="text-sm text-gray-400">Temporada 1</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-[#2f2f2f] rounded-md overflow-hidden group cursor-pointer hover:bg-[#3f3f3f] transition">
                    <div className="relative h-32 overflow-hidden">
                      <img src={movie.image} className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-2 left-2 text-white font-bold drop-shadow-md">Episódio {item}</div>
                      <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity border-2 border-white rounded-full p-1" />
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-white font-bold text-sm"></span>
                         <span className="text-gray-400 text-xs"></span>
                      </div>
                      <p className="text-gray-400 text-xs line-clamp-2">
                      </p>
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
  );
}