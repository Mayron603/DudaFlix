import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Search, Bell, User } from 'lucide-react';
import MovieModal from '../components/MovieModal';

// --- IMPORTAÇÃO DAS IMAGENS ---

// Imagens do Banner e "Vem aí..."
import bgHero from '../assets/fotofundo.png';
import cardHarry from '../assets/2.png';
import cardScooby from '../assets/3.png';
import cardBarbie from '../assets/4.png';
import cardRebelde from '../assets/5.png';

// Imagens da NOVA SEÇÃO (18 a 22)
import img18 from '../assets/18.png';
import img19 from '../assets/19.png';
import img20 from '../assets/20.png';
import img21 from '../assets/21.png';
import img22 from '../assets/22.png';

// Imagens para as Cenas do Modal (23 a 28) - Harry Potter
import img23 from '../assets/23.png';
import img24 from '../assets/24.png';
import img25 from '../assets/25.png';
import img26 from '../assets/26.png';
import img27 from '../assets/27.png';
import img28 from '../assets/28.png';

// NOVAS IMAGENS PARA O SCOOBY-DOO (29 a 34)
import img29 from '../assets/29.png';
import img30 from '../assets/30.png';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';
import img34 from '../assets/34.png';

// NOVAS IMAGENS PARA A BARBIE (35 a 40)
import img35 from '../assets/35.png';
import img36 from '../assets/36.png';
import img37 from '../assets/37.png';
import img38 from '../assets/38.png';
import img39 from '../assets/39.png';
import img40 from '../assets/40.png';

// NOVAS IMAGENS PARA TRES ESPIASSSSS (41 a 46)
import img41 from '../assets/41.png';
import img42 from '../assets/42.png';
import img43 from '../assets/43.png';
import img44 from '../assets/44.png';
import img45 from '../assets/45.png';
import img46 from '../assets/46.png';


// Imagens do "Abra quando..."
import imgTriste from '../assets/6.png';
import imgRir from '../assets/7.png';
import imgSaudade from '../assets/8.png';
import imgCantar from '../assets/9.png';
import imgFeliz from '../assets/10.png';
import imgMedo from '../assets/11.png';
import imgInspiracao from '../assets/12.png';
import imgDancar from '../assets/13.png';
import imgNiver from '../assets/14.png';
import imgTedio from '../assets/15.png';
import imgConquista from '../assets/16.png';
import imgLembrar from '../assets/17.png';

// --- DADOS DOS FILMES (Conteúdo do Modal) ---
const moviesData = {
  harry: { 
    title: "Harry Potter", 
    image: cardHarry, 
    year: "2001", 
    description: "Um grupo que começou do nada e juntou tantas histórias até aqui. Mesmo que Thomaz trai a gente com outra mulher de vestido, ainda seremos o elenco principal das anarquias — e dos momentos sérios também. Nós te amamos, Branca Sebosa.", 
    cast: "Ana Grimm, Maria Eduarda, Nayara Anjos e Thomaz Vinicius", 
    genre: "3 mulheres e 1 homem afeminado",
    scenesImages: [img23, img24, img25, img26, img27, img28],
    subtitle: "3 mulheres e 1 homem afeminado", 
  },
  scooby: { 
    title: "Scooby-Doo!", 
    image: cardScooby, 
    year: "2002", 
    description: "Pare de ler imediatamente e me ligue caso eu esteja de plantão (se eu já tiver me formado até lá). Pode discar no número da Ana ou do Thomaz. Não surte sozinha — estamos aqui também para te ajudar nos momentos de crise. Você não precisa falar o que está passando. Entre no Discord e eu prometo que arrumo alguém para encher o seu saco e te divertir. (Se o Mayron ainda tiver paciência comigo, eu coloco ele na call e jogamos GTA — se ele não me matar toda hora.)", 
    cast: "Ana, Caio, Charles e Rurylumanael", 
    genre: "Comédia",
    scenesImages: [img29, img30, img31, img32, img33, img34],
    // SUBTÍTULO DEFINIDO
    subtitle: "O Túnel das Risadas",
  },
  barbie: { 
    title: "Barbie", 
    image: cardBarbie, 
    year: "2023", 
    description: "Não sei o que está acontecendo. Eu não sou de abraços (como sabemos), mas, se for preciso, estarei aqui para isso. Respire um pouco, pense que tudo passa — tanto as coisas boas quanto as ruins. Então lembre dos momentos bons para que os ruins sejam esquecidos. E, caso precise se distrair, vai lá e coloca bem alto na caixa o Now United, porque quero ouvir daqui o OH NANANA, que já sabemos de cor e salteado. Lembre-se, Branquela: hoje você nunca estará sozinha (não no sentido macabro, mas no da amizade mesmo KKKK)", 
    cast: "Maria Eduarda e Nayara Anjos", 
    genre: "Comédia",
    scenesImages: [img35, img36, img37, img38, img39, img40],
    // SUBTÍTULO DEFINIDO
    subtitle: "A Vaca e O Panda",
  },
  rebelde: { 
    title: "Três Espiãs Demais", 
    image: cardRebelde, 
    year: "2004", 
    description: "Um trio que já passou por altos e baixos, com muitas linhas tortas que nos fizeram chegar até aqui de maneiras confusas — e que sempre seria assim pelo destino.", 
    cast: "Ana Grim, Maria Eduarda e Nayara Anjos", 
    genre: "Aventura", 
    scenesImages: [img41, img42, img43, img44, img45, img46],
    // SUBTÍTULO DEFINIDO
    subtitle: "Caminhos Trilhados",
  }
};

// --- CONFIGURAÇÃO DO "ABRA QUANDO..." ---
const openWhenList = [
  { title: "precisar de uma AMIGA", image: imgTriste, movieToOpen: 'harry' },
  { title: "precisar de um alguém PARA OUVIR", image: imgRir, movieToOpen: 'scooby' },
  { title: "precisar de MOTIVAÇÃO", image: imgSaudade, movieToOpen: 'barbie' },
  { title: "tirar uma nota RUIM", image: imgCantar, movieToOpen: 'rebelde' },
  
  { title: "precisar de um ABRAÇO", image: imgFeliz, movieToOpen: 'barbie' },
  { title: "se FORMAR", image: imgMedo, movieToOpen: 'scooby' },
  { title: "duvidar de si MESMA", image: imgInspiracao, movieToOpen: 'harry' },
  { title: "tiver com vontade DE CHORAR", image: imgDancar, movieToOpen: 'rebelde' },
  
  { title: "estiver DOENTE", image: imgNiver, movieToOpen: 'barbie' },
  { title: "estiver tendo um DIA RUIM", image: imgTedio, movieToOpen: 'scooby' },
  { title: "estiver no ANO NOVO", image: imgConquista, movieToOpen: 'harry' },
  { title: "for NATAL", image: imgLembrar, movieToOpen: 'rebelde' },
];

function Login() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="relative w-screen min-h-screen bg-[#141414] text-white font-sans overflow-x-hidden flex flex-col justify-between">
      
      <MovieModal isOpen={!!selectedMovie} onClose={() => setSelectedMovie(null)} movie={selectedMovie} />

      {/* --- BANNER --- */}
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
          <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center cursor-pointer"><User className="w-6 h-6 text-white" /></div>
        </div>
      </nav>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="relative z-10 px-4 md:px-12 pt-[22vh] md:pt-[28vh] max-w-3xl mb-20">
        <div className="flex items-center gap-3 mb-5 animate-fade-in">
          <div className="flex flex-col bg-red-600 text-white font-black text-[11px] px-2 py-1 rounded-[2px] shadow-lg"><span>TOP</span><span>G5</span></div>
          <span className="font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow-lg text-white/90">Projeto 25 anos</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl leading-tight text-white">A Branca mais Amada do Janga</h2>
        <p className="text-base md:text-xl text-gray-100 mb-8 drop-shadow-md font-medium max-w-2xl leading-relaxed">
          Um especial que celebra a história, o carinho e o legado da Branca no Janga, reunindo memórias e homenagens em uma homenagem inesquecível.
        </p>
        
        {/* --- BOTÃO ASSISTIR COM LINK EXTERNO --- */}
        <div className="flex items-center gap-4">
          <a 
            href="https://youtube.com/playlist?list=PLFqgrexH4yV2Gl5tMeOe1KGs7CeNFRXLI&si=exiirWaAjZLUNtyf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded-[4px] hover:bg-white/90 transition-all font-bold text-xl shadow-xl hover:scale-105">
              <Play className="w-7 h-7 fill-black" /> Assistir
            </button>
          </a>
          
          <button className="flex items-center gap-3 px-8 py-3 bg-[rgba(109,109,110,0.7)] text-white rounded-[4px] hover:bg-[rgba(109,109,110,0.5)] transition-all font-bold text-xl backdrop-blur-sm">
            <Info className="w-7 h-7" /> Mais Informações
          </button>
        </div>

      </div>

      {/* --- LISTAS DE CARDS --- */}
      <div className="relative z-20 px-4 md:px-12 pb-20 bg-gradient-to-t from-[#141414] via-[#141414] to-transparent pt-10 space-y-16">
        
        {/* SEÇÃO 1: VEM AÍ... (CLICÁVEL) */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-red-600">Vem aí...</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div onClick={() => setSelectedMovie(moviesData.harry)} className="group relative w-full aspect-[433/243] bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardHarry} alt="Harry Potter" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
            <div onClick={() => setSelectedMovie(moviesData.scooby)} className="group relative w-full aspect-[433/243] bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardScooby} alt="Scooby" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
            <div onClick={() => setSelectedMovie(moviesData.barbie)} className="group relative w-full aspect-[433/243] bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardBarbie} alt="Barbie" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
            <div onClick={() => setSelectedMovie(moviesData.rebelde)} className="group relative w-full aspect-[433/243] bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardRebelde} alt="Rebelde" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* --- NOVA SEÇÃO (COISAS QUE ME LEMBRAM VOCÊ - NÃO-CLICÁVEL) --- */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-purple-500">Coisas que me lembram você</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            
            <div className="group relative w-full aspect-[3/4] bg-[#1f1f1f] rounded-lg overflow-hidden transition-all duration-300">
              <img src={img18} alt="Especial 1" className="w-full h-full object-cover object-top opacity-85" />
            </div>
            
            <div className="group relative w-full aspect-[3/4] bg-[#1f1f1f] rounded-lg overflow-hidden transition-all duration-300">
              <img src={img19} alt="Especial 2" className="w-full h-full object-cover object-top opacity-85" />
            </div>
            
            <div className="group relative w-full aspect-[3/4] bg-[#1f1f1f] rounded-lg overflow-hidden transition-all duration-300">
              <img src={img20} alt="Especial 3" className="w-full h-full object-cover object-top opacity-85" />
            </div>
            
            <div className="group relative w-full aspect-[3/4] bg-[#1f1f1f] rounded-lg overflow-hidden transition-all duration-300">
              <img src={img21} alt="Especial 4" className="w-full h-full object-cover object-top opacity-85" />
            </div>

            <div className="group relative w-full aspect-[3/4] bg-[#1f1f1f] rounded-lg overflow-hidden transition-all duration-300">
              <img src={img22} alt="Especial 5" className="w-full h-full object-cover object-top opacity-85" />
            </div>

          </div>
        </div>
        {/* --- FIM DA NOVA SEÇÃO --- */}

        {/* SEÇÃO 2: ABRA QUANDO... (TÍTULO DO MODAL CORRIGIDO) */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-blue-500">Abra quando...</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {openWhenList.map((item, index) => (
              <div 
                key={index}
                onClick={() => {
                    const baseMovieData = moviesData[item.movieToOpen] || moviesData.harry;
                    setSelectedMovie({
                        ...baseMovieData,
                        // TÍTULO CORRIGIDO: Usa o título da emoção no TÍTULO PRINCIPAL do modal
                        title: item.title, 
                        image: item.image,
                        isEmotionalCard: true, // SINALIZADOR ADICIONADO AQUI
                    });
                }} 
                className="group relative w-full aspect-[433/243] bg-[#1f1f1f] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-blue-500"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
                
                {/* O texto já foi removido daqui para não sobrepor a imagem */}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- RODAPÉ --- */}
      <div className="w-full py-8 text-center text-gray-500 text-sm border-t border-gray-800 mt-12 z-10">
        Criado por Mayron ❤️
      </div>
    </div>
  );
}

export default Login;