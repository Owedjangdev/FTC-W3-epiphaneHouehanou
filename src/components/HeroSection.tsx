// app/components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
      <div className="relative rounded-3xl overflow-hidden h-[220px] md:h-[360px] bg-[#072A3B]">
        {/* Partie crème à droite (SVG en arrière-plan) */}
        <svg
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M1440 0
              H720
              C540 0, 540 360, 720 360
              H1440
              Z
            "
            fill="#F6E9D3"
          />
        </svg>

        {/* Image à gauche, au-dessus du bleu */}
        <div className="absolute left-4 md:left-8 bottom-0 z-20">
          <div className="relative w-[260px] h-[260px] md:w-[480px] md:h-[480px]">
            <Image
              src="/heroPhoto.png"
              alt="Femme levant son chien"
              width={1800}
              height={800}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Texte + boutons à droite */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 w-[58%] md:w-[45%] text-[#072A3B]">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
            One More Friend
          </h1>

          <h2 className="text-lg md:text-2xl font-extrabold mt-1">
            Thousands More Fun!   
          </h2>

         <h2>gang</h2>
          <p className="mt-3 md:mt-4 text-[11px] md:text-sm text-[#545B61] max-w-[520px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="mt-4 md:mt-6 flex items-center gap-4">
            {/* Bouton contour */}
            <Link
              href="#intro"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#072A3B] px-5 md:px-6 py-2 bg-white text-[#072A3B] text-sm md:text-base font-medium hover:bg-[#072A3B]/5 transition"
            >
              <span>View Intro</span>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-current">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M4 3.2v5.6L9 6 4 3.2z" />
                </svg>
              </span>
            </Link>

            {/* Bouton plein */}
            <Link
              href="#explore"
              className="inline-flex items-center rounded-full bg-[#072A3B] text-white px-5 md:px-6 py-2 text-sm md:text-base font-medium hover:bg-[#05232b] transition"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
