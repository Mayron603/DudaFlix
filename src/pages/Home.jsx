import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

// Ajustei os caminhos para ../assets pois agora estamos dentro da pasta pages
import bgBolas from '../assets/bolas.png';
import imgLinhas from '../assets/linhas.png';
import imgTexto from '../assets/texto.png';
import imgVaca from '../assets/vaca.png'; // ou .jpg se for o caso

function Home() {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* FUNDO MALHADO */}
      <img 
        src={bgBolas} 
        alt="Fundo Malhado" 
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* VACA (Mantendo suas configurações de tamanho) */}
        <div className="absolute left-[-500px] bottom-[250px] z-20 w-[80vw] md:w-[1500px]">
          <img 
            src={imgVaca} 
            alt="Vaca com balões" 
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            style={{ transformOrigin: 'bottom left' }}
          />
        </div>

        {/* LINHAS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135vw] md:w-[1350px] -z-10 opacity-80 pointer-events-none">
          <img 
            src={imgLinhas} 
            alt="Linhas decorativas" 
            className="w-full h-auto animate-pulse-slow" 
          />
        </div>

        {/* TEXTO E BOTÃO */}
        <div className="relative z-30 flex flex-col items-center mt-32 md:mt-44">
          <img 
            src={imgTexto} 
            alt="Um Álbum Quase Perfeito" 
            className="w-[95vw] md:w-[1000px] h-auto object-contain drop-shadow-xl"
          />

          <Link to="/login" className="mt-8 md:mt-12">
            <button className="group relative inline-flex items-center justify-center px-12 py-4 md:px-16 md:py-5 bg-[#8B80F9] border-[3px] border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
              <span className="font-headline text-white text-2xl md:text-4xl tracking-wide mr-3"
                style={{ WebkitTextStroke: '1.5px black', fontFamily: '"Titan One", cursive' }}>
                COMEÇAR
              </span>
              <Play className="w-8 h-8 md:w-10 md:h-10 fill-white text-white stroke-black stroke-[3px]" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;