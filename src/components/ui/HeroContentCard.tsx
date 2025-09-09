

import Link from "next/link";
import { PlayCircle } from 'lucide-react';

const HeroContentCard: React.FC = () => {
  return (
    <div className="text-white text-right">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
        One More Friend
      </h1>
      <h2 className="text-xl md:text-2xl font-extrabold mb-4">
        Thousands More Fun!
      </h2>
      <p className="text-sm md:text-sm max-w-[400px] ml-auto mb-6">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>

      <div className="flex justify-end items-center gap-4">
        {/* Bouton "View Intro" */}
        <Link
          href="#intro"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-2 text-sm md:text-base font-medium transition duration-300 hover:bg-white hover:text-[#003459]"
        >
          View Intro
         <PlayCircle className="ml-1 w-5 h-5" />
        </Link>
        {/* Bouton "Explore Now" */}
        <Link
          href="#explore"
          className="rounded-full bg-white text-[#003459] px-7 py-2 text-sm md:text-base font-medium transition duration-300 hover:bg-gray-100"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default HeroContentCard;