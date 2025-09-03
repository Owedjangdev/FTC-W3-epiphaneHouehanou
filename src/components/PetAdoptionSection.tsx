// src/components/PetAdoptionSection.tsx

import React from 'react';
import Image from 'next/image'; // Importe le composant Image de Next.js
import Link from 'next/link';   // Importe le composant Link de Next.js
import { PlayCircle, ArrowRight } from 'lucide-react'; // Assurez-vous d'avoir lucide-react installé

interface Brand {
    name: string;
    logo: string;
}

const petBrands: Brand[] = [
    { name: 'Sheba', logo: '/imageUP1.png' },
    { name: 'Whiskas', logo: '/imageUP2.png' },
    { name: 'Bakers', logo: '/imageUP3.png' },
    { name: 'Felix', logo: '/imageUP4.png' },
    { name: 'Good Boy', logo: '/imageUP7.png' },
    { name: 'Butcher\'s', logo: '/imageUP6.png' },
    { name: 'Pedigree', logo: '/imageUP5.png' },
];

const PetAdoptionSection: React.FC = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            {/* Section des marques / Pet Sellers */}
            <div className="mb-16">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                    <p className="text-gray-600 text-lg font-medium">
                        Proud to be part of <strong className="text-[#0c3c6d]">Pet Sellers</strong>
                    </p>
                    <Link href="/sellers" passHref>
                        <Link href="/"  className="flex items-center text-[#0c3c6d] font-semibold mt-4 sm:mt-0 transition-colors hover:text-[#092a4e]">
                            View all our sellers <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
                    {petBrands.map((brand) => (
                        <div key={brand.name} className="relative w-32 h-16 sm:w-28 sm:h-14 flex items-center justify-center p-2">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                layout="fill"
                                objectFit="contain"
                                className=""
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Section Adoption */}
            <div className="relative bg-secondary rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                {/* Contenu de gauche */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-[#0c3c6d] mb-4 flex items-center">
                        Adoption <span className="ml-3">🐾</span>
                    </h3>
                    <p className="text-2xl md:text-3xl font-bold text-[#0c3c6d] mb-6">
                        We Need Help. So Do They.
                    </p>
                    <p className="text-gray-600 mb-8 max-w-sm">
                        Adopt a pet and give it a home, it will be the love you learn unconditionally.
                    </p>
                    <div className="flex flex-col items-center sm:flex-row gap-4">
                        <Link href="/adopt" passHref>
                            <Link href="/" className="px-8 py-4 rounded-full bg-[#0c3c6d] text-white font-semibold transition-colors duration-300 hover:bg-[#092a4e]">
                                Explore Now
                            </Link >
                        </Link>
                        <Link href="/adoption-intro" passHref>
                            <Link href="/adopt"  className="flex items-center justify-center px-8 py-4 rounded-full text-gray-600 border-2 border-gray-400 transition-colors duration-300 hover:bg-gray-200">
                                View Intro
                                <PlayCircle className="ml-3 w-5 h-5" />
                            </Link >
                        </Link>
                    </div>
                </div>

                {/* Arrière-plan de la section adoption (forme et couleur) */}
                <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 bg-secondary-80 rounded-bl-[100px] lg:rounded-bl-[150px] z-0"></div>
                
                {/* Image de droite (patte de chien) */}
                <div className="relative flex-1 w-full h-80 lg:h-auto lg:min-h-full">
                    <Image
                        src="/imageUPl.png" // Chemin vers votre image locale
                        alt="Human hand holding a dog paw"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-br-3xl" // Pour faire correspondre le rayon de la bordure
                    />
                </div>
            </div>
        </div>
    );
};

export default PetAdoptionSection;