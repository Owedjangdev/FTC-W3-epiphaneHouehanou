
import { PetCardProps } from "@/types";
import Image from "next/image";

export const PetCard = ({ imageSrc, petName, petId, gender, age, price }: PetCardProps) => {
  return (
    <div className="bg-white shadow-2xl w-[185px] mx-auto h-auto md:w-[264px] ">
   
        <Image
          src={imageSrc}
          alt={petName}
        
          width={264}
          height={264}
          className="rounded-lg"
        />
     
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 ">{petId} - {petName}</h3>
        <p className="text-sm text-gray-600">
          <span>{gender}</span> &bull; <span>{age}</span>
        </p>
        <p className="font-bold text-gray-900 mt-2">{price}</p>
      </div>
    </div>
  );
};
