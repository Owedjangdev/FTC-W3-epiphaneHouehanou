// src/app/not-found.tsx
import Link from 'next/link';
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-10 text-[#003459] p-8 text-center">
      <h1 className="text-9xl font-extrabold text-[#003459] opacity-20">404</h1>
      <h2 className="mt-8 text-4xl md:text-5xl font-bold text-[#003459] mb-4">
        Cette page s'est enfuie ! 🐾
      </h2>
      <p className="text-lg md:text-xl text-neutral-60 mb-8 max-w-md">
        On dirait que le lien que vous avez suivi n'existe pas. Ne vous inquiétez pas, il arrive même aux meilleurs chiots de se perdre !
      </p>
      
      <Link 
        href="/"
        className="flex items-center justify-center px-6 py-3 bg-[#003459] text-white rounded-full font-medium transition-colors duration-300 hover:bg-[#092a4e] shadow-lg"
      >
        <Home size={20} className="mr-2" />
        Retourner à la maison
      </Link>
    </div>
  );
}