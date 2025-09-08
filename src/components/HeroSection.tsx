// components/HeroSection.tsx
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mt-10 lg:mt-20 bg-secondary">
      
      {/* Colonne de gauche : Image et fond bleu */}
      <div className="relative w-full lg:w-2/5 min-h-[400px] lg:min-h-0 bg-primary-80 flex items-end justify-center rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
        
        {/* L'image de la personne avec le chien */}
        <div className="relative z-10 w-full p-4 lg:p-0">
          <Image
            src="/heroPhoto.png" 
            alt="One More Friend"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Fond découpé oblique (la forme de vague est une illusion d'optique due à la découpe) */}
        <div className="absolute inset-0 bg-primary-60 bg-clipped-shape z-0"></div>
      </div>
      
      {/* Colonne de droite : Contenu textuel et boutons */}
      <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-80 leading-tight">
          One More Friend,
          <br />
          <span className="text-4xl md:text-5xl font-extrabold text-primary-80">
            Thousands More Fun!
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        
        {/* Conteneur des boutons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-4 items-center">
          {/* Bouton "View Intro" */}
          <button className="flex items-center space-x-2 text-primary-80 font-semibold border-2 border-primary-80 rounded-full py-3 px-8 transition duration-300 hover:bg-white/50">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span>View Intro</span>
          </button>
          
          {/* Bouton "Explore Now" */}
          <button className="bg-primary-80 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:bg-opacity-90">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;