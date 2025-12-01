// src/pages/Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Search, Bell, User } from 'lucide-react';
import MovieModal from '../components/MovieModal';

// --- IMPORTS GERAIS ---
import bgHero from '../assets/fotofundo.png';
import cardHarry from '../assets/2.png';
import cardScooby from '../assets/3.png';
import cardBarbie from '../assets/4.png';
import cardRebelde from '../assets/5.png';

// --- IMPORTS DE GALERIAS ---
import img18 from '../assets/18.png';
import img19 from '../assets/19.png';
import img20 from '../assets/20.png';
import img21 from '../assets/21.png';
import img22 from '../assets/22.png';
import img23 from '../assets/23.png';
import img24 from '../assets/24.png';
import img25 from '../assets/25.png';
import img26 from '../assets/26.png';
import img27 from '../assets/27.png';
import img28 from '../assets/28.png';
import img29 from '../assets/29.png';
import img30 from '../assets/30.png';
import img31 from '../assets/31.png';
import img32 from '../assets/32.png';
import img33 from '../assets/33.png';
import img34 from '../assets/34.png';
import img35 from '../assets/35.png';
import img36 from '../assets/36.png';
import img37 from '../assets/37.png';
import img38 from '../assets/38.png';
import img39 from '../assets/39.png';
import img40 from '../assets/40.png';
import img41 from '../assets/41.png';
import img42 from '../assets/42.png';
import img43 from '../assets/43.png';
import img44 from '../assets/44.png';
import img45 from '../assets/45.png';
import img46 from '../assets/46.png';
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

// --- DADOS DOS FILMES ---
const moviesData = {
  harry: { 
    title: "Harry Potter", 
    image: cardHarry, 
    year: "2001", 
    description: "Um grupo que começou do nada e juntou tantas histórias até aqui. Mesmo que Thomaz trai a gente com outra mulher de vestido, ainda seremos o elenco principal das anarquias — e dos momentos sérios também. ", 
    cast: "Ana Grimm, Maria Eduarda, Nayara Anjos e Thomaz Vinicius", 
    genre: "3 mulheres e 1 homem afeminado",
    scenesImages: [img23, img24, img25, img26, img27, img28],
    subtitle: "3 mulheres e 1 homem afeminado", 
  },
  scooby: { 
    title: "Scooby-Doo!", 
    image: cardScooby, 
    year: "2002", 
    description: "Já tivemos muitos momentos engraçados que nem caberiam em uma série nível Grey’s Anatomy. Porém, alguns momentos são bons demais para ficarem guardados.", 
    cast: "Ana, Caio, Charles e Rurylumanael", 
    genre: "Comédia",
    scenesImages: [img29, img30, img31, img32, img33, img34],
    subtitle: "O Túnel das Risadas",
  },
  barbie: { 
    title: "Barbie", 
    image: cardBarbie, 
    year: "2023", 
    description: "Obrigada por todos os momentos juntos. Você sempre será a melhor amiga do mundo, mesmo sendo uma vaquinha. #AmoAnimais", 
    cast: "Maria Eduarda e Nayara Anjos", 
    genre: "Comédia",
    scenesImages: [img35, img36, img37, img38, img39, img40],
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
    subtitle: "Caminhos Trilhados",
  }
};

