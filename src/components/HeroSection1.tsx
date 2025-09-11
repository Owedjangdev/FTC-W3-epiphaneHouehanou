'use client';
import React from 'react';
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
 {/* Section Hero */}
 const HeroSection: React.FC = () => {
  return (
        <section className="relative w-full overflow-hidden bg-secondary ">
          {/* Fond de la section */}
          <div className="absolute inset-0 bg-secondary-50 transform -skew-y-2"></div>

          <div className="relative z-10 w-full max-w-[1400px]   mx-auto flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 py-16 md:py-24">
            {/* Partie texte */}
            <div>
              <div className="flex flex-row gap-9">
                <h1 className="text-2xl md:text-4xl font-bold text-primary-80 mb-4">
                  <span className="w-16 h-16 bg-secondary-80 rotate-60 rounded-full inline-flex items-center justify-center">
                    O
                  </span>
                  ne More Friend
                  <div className="flex gap-12">
                    {" "}
                    Thousands More Fun!{" "}
                    {/* Petit losange bleu entre les titres */}
                    <div className="w-4 h-4 bg-[#003459] transform rotate-45 -mt-2"></div>
                  </div>
                </h1>
              </div>
              <p className="text-gray-700 text-sm mb-8">
                Having a pet means you have more joy, a new friend, a happy
                person <br /> who will always be with you to have fun. We have
                200+ different pets <br /> that can meet your needs!
              </p>
              <div className="flex flex-row gap-2 ">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 justify-center px-3 md:px-5 py-3 border border-gray-900 text-gray-900 rounded-full font-medium transition duration-300 hover:bg-gray-100 whitespace-nowrap"
                >
                  View Intro
                  <PlayCircle className="ml-1 w-5 h-5" />
                </Link>

                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-3 md:px-5 py-3 bg-blue-900 text-white rounded-full font-medium transition duration-300 hover:bg-blue-800 whitespace-nowrap"
                >
                  Explore Now
                </Link>
              </div>
            </div>

            {/* Partie droite : Image et formes géométriques */}
            {/* Partie image */}
            <div className="flex relative mt-12 md:mt-0">
              <div className="relative w-full h-full">
                <Image
                  src="/homePhoto.png"
                  alt="Smiling person holding a corgi"
                  width={1887}
                  height={1258}
                  className="relative z-30 w-full h-full max-h-[400px]"
                />
                <div className="absolute -bottom-12 left-[5%] w-[60%] h-[80%] bg-blue-900 rounded-2xl rotate-16 z-10"></div>
                <div className="absolute -bottom-12 left-[9%] w-[60%] h-[80%] rounded-2xl  shadow-2xl bg-secondary-80 z-20 rotate-35"></div>
              </div>
            </div>
          </div>
        </section>

         );
};

export default HeroSection;