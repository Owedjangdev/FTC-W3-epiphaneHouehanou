"use client";

import React from "react";

import { ChevronRight, PlayCircle } from "lucide-react";

import Image from "next/image";

import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full  mx-auto pt-4 pb-30 md:pb-40 lg:pb-50 overflow-hidden">
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

        <div className="flex flex-row gap-2 ">
          <Link
            href="#"
            className="inline-flex items-center gap-2 justify-center px-3 md:px-5 py-3 border border-gray-900 text-gray-900 rounded-full font-medium transition duration-300 hover:bg-gray-100 whitespace-nowrap"
          >
            View Intro
            <PlayCircle color="white" className="ml-1 w-5 h-5" />
          </Link>

          <Link
            href="#"
            className="inline-flex items-center justify-center px-3 md:px-5 py-3 bg-blue-900 text-white rounded-full font-medium transition duration-300 hover:bg-blue-800 whitespace-nowrap"
          >
            Explore Now
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-[80%] h-[300px] md:h-[400px] lg:h-[500px] bg-neutral-60 rounded-t-[50%]"></div>

      {/* Section des images de chiens.*/}

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
