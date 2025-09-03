import Image from "next/image";
import { pets } from "../../data";
import Link from "next/link";
import {  ChevronRight } from "lucide-react";

// Composant OurPets (direct sans PetCard)
export default function OurPets() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h2 className="text-neutral-100 font-inter mb-1">What's new?</h2>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-80">
            Take A Look At Some Of Our Pets
          </h1>
        </div>
        <Link
          href="/"
          className="mt-4 md:mt-0 hidden   md:flex items-center gap-2 px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-medium transition-colors hover:bg-gray-100"
        >
          View more 
           <span><ChevronRight size={18} /></span>
        </Link>
      </div>

      {/* Grille des cartes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-lg w-full shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <Image
              src={pet.image}
              alt={pet.name}
              width={264}
              height={264}
              className="rounded-lg "
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-neutral-80">
                {pet.id} - {pet.name}
              </h3>
              <p className="text-sm text-neutral-20">
                <span>{pet.gender}</span> &bull; <span>{pet.age}</span>
              </p>
              <p className="font-bold text-neutral-80 mt-2">{pet.price}</p>
            </div>
          </div>
        ))}

         
      </div>

    <Link
          href="/"
          className="mt-4   md:hidden  w-full flex items-center justify-center gap-2 px-6 py-2 border border-gray-900 text-gray-900 rounded-full font-medium transition-colors hover:bg-gray-100"
        >
          View more 
           <span><ChevronRight size={18} /></span>
        </Link>
    </div>
  );
}
