// src/components/CustomerPhotosSection.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

const customerPhotos = [
  "/customer2.png",
  "/customer1.png",
  "/customer3.png",
  "/customer4.png",
  "/customer5.png",
  "/customer6.png",
  "/customer1.png",
  "/customer2.png",
  "/customer3.png",
  "/customer4.png",
  "/customer5.png",
  "/customer6.png",
];

const CustomerPhotosSection: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-primary-80 mb-8 text-center">
        Our lovely customer
      </h2>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentPhotoIndex * (256 + 16)}px)`,
          }}
        >
          {customerPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-none w-64 h-64 rounded-xl overflow-hidden shadow-lg mx-2"
            >
              <Image
                src={photo}
                alt={`Customer photo ${index + 1}`}
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {customerPhotos.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-2 rounded-sm cursor-pointer transition-colors duration-200 ${
                index === currentPhotoIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerPhotosSection;
