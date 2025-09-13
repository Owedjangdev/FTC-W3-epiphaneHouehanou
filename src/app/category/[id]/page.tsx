"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ChevronLeft, MessageSquareMore } from "lucide-react";

import { ProductAbout } from "@/types";
import { productsData } from "@/data/ProductData";
import CustomerPhotosSection from "@/components/CustomerPhotosSection";
import SeeMorePuppiesSection from "@/components/SeeMorePuppiesSection";
import Footer from "@/components/Footer";

// Props pour récupérer l'ID dans l'URL
interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailsSection: React.FC<ProductPageProps> = ({ params }) => {
  // Déballez la promesse "params" avec React.use()
  const unwrappedParams = React.use(params);
  const productId = unwrappedParams.id;

  // Récupération du produit
  const product: ProductAbout | undefined = productsData.find(
    (p) => p.id === productId
  );

  if (!product) {
    notFound(); // gère le produit non trouvé
  }

  // Galerie d’images
  const Gallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

    const handleNext = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.images.length
      );
    };

    const handlePrevious = () => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + product.images.length) % product.images.length
      );
    };

    return (
      <div className="flex flex-col items-center lg:w-3/5">
        {/* Image principale */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg mb-4">
          <Image
            src={product.images[currentImageIndex]}
            alt={product.name}
            width={560}
            height={476}
            className="object-cover w-full h-full"
          />

          {/* Flèche gauche */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2 hover:bg-black/60 transition"
          >
            <ChevronLeft color="white" size={24} />
          </button>

          {/* Flèche droite */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2 hover:bg-black/60 transition"
          >
            <ChevronRight color="white" size={24} />
          </button>
        </div>

        {/* Miniatures */}
        <div className="flex gap-4 overflow-x-auto w-full justify-center lg:justify-start">
          {product.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative   w-full h-full lg:w-24 lg:h-20  rounded-lg overflow-hidden cursor-pointer shadow-md border ${
                currentImageIndex === index
                  ? "border-[#002444]"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                width={96}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-10 shadow-lg rounded-[20px] border border-gray-200 px-6 md:px-10">
      <div className="flex flex-col lg:flex-row gap-8 w-full mx-auto">
        {/* Colonne gauche : Galerie */}
        <Gallery />

        {/* Colonne droite : Détails */}
        <div className="lg:w-2/5 mt-8 lg:mt-0">
          {/* Fil d’ariane */}
          <nav className="font-medium text-gray-500 flex text-xs items-center gap-2 mb-4 md:text-sm">
            <Link href="/">Home</Link>
            <ChevronRight size={16} />
            <Link href="/category">Category</Link>
            <ChevronRight size={16} />
            <span className="text-gray-800">{product.name}</span>
          </nav>

          {/* SKU */}
          <h2 className="font-medium text-gray-400 mb-2 text-sm">
            {product.sku}
          </h2>

          {/* Nom du produit */}
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

          {/* Prix */}
          <p className="text-xl font-bold text-gray-900 mb-4">
            {product.price}
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <Link
              href="#"
              className="bg-[#002444] text-white px-6 h-[44px] rounded-full font-semibold transition hover:bg-[#003459] flex items-center justify-center"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className="px-6 h-[44px] border border-[#002444] text-[#002444] font-semibold rounded-full flex items-center gap-2 hover:bg-gray-100"
            >
              <MessageSquareMore size={22} /> Chat with Hotline
            </Link>
          </div>

          {/* Détails */}
          <div className="space-y-2">
            {product.details.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm border-b border-gray-200 py-2"
              >
                <span className="font-medium text-gray-600">{item.label}</span>
                <span className="text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CustomerPhotosSection />
      <SeeMorePuppiesSection />

      <Footer />
    </section>
  );
};

export default ProductDetailsSection;
