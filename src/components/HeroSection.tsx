// components/HeroSection.tsx
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto rounded-[2rem] shadow-2xl overflow-hidden mt-10 lg:mt-20 bg-secondary">
      <div className="relative w-full lg:w-2/5 min-h-[400px] lg:min-h-0 bg-primary-80 flex items-end justify-center rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
        <div className="relative z-10 w-full p-4 lg:p-0">
          <Image
            src="/heroPhoto.png"
            alt="One More Friend"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-primary-60 bg-clipped-shape z-0"></div>
      </div>

      <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center space-y-6">
        <h1 className="text-4xl md:text-4xl font-extrabold text-primary-80 leading-tight">
          One More Friend,
          <br />
          <span className="text-4xl md:text-5xl font-extrabold text-primary-80">
            Thousands More Fun!
          </span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        {/* Conteneur des boutons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#"
            className="px-4 sm:px-8 py-2 sm:py-4 rounded-full bg-[#0c3c6d] text-white font-semibold transition-colors duration-300 hover:bg-[#092a4e] text-center"
          >
            Explore Now
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-gray-600 border-2 border-gray-400 transition-colors duration-300 hover:bg-gray-200"
          >
            View Intro
            <PlayCircle className="mr-3 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