const openWhenList = [
  { 
    title: "precisar de uma AMIGA", 
    image: imgTriste, 
    movieToOpen: 'harry', 
    customDescription: "Espero que você saiba que não está sozinha independente do que seja ou do que vai acontecer você pode contar comigo e muitas outras pessoas. As vezes a vida parece que vira de cabeça pra baixo, mas confia em mim, elas sempre voltam ao eixo. Como espírita normalmente quando saímos da zona de conforto é que Deus esta mandando coisas melhores e isso é apenas uma preparação para a chegada dessa novidade. Então, respira e tenta descansar vendo um video de idiomas novos ou libras e me conta depois adoro como sempre descubro coisas novas com você." 
  },
  { 
    title: "precisar de um alguém PARA OUVIR", 
    image: imgRir, 
    movieToOpen: 'scooby', 
    customDescription: "Pare de ler imediatamente e me ligue caso eu esteja de plantão (se eu já tiver me formado até lá). Pode discar no número da Ana ou do Thomaz. Não surte sozinha — estamos aqui também para te ajudar nos momentos de crise. Você não precisa falar o que está passando. Entre no Discord e eu prometo que arrumo alguém para encher o seu saco e te divertir. (Se o Mayron ainda tiver paciência comigo, eu coloco ele na call e jogamos GTA — se ele não me matar toda hora.)" 
  },
  { 
    title: "precisar de MOTIVAÇÃO", 
    image: imgSaudade, 
    movieToOpen: 'barbie', 
    customDescription: "Nem todo dia teremos a melhor motivação do mundo, é normal. Mas se tiver que fazer algo que é importante e está sem coragem, levanta Maria Eduarda e se livra logo dessa bomba." 
  },
  { 
    title: "tirar uma nota RUIM", 
    image: imgCantar, 
    movieToOpen: 'rebelde', 
    customDescription: "As vezes passamos horas estudando e as notas não são boas, outras nem passamoa de 2horas e vem nota máxima. Existem muitos fatores para quee a nota tenha sido baixa, então não tente arrumar motivos ou ficar pensando muito, agora é só correr atrás. Achar novas maneiras de estudar e entender a matéria pode ser uma boa, ou até pode me explicar o conteúdo que debatemos e te ajudo nesse processo. Mas saiba que essa nota baixa nao defini você, por que você tem um valor imenso e é a pessoa mais capaz do mundo de passar na prova." 
  },
  { 
    title: "precisar de um ABRAÇO", 
    image: imgFeliz, 
    movieToOpen: 'barbie', 
    customDescription: "Não sei o que está acontecendo. Eu não sou de abraços (como sabemos), mas, se for preciso, estarei aqui para isso. Respire um pouco, pense que tudo passa — tanto as coisas boas quanto as ruins. Então lembre dos momentos bons para que os ruins sejam esquecidos. E, caso precise se distrair, vai lá e coloca bem alto na caixa o Now United, porque quero ouvir daqui o OH NANANA, que já sabemos de cor e salteado. Lembre-se, Branquela: hoje você nunca estará sozinha (não no sentido macabro, mas no da amizade mesmo KKKK)" 
  },
  { 
    title: "se FORMAR", 
    image: imgMedo, 
    movieToOpen: 'scooby', 
    customDescription: "Eu ainda não acredito que você está se formando, tipo a gente se formou juntas no ensino médio e agora você é graduada? Que mundo malucoo e maravilhoso. Agradeço a Deus por você está na minha vida e que possamos passar por mais etapas juntas. VIVA SEU DIA E AAAAA EDUARDA AGORA É ADMINISTRADORA!!!!!!!! Que seus sonhos realizem e espero que o mundo se prepare por que a maioral ta no mercado de trabalho administrativo." 
  },
  { 
    title: "duvidar de si MESMA", 
    image: imgInspiracao, 
    movieToOpen: 'harry', 
    customDescription: "Pare agora, nem deixe esse pensamento fluir. Impossível que o quer que seja você não consiga passar, não existe nada que eu sei que te impossibilite de algo (a não ser dindin pq não somos ricas, mas você entendeu). Você é a pessoa que sabe todas as bandeiras do mundo, aprende curiosidades de tantas coisas diferentes, sabe inglês como ninguém e ainda tem paciência para me traduzir. Então o mundo precisa de mais pessoas como você e pare de pensar que não é capaz branca sebosa." 
  },
  { 
    title: "tiver com vontade DE CHORAR", 
    image: imgDancar, 
    movieToOpen: 'rebelde', 
    customDescription: "Essa foi complicada de escrever por que não sei o motivo de você ter aberto essa carta. Então tentarei ser mais abrangente, mas chore...chore tudo que tiver que chorar, libere isso de dentro de você. Mas depois levante, lave o rosto, caso queira durma um pouco ou vai ver um pouco de Business Proposal, harry potter, big Bang theory ou qualquer outro video de culturas internacionais wue você ama. Curta o momento sozinha, mas caso queria companhia só me ligar que ficamos caladas juntas ou damos uma volta por ai." 
  },
  { 
    title: "estiver DOENTE", 
    image: imgNiver, 
    movieToOpen: 'barbie', 
    customDescription: "Ai temosa, vai tomar um remédio e se cuida. Que ainda tem muita coisa pra gebte viver." 
  },
  { 
    title: "estiver tendo um DIA RUIM", 
    image: imgTedio, 
    movieToOpen: 'scooby', 
    customDescription: "" 
  },
  { 
    title: "estiver no ANO NOVO", 
    image: imgConquista, 
    movieToOpen: 'harry', 
    customDescription: "Teoricamente você deve abrir isso no final ds 2025. Mas desejo isso em todos os anos da sua vida. Que você realize seus sonhos, que consiga ser uma pessoa melhor e mais saudável, que a felicidade continue em você. Essa pessoa maravilhosa que você é conseguir conquistar tudk que deseja, só não desitir e continue em volta de pessoas, que assim como eu, querem seu bem. FELIZ ANO NOVO VACAAAA" 
  },
  { 
    title: "for NATAL", 
    image: imgLembrar, 
    movieToOpen: 'rebelde', 
    customDescription: "Como explicar e falae sobre a melhor época do ano? Não tem sentimento igual. Espero que você tenha conseguido se controlar e aberto seu presente de natal na madrugada certa. Espero que tenha gostado e passado um natal maravilhoso. Vamos assitir Grinch por favor, o maioral dos filmes de natal. Um dia terei meu apê e farei nossa confra no estilo que o natal pede. Beijos e FELIZ NATALLLLLLLL" 
  },
];

