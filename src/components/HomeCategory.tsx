"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6">
      <div className="relative rounded-3xl overflow-hidden h-[220px] md:h-[360px] bg-[#FAEBD7]">
        {/* Fond bleu (SVG) à droite */}
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
            fill="#172554"
          />
        </svg>

        {/* Image des chiens à gauche, au-dessus du fond crème */}
        <div className="absolute left-0 bottom-0 z-20 w-[60%] md:w-[50%]">
          <Image
            src="/imageCategoHome.png"
            alt="Groupe de chiens de différentes races"
            width={1000}
            height={400}
            className="object-cover"
            priority
          />
        </div>

        {/* Texte et boutons à droite, sur le fond bleu */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 w-[45%] md:w-[45%] text-[#EBE7DF]">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
            One More Friend
          </h1>

          <h2 className="text-lg md:text-2xl font-extrabold mt-1">
            Thousands More Fun!
          </h2>

          <p className="mt-3 md:mt-4 text-[11px] md:text-sm text-[#EBE7DF] max-w-[520px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="mt-4 md:mt-6 flex items-center gap-4">
            {/* Bouton contour */}
            <Link
              href="#intro"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#EBE7DF] px-5 md:px-6 py-2 bg-transparent text-[#EBE7DF] text-sm md:text-base font-medium hover:bg-[#EBE7DF]/20 transition"
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
              className="inline-flex items-center rounded-full bg-[#EBE7DF] text-[#172554] px-5 md:px-6 py-2 text-sm md:text-base font-medium hover:bg-white transition"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}