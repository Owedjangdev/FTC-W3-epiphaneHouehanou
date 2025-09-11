"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import HeroContentCard from "./ui/HeroContentCard";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-7xl  rounded-b-[40px]  mx-auto px-4 md:px-8 lg:pb-70">
      <div className="absolute top-4 left-8 text-[#6B7280] flex space-x-2 items-center z-40">
        <span className="text-sm font-medium">Home</span>
        <ChevronRight size={18} />
        <span className="text-sm font-medium">Dog</span>
        <ChevronRight size={18} />
        <span className="text-sm font-medium">Small Dog</span>
      </div>
      <div className="absolute hidden md:block  p-14 w-1/2 left-0 ">
        <svg
          className="absolute left-0 top-20 w-full"
          width="701"
          height="315"
          viewBox="0 0 701 315"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="41.4933"
            y="-34.2795"
            width="787.54"
            height="787.54"
            rx="99"
            transform="rotate(28.2512 41.4933 -34.2795)"
            fill="#002A48"
          />
        </svg>

        <Image
          src="/categoryImage.png"
          alt="Groupe de chiens"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="absolute hidden md:block z-10   p-14 lg:w-1/3 right-0 ">
        <svg
          className="absolute z-10 -right-64 md:-right-32 lg:right-0 top-0"
          width="642"
          height="378"
          viewBox="0 0 642 378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="238.67"
            y="-360"
            width="782.292"
            height="635"
            rx="99"
            transform="rotate(25.23 238.67 -360)"
            fill="#FCEED5"
          />
        </svg>

        <div className="absolute  right-14 md:right-28 top-1 md:top-8 lg:right-8 z-50 hidden md:flex     flex-col space-y-2 justify-center items-center">
          <span className="text-center md:text-sm lg:text-body-bold-36 text-primary-dark80">
            One More Friend
          </span>

          <span className="text-center  text-body-bold-24 text-primary-dark80">
            Thousand More Fun!
          </span>

          <div className="   text-center lg:hidden text-neutral-80 text-body-medium-12">
            c a pet means you have more joy, a new friend, a happy person who
            will always be with you to have fun
          </div>
          
            Having a pet means you have more joy, a new friend, a happy
            person who will always be with you to have fun. We have <br /> 200+
            different pets that can meet your needs!
         
          <div className="flex  sm:flex-row gap-6 justify-center  py-5 ">
            <button className="inline-flex items-center gap-2 justify-center px-3 md:px-5 py-3 border border-gray-900 text-gray-900 rounded-full font-medium transition duration-300 hover:bg-gray-100 whitespace-nowrap">
              View Intro
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#003459" />
                <path
                  d="M13.3333 10L7.5 13.6603L7.5 6.33975L13.3333 10Z"
                  fill="white"
                />
              </svg>
            </button>

            <button className="inline-flex items-center justify-center px-3 md:px-5 py-3 bg-blue-900 text-white rounded-full font-medium transition duration-300 hover:bg-blue-800 whitespace-nowrap">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