// =========================================================================
// --- COMPONENTE PRINCIPAL ------------------------------------------------
// =========================================================================
function Login() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="relative w-screen min-h-screen bg-[#141414] text-white font-sans overflow-x-hidden flex flex-col justify-between">
      
      <MovieModal isOpen={!!selectedMovie} onClose={() => setSelectedMovie(null)} movie={selectedMovie} />

      {/* --- BANNER E NAVBAR (TOPO FIXO) --- */}
      <div className="absolute top-0 left-0 w-full h-[65vh] md:h-[100vh] z-0">
        <img src={bgHero} alt="Banner" className="w-full h-full object-cover object-top opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4 bg-gradient-to-b from-black/90 to-transparent">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl md:text-5xl font-bold text-red-600 tracking-tighter cursor-pointer drop-shadow-lg hover:scale-105 transition-transform">DUDAFLIX</h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
            <span className="text-white font-bold cursor-pointer hover:underline">Início</span>
            <span className="hover:text-gray-300 cursor-pointer">Séries</span>
            <span className="hover:text-gray-300 cursor-pointer">Filmes</span>
            <span className="hover:text-gray-300 cursor-pointer">Minha lista</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6 text-white">
          <Search className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-300" />
          <Bell className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-300" />
          <div className="w-8 h-8 md:w-9 md:h-9 rounded bg-blue-600 flex items-center justify-center cursor-pointer"><User className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
        </div>
      </nav>

      {/* --- CONTEÚDO PRINCIPAL (TEXTO SOBRE O BANNER) --- */}
      {/* Ajustado: pb-10 para dar espaço antes da lista começar */}
      <div className="relative z-10 px-4 md:px-12 pt-[18vh] md:pt-[28vh] max-w-3xl pb-10 md:pb-20">
        <div className="flex items-center gap-3 mb-3 md:mb-5 animate-fade-in">
          <div className="flex flex-col bg-red-600 text-white font-black text-[9px] md:text-[11px] px-2 py-1 rounded-[2px] shadow-lg"><span>TOP</span><span>G5</span></div>
          <span className="font-bold text-sm md:text-2xl tracking-widest uppercase drop-shadow-lg text-white/90">Projeto 25 anos</span>
        </div>
        
        <h2 className="text-3xl md:text-7xl font-extrabold mb-4 md:mb-6 drop-shadow-2xl leading-tight text-white max-w-[80%] md:max-w-full">
          A Branca mais Amada do Janga
        </h2>
        
        <p className="text-sm md:text-xl text-gray-100 mb-6 md:mb-8 drop-shadow-md font-medium max-w-2xl leading-relaxed line-clamp-3 md:line-clamp-none">
          Um especial que celebra a história, o carinho e o legado da Branca no Janga, reunindo memórias e homenagens em uma homenagem inesquecível.
        </p>
        
        {/* --- BOTÕES --- */}
        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href="https://youtube.com/playlist?list=PLFqgrexH4yV2Gl5tMeOe1KGs7CeNFRXLI&si=exiirWaAjZLUNtyf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {/* Botão Assistir: px-5 py-2 mobile */}
            <button className="flex items-center gap-2 md:gap-3 px-5 py-2 md:px-8 md:py-3 bg-white text-black rounded-[4px] hover:bg-white/90 transition-all font-bold text-sm md:text-xl shadow-xl hover:scale-105 whitespace-nowrap">
              <Play className="w-5 h-5 md:w-7 md:h-7 fill-black" /> Assistir
            </button>
          </a>
          
          {/* Botão Mais Informações: Texto completo no mobile com fonte menor (text-sm) */}
          <button className="flex items-center gap-2 md:gap-3 px-5 py-2 md:px-8 md:py-3 bg-[rgba(109,109,110,0.7)] text-white rounded-[4px] hover:bg-[rgba(109,109,110,0.5)] transition-all font-bold text-sm md:text-xl backdrop-blur-sm whitespace-nowrap">
            <Info className="w-5 h-5 md:w-7 md:h-7" /> Mais Informações
          </button>
        </div>

      </div>

      {/* =============================================== */}
      {/* --- LISTAS DE CARDS (SEÇÕES SEPARADAS) --- */}
      {/* =============================================== */}
      {/* AQUI ESTAVA O PROBLEMA: Removi mt-[-50px] do mobile, deixei apenas no desktop (md:mt-0 ou ajuste fino se precisar) */}
      <div className="relative z-20 px-4 md:px-12 pb-20 bg-[#141414] pt-4 md:pt-10 space-y-10 md:space-y-16 bg-gradient-to-t from-[#141414] via-[#141414] to-transparent">
        
        {/* SEÇÃO 1: VEM AÍ... */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-red-600">Vem aí...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div onClick={() => setSelectedMovie(moviesData.harry)} className="group relative w-full aspect-[16/9] bg-[#1f1f1f] rounded md:rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardHarry} alt="Harry Potter" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
            <div onClick={() => setSelectedMovie(moviesData.scooby)} className="group relative w-full aspect-[16/9] bg-[#1f1f1f] rounded md:rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardScooby} alt="Scooby" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
            <div onClick={() => setSelectedMovie(moviesData.barbie)} className="group relative w-full aspect-[16/9] bg-[#1f1f1f] rounded md:rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardBarbie} alt="Barbie" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
            <div onClick={() => setSelectedMovie(moviesData.rebelde)} className="group relative w-full aspect-[16/9] bg-[#1f1f1f] rounded md:rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-white">
              <img src={cardRebelde} alt="Rebelde" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* SEÇÃO 2: COISAS QUE ME LEMBRAM VOCÊ */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-purple-500">Coisas que me lembram você</h3>
          {/* Scroll horizontal no mobile */}
          <div className="flex overflow-x-auto gap-3 md:grid md:grid-cols-5 md:gap-4 pb-4 md:pb-0 scrollbar-hide">
            {[img18, img19, img20, img21, img22].map((img, i) => (
               <div key={i} className="min-w-[120px] md:min-w-0 w-32 md:w-full aspect-[3/4] bg-[#1f1f1f] rounded md:rounded-lg overflow-hidden shrink-0 transition-all duration-300">
                 <img src={img} className="w-full h-full object-cover object-top opacity-85" />
               </div>
            ))}
          </div>
        </div>
        
        {/* SEÇÃO 3: ABRA QUANDO... */}
        <div>
          <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg pl-3 border-l-4 border-blue-500">Abra quando...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {openWhenList.map((item, index) => (
              <div 
                key={index}
                onClick={() => {
                    const baseMovieData = moviesData[item.movieToOpen] || moviesData.harry;
                    setSelectedMovie({
                        ...baseMovieData,
                        title: "", 
                        subtitle: item.title, 
                        description: item.customDescription, 
                        image: item.image,
                        isEmotionalCard: true, 
                    });
                }} 
                className="group relative w-full aspect-[16/9] bg-[#1f1f1f] rounded md:rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:z-30 hover:shadow-2xl hover:ring-2 hover:ring-blue-500"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
                {/* Título sobre a imagem no card pequeno */}
                <div className="absolute inset-0 bg-black/30 flex items-end p-2 md:p-3">
                    <p className="text-white text-xs md:text-sm font-bold drop-shadow-md leading-tight uppercase tracking-wider">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- RODAPÉ --- */}
      <div className="w-full py-8 text-center text-gray-500 text-xs md:text-sm border-t border-gray-800 mt-12 z-10">
        Criado por Mayron ❤️
      </div>
    </div>
  );
}

export default Login;