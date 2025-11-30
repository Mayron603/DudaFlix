import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Search, Bell, User } from 'lucide-react';
import MovieModal from '../components/MovieModal'; // <--- Importamos o Modal

// Imagens
import bgHero from '../assets/fotofundo.png';
import cardHarry from '../assets/2.png';
import cardScooby from '../assets/3.png';
import cardBarbie from '../assets/4.png';
import cardRebelde from '../assets/5.png';

// --- DADOS DOS FILMES (Database Fictício) ---
const moviesData = {
  harry: {
    title: "Harry Potter",
    image: cardHarry,
    year: "2001",
    description: "Um garoto órfão descobre que é um bruxo famoso e embarca em uma jornada mágica em Hogwarts, enfrentando desafios, fazendo amigos leais e lutando contra o mal que assombra seu passado.",
    cast: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    genre: "Fantasia, Aventura, Magia"
  },
  scooby: {
    title: "Scooby-Doo!",
    image: cardScooby,
    year: "2002",
    description: "A Mistério S/A se reúne para investigar estranhos acontecimentos em uma ilha mal-assombrada. Scooby e Salsicha terão que enfrentar seus medos (e comer muitos biscoitos) para salvar o dia.",
    cast: "Freddie Prinze Jr., Sarah Michelle Gellar, Matthew Lillard",
    genre: "Comédia, Mistério, Família"
  },
  barbie: {
    title: "Barbie",
    image: cardBarbie,
    year: "2023",
    description: "Viver na Barbielândia é ser perfeito em um lugar perfeito. A menos que você tenha uma crise existencial total. Ou que você seja um Ken.",
    cast: "Margot Robbie, Ryan Gosling, America Ferrera",
    genre: "Comédia, Fantasia, Aventura"
  },
  rebelde: {
    title: "Rebelde",
    image: cardRebelde,
    year: "2004",
    description: "Em um colégio de elite, seis jovens de origens muito diferentes descobrem que a música é a única coisa que pode uni-los. Prepare-se para muito drama, romance e canções inesquecíveis.",
    cast: "Anahí, Dulce María, Maite Perroni, Alfonso Herrera",
    genre: "Drama, Musical, Romance"
  }
};

function Login() {
  // Estado para controlar qual filme está aberto (null = nenhum)
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Função para abrir o modal
  const openModal = (movieKey) => {
    setSelectedMovie(moviesData[movieKey]);
  };

  // Função para fechar
  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="relative w-screen min-h-screen bg-[#141414] text-white font-sans overflow-x-hidden flex flex-col justify-between">
      
      {/* --- MODAL DO FILME --- */}
      <MovieModal 
        isOpen={!!selectedMovie} 
        onClose={closeModal} 
        movie={selectedMovie} 
      />

      {/* --- CAMADA 1: BANNER --- */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0">
        <img src={bgHero} alt="Banner" className="w-full h-full object-cover object-top opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4 bg-gradient-to-b from-black/90 to-transparent">
        <div className="flex items-center gap-8">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600 tracking-tighter cursor-pointer drop-shadow-lg hover:scale-105 transition-transform">DUDAFLIX</h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
            <span className="text-white font-bold cursor-pointer hover:underline">Início</span>
            <span className="hover:text-gray-300 cursor-pointer">Séries</span>
            <span className="hover:text-gray-300 cursor-pointer">Filmes</span>
            <span className="hover:text-gray-300 cursor-pointer">Minha lista</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-white">
          <Search className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          <Bell className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center cursor-pointer">
             <User className="w-6 h-6 text-white" />
          </div>
        </div>
      </nav>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="relative z-10 px-4 md:px-12 pt-[22vh] md:pt-[28vh] max-w-3xl">
        <div className="flex items-center gap-3 mb-5 animate-fade-in">
          <div className="flex flex-col bg-red-600 text-white font-black text-[11px] px-2 py-1 rounded-[2px] shadow-lg">
            <span>TOP</span><span>G5</span>
          </div>
          <span className="font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow-lg text-white/90">Projeto 25 anos</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-2xl leading-tight text-white">
  <span>A Branca mais</span>
  <span className="block">Amada do Janga</span>
</h2>
        <p className="text-base md:text-xl text-gray-100 mb-8 drop-shadow-md font-medium max-w-2xl leading-relaxed">
          Uma professora livre liderando um bando de andorinhas que querem ir além, seja em suas salas de aula, carreiras ou na vida.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <button className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded-[4px] hover:bg-white/90 transition-all font-bold text-xl shadow-xl hover:scale-105">
              <Play className="w-7 h-7 fill-black" /> Assistir
            </button>
          </Link>
          <button className="flex items-center gap-3 px-8 py-3 bg-[rgba(109,109,110,0.7)] text-white rounded-[4px] hover:bg-[rgba(109,109,110,0.5)] transition-all font-bold text-xl backdrop-blur-sm">
            <Info className="w-7 h-7" /> Mais Informações
          </button>
        </div>
      </div>

      {/* --- CARROSSEL DE CARDS (AGORA SÃO BOTÕES QUE ABREM MODAL) --- */}
      <div className="relative z-20 px-4 md:px-12 pb-12 mt-auto bg-gradient-to-t from-[#141414] via-[#141414]/95 to-transparent pt-20">
        <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-red-600">Vem aí...</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Card 1 - Harry Potter */}
          <div onClick={() => openModal('harry')} className="group relative w-full h-40 md:h-56 bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
            <img src={cardHarry} alt="Harry Potter" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Card 2 - Scooby */}
          <div onClick={() => openModal('scooby')} className="group relative w-full h-40 md:h-56 bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
             <img src={cardScooby} alt="Scooby" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Card 3 - Barbie */}
          <div onClick={() => openModal('barbie')} className="group relative w-full h-40 md:h-56 bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
             <img src={cardBarbie} alt="Barbie" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Card 4 - Rebelde */}
          <div onClick={() => openModal('rebelde')} className="group relative w-full h-40 md:h-56 bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
             <img src={cardRebelde} alt="Rebelde" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;