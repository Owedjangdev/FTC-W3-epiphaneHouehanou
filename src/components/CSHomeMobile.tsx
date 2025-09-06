// src/components/HeroSection.tsx
"use client";
import React from 'react';
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const HeroSection: React.FC = () => {
  return (
    // Le conteneur principal reste inchangé.
    <div className="relative w-full max-w-[1400px] mx-auto pt-4 pb-30 md:pb-40 lg:pb-50 overflow-hidden">
      {/* Fil d'Ariane */}
      <div className="absolute top-4 left-8 z-10 text-[#6B7280] md:left-[12%]">
        <div className="flex space-x-2">
          <span className="text-sm font-medium">Home</span>
          <ChevronRight size={18} />
          <span className="text-sm font-medium">Dog</span>
          <ChevronRight size={18} />
          <span className="text-sm font-medium">Small Dog</span>
        </div>
      </div>

      {/* La carte de contenu principale. Elle est centrée avec `left-1/2 -translate-x-1/2`.
          Son z-index est 20, elle est au premier plan. */}
      <div className="relative z-20 left-1/2 -translate-x-1/2 w-[90%] max-w-[620px] py-10 px-6 rounded-xl bg-secondary mt-16 md:mt-24 lg:mt-32">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#003459] mb-2">
          One More Friend
        </h1>
        <div className="flex items-center gap-2">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#003459]">
            Thousands More Fun!
          </h2>
          <div className="w-2 h-2 bg-[#003459] transform rotate-45"></div>
        </div>
        <p className="mt-4 text-xs md:text-sm max-w-[500px] text-[#242121]">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="mt-6 flex items-center gap-4">
          <Link
            href="#intro"
            className="flex items-center gap-2 rounded-full border-2 border-[#003459] px-6 py-2 text-sm md:text-base font-medium transition duration-300 hover:bg-[#003459] hover:text-white"
          >
            View Intro
            <span>
              <Image
                src="/Videoicon.png"
                alt="Icône de lecture"
                width={18}
                height={18}
                className="object-contain"
                priority
              />
            </span>
          </Link>
          <Link
            href="#explore"
            className="rounded-full bg-[#003459] text-white px-7 py-2 text-sm md:text-base font-medium transition duration-300 hover:bg-[#003459]/90"
          >
            Explore Now
          </Link>
        </div>
      </div>
      
      {/* Le "cercle" ou la forme d'arrière-plan.
          Son z-index est 0, il est au fond. */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-[80%] h-[300px] md:h-[400px] lg:h-[500px] bg-neutral-60 rounded-t-[50%]"></div>
      
      {/* Section des images de chiens.
          J'ai ajusté le z-index pour qu'elle soit entre le fond gris et la carte de contenu. */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[1300px] z-[5] bg-secondary">
        <Image
          src="/categoryImage.png"
          alt="Groupe de chiens"
          width={1300}
          height={380}
          className="w-full object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;