import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Search, Bell, User } from 'lucide-react';
import MovieModal from '../components/MovieModal';

// Importando as imagens
import bgHero from '../assets/fotofundo.png';
import cardHarry from '../assets/2.png';
import cardScooby from '../assets/3.png';
import cardBarbie from '../assets/4.png';
import cardRebelde from '../assets/5.png';

// Dados dos Filmes (Database Fictício)
const moviesData = {
  harry: { title: "Harry Potter", image: cardHarry, year: "2001", description: "Um garoto órfão descobre que é um bruxo...", cast: "Daniel Radcliffe", genre: "Fantasia" },
  scooby: { title: "Scooby-Doo!", image: cardScooby, year: "2002", description: "A Mistério S/A se reúne...", cast: "Freddie Prinze Jr.", genre: "Comédia" },
  barbie: { title: "Barbie", image: cardBarbie, year: "2023", description: "Viver na Barbielândia...", cast: "Margot Robbie", genre: "Comédia" },
  rebelde: { title: "Rebelde", image: cardRebelde, year: "2004", description: "Em um colégio de elite...", cast: "Anahí", genre: "Musical" }
};

function Login() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Função auxiliar para renderizar um card
  const renderCard = (key, image, alt) => (
    <div onClick={() => setSelectedMovie(moviesData[key] || moviesData.harry)} className="group relative w-full h-40 md:h-56 bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
      <img src={image} alt={alt} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
    </div>
  );

  return (
    <div className="relative w-screen min-h-screen bg-[#141414] text-white font-sans overflow-x-hidden flex flex-col">
      
      {/* --- MODAL DO FILME --- */}
      <MovieModal isOpen={!!selectedMovie} onClose={() => setSelectedMovie(null)} movie={selectedMovie} />

      {/* --- CAMADA 1: BANNER --- */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 fixed-bg">
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
          <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center cursor-pointer"><User className="w-6 h-6 text-white" /></div>
        </div>
      </nav>

      {/* --- CONTEÚDO PRINCIPAL (HERO) --- */}
      <div className="relative z-10 px-4 md:px-12 pt-[22vh] md:pt-[28vh] max-w-3xl mb-12">
        <div className="flex items-center gap-3 mb-5 animate-fade-in">
          <div className="flex flex-col bg-red-600 text-white font-black text-[11px] px-2 py-1 rounded-[2px] shadow-lg"><span>TOP</span><span>G5</span></div>
          <span className="font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow-lg text-white/90">Projeto 25 anos</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-2xl leading-tight text-white">
          <span>A Branca mais</span><span className="block">Amada do Janga</span>
        </h2>
        <p className="text-base md:text-xl text-gray-100 mb-8 drop-shadow-md font-medium max-w-2xl leading-relaxed">
          Um especial que celebra a história, o carinho e o legado da Branca no Janga, reunindo memórias e homenagens em uma homenagem inesquecível.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <button className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded-[4px] hover:bg-white/90 transition-all font-bold text-xl shadow-xl hover:scale-105"><Play className="w-7 h-7 fill-black" /> Assistir</button>
          </Link>
          <button className="flex items-center gap-3 px-8 py-3 bg-[rgba(109,109,110,0.7)] text-white rounded-[4px] hover:bg-[rgba(109,109,110,0.5)] transition-all font-bold text-xl backdrop-blur-sm"><Info className="w-7 h-7" /> Mais Informações</button>
        </div>
      </div>

      {/* --- LISTAS DE CARDS --- */}
      <div className="relative z-20 px-4 md:px-12 pb-20 bg-gradient-to-t from-[#141414] via-[#141414] to-transparent pt-10 space-y-12">
        
        {/* SEÇÃO 1: VEM AÍ... */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-red-600">Vem aí...</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {renderCard('harry', cardHarry, 'Harry Potter')}
            {renderCard('scooby', cardScooby, 'Scooby-Doo')}
            {renderCard('barbie', cardBarbie, 'Barbie')}
            {renderCard('rebelde', cardRebelde, 'Rebelde')}
          </div>
        </div>

        {/* SEÇÃO 2: ABRA QUANDO... (NOVA) */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-blue-500">Abra quando...</h3>
          {/* Grid com 12 itens (repitindo as imagens para demonstração) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {renderCard('harry', cardHarry, 'Quando estiver triste')}
            {renderCard('scooby', cardScooby, 'Quando precisar rir')}
            {renderCard('barbie', cardBarbie, 'Quando sentir saudade')}
            {renderCard('rebelde', cardRebelde, 'Quando quiser cantar')}
            
            {renderCard('harry', cardHarry, 'Quando estiver feliz')}
            {renderCard('scooby', cardScooby, 'Quando estiver com medo')}
            {renderCard('barbie', cardBarbie, 'Quando precisar de inspiração')}
            {renderCard('rebelde', cardRebelde, 'Quando quiser dançar')}
            
            {renderCard('harry', cardHarry, 'Quando for seu aniversário')}
            {renderCard('scooby', cardScooby, 'Quando estiver entediado')}
            {renderCard('barbie', cardBarbie, 'Quando conquistar algo')}
            {renderCard('rebelde', cardRebelde, 'Quando quiser lembrar de nós')}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;