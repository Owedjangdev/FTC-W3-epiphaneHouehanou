
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Share2,
  MessageSquareMore,
} from 'lucide-react';
import { productData } from '../../data';






const ProductDetailsSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleNext = (): void=> {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % productData.images.length
    );
  };

  const handlePrevious = (): void => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + productData.images.length) %
        productData.images.length
    );
  };
  return (
    <section className="bg-white py-10 shadow-lg  rounded-[20px]   border border-gray-200 px-10">
      

      <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
        {/* Colonne gauche : Galerie */}
        <div className="flex flex-col items-center lg:w-3/5">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg mb-4">
            <Image
              src={productData.images[currentImageIndex]}
              alt={productData.name}
             width={560}
                height={476}
              className="object-cover w-full h-full"
            />
            {/* Flèches navigation */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 hover:bg-white transition-colors"
            >
              <ChevronLeft color='white'  size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2  bg-white/50  rounded-full  p-2 hover:bg-white transition-colors"
            >
              <ChevronRight  color='white'   size={24} />
            </button>
          </div>

          {/* Miniatures */}
          <div className="flex gap-4 overflow-x-auto w-full justify-center lg:justify-start">
            {productData.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-94 md:h-15    overflow-hidden cursor-pointer shadow-xl border border-gray-300 ${
                  currentImageIndex === index
                    ? 'border-[#002444]'
                    : 'border-transparent'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index}`}
                   width={256}
                height={256}
                className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Badges + Partage */}

          
          <div className="flex flex-col  gap-4 mt-8 w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 p-2 bg-[#FCEED5] rounded-xl text-xs font-semibold">
                <Image
                  src="/health-guarantee.png"
                  alt="Health Guarantee"
                  width={24}
                  height={24}
                />
                100% health guarantee for pets
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#FCEED5] rounded-xl text-xs font-semibold">
                <Image
                  src="/id-guarantee.png"
                  alt="ID Guarantee"
                  width={24}
                  height={24}
                />
                100% guarantee of pet identification
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <div className="text-gray-600 font-semibold flex  items-center justify-center gap-2">
                <Share2  size={15}/>Share:
                </div>
              <div className="flex gap-2">
                <Link href="#" aria-label="Share on Facebook">
                  <Facebook size={15} />
                </Link>
                <Link href="#" aria-label="Share on Twitter">
                  <Twitter size={15}/>
                </Link>
                <Link href="#" aria-label="Share on Instagram">
                  <Instagram size={15}  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite : Détails */}

        {/* Fil d'Ariane */}
      
        <div className="lg:w-2/5 mt-8 lg:mt-0">

        <nav className="font-medium text-neutral-20  flex  text-xs  items-center  gap-2 mb-4 md:text-sm">
        <Link href="/">Home</Link><ChevronRight size={16}/>  
        <Link href="/dog">Dog</Link><ChevronRight size={16}/>{' '}
        <Link href="#">Lodge Dog</Link><ChevronRight size={16}/> Shiba Inu Sepia
      </nav>
<h2 className="font-medium text-neutral-200 mb-2 text-sm">
            {productData.sku}
          </h2>
          <h1 className="text-2xl font-bold text-neutral-700">
            {productData.name}
          </h1>
          <p className="text-xl font-bold  text-neutral-700 mb-4">
            {productData.price}
          </p>
          <div className="flex gap-4 items-center mb-8 ">
            <Link
              href="#"
              className="bg-primary-80 text-white w-[138px]  hover:bg-blue-950 h-[44px]  rounded-full font-semibold hover:bg-primary-90 transition-colors flex items-center justify-center gap-2"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className=" sm:w-[217px] w-[233px] h-[48px]    sm:h-[44px]  border  font-semibold hover:bg-primary-90 transition-colors flex items-center rounded-[57px] justify-center gap-2"
                 >
              <MessageSquareMore  size={27}/> Chat with Hotline
            </Link>
          </div>
         
            <div className="space-y-2">
              {productData.details.map((item, index) => (
                <div
                  key={index}
                  className="flex  justify-between  items-center text-sm border-b border-gray-100 py-2"
                >
                  <span className="font-medium text-neutral-20 ">
                    {item.label}
                  </span>
                  <span className="font-medium   text-neutral-20">
                    :  {""} {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default ProductDetailsSection;
