import React from "react";
import Image from "next/image";
import { Chiot } from "@/types";

interface PuppyCardProps {
  puppy: Chiot;
}

const PuppyCard: React.FC<PuppyCardProps> = ({ puppy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative w-full h-64">
        <Image
          src={puppy.imageUrl}
          alt={puppy.nom}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-900">{puppy.nom}</h3>
        <p className="text-sm text-gray-600">
          {puppy.race} • {puppy.age} • {puppy.sexe}
        </p>
        <p className="text-lg font-semibold mt-2 text-primary-80">
          {puppy.prix} €
        </p>
      </div>
    </div>
  );
};

export default PuppyCard;
