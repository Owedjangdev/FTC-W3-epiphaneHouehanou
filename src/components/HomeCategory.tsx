"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import HeroContentCard from "./ui/HeroContentCard";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl  rounded-b-[40px] bg-secondary mx-auto px-4 md:px-8 lg:pb-70">
      <div className="absolute top-4 left-8 text-[#6B7280] flex space-x-2 items-center z-40">
        <span className="text-sm font-medium">Home</span>
        <ChevronRight size={18} />
        <span className="text-sm font-medium">Dog</span>
        <ChevronRight size={18} />
        <span className="text-sm font-medium">Small Dog</span>
      </div>
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#003459] rounded-tl-[150px] z-10"></div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[60%] max-w-[500px] lg:right-16 z-20">
        <HeroContentCard />
      </div>

      <div className="absolute bottom-[-20px] left-0 w-[60%] z-20">
        <Image
          src="/categoryImage.png"
          alt="Groupe de chiens"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
