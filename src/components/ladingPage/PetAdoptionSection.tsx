import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle,  ChevronRight } from "lucide-react";

interface Brand {
  name: string;
  logo: string;
}

const petBrands: Brand[] = [
  { name: "Sheba", logo: "/imageUP1.png" },
  { name: "Whiskas", logo: "/imageUP2.png" },
  { name: "Bakers", logo: "/imageUP3.png" },
  { name: "Felix", logo: "/imageUP4.png" },
  { name: "Good Boy", logo: "/imageUP7.png" },
  { name: "Butcher's", logo: "/imageUP6.png" },
  { name: "Pedigree", logo: "/imageUP5.png" },
];

const PetAdoptionSection: React.FC = () => {
  return (
    <div className="container mx-auto py-12 sm:py-16 px-4">
      <div className="mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <p className="text-gray-600 text-lg font-medium mb-4 sm:mb-0">
            Proud to be part of{" "}
            <strong className="text-[#0c3c6d]">Pet Sellers</strong>
          </p>
          <div>
            <Link
              href="#"
              className="mt-4 md:mt-0 hidden   md:flex items-center gap-2 px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-medium transition-colors hover:bg-gray-100"
           >
              View all our sellers <span>
            <ChevronRight size={18} />
          </span>
            </Link>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center justify-items-center">
          {petBrands.map((brand) => (
            <div
              key={brand.name}
              className="relative w-28 h-12 sm:w-32 sm:h-16 flex items-center justify-center p-2"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section Adoption */}
      <div className="relative bg-secondary rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Contenu de gauche */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0c3c6d] mb-4 flex items-center">
            Adoption <span className="ml-3">🐾</span>
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0c3c6d] mb-6">
            We Need Help. So Do They.
          </p>
          <p className="text-gray-600 mb-8 max-w-sm">
            Adopt a pet and give it a home, it will be the love you learn
            unconditionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#0c3c6d] text-white font-semibold transition-colors duration-300 hover:bg-[#092a4e] text-center"
            >
              Explore Now
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-gray-600 border-2 border-gray-400 transition-colors duration-300 hover:bg-gray-200"
            >
              View Intro
              <PlayCircle className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="relative flex-1 w-full h-auto lg:min-h-full bg-secondar">
          <Image
            src="/imageUPl.png"
            alt="Human hand holding a dog paw"
            width={600}
            height={400}
            className="object-cover w-full h-full lg:rounded-bl-[100px]"
          />
          {/* Arrière-plan coloré - Positionné en dessous de l'image */}
          <div className="absolute top-0 right-0 bottom-0 w-full  lg:w-1/2 bg-secondary-80 z-[-1] lg:rounded-bl-[100px] lg:rounded-tl-[100px] hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default PetAdoptionSection;
