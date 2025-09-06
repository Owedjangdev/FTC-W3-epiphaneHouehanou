// src/components/HeroSection.tsx
"use client";
import React from 'react';
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import HeroContentCard from './ui/HeroContentCard';

const HeroSection: React.FC = () => {
  return (
    // Le conteneur principal avec le fond de couleur clair et les coins arrondis.
    <div className="relative w-full max-w-7xl overflow-hidden rounded-b-[40px]  mx-auto px-4 md:px-8 pt-10 m-10 pb-48 lg:pb-64">
      {/* Fil d'Ariane, décommenté pour le rendre visible */}
      <div className="absolute top-4 left-8 text-[#6B7280] flex space-x-2 items-center z-20">
        <span className="text-sm font-medium">Home</span>
        <ChevronRight size={18} />
        <span className="text-sm font-medium">Dog</span>
        <ChevronRight size={18} />
        <span className="text-sm font-medium">Small Dog</span>
      </div>

      {/* Le fond de couleur foncée avec la forme organique (blob). */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#003459] rounded-tl-[150px] z-10"></div>

      {/* La carte de contenu, positionnée à droite. */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[60%] max-w-[500px] lg:right-16 z-20">
        <HeroContentCard />
      </div>

      {/* L'image des chiens. Positionnée à gauche.
          La classe `bottom-[-20px]` est la clé. Elle fait remonter l'image de 20 pixels
          par rapport au bas de son conteneur parent (qui est `HeroSection`).
          Le z-index de 30 est correct pour la placer au-dessus des autres éléments. */}
      <div className="absolute bottom-[-20px]  left-0 w-[60%] z-30">
            
            <Image
          src="/categoryImage.png"
          alt="Groupe de chiens"
          width={800}
          height={600}
          className="w-full h-auto object-contain "
          priority
        />
        

      </div>
    </div>
  );
};

export default HeroSection;