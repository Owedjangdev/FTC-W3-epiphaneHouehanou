"use client";

import Image from "next/image";

import Link from "next/link";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="mt-8 bg-white max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="hidden md:grid md:grid-cols-2 items-center bg-primary overflow-hidden rounded-[20px] relative">
        <div className="flex justify-center items-end relative overflow-hidden">
          <div className="absolute h-full w-full z-0 -bottom-[180px] -left-[50px] rounded-tl-[99px] rotate-[28.25deg] bg-primary-80" />
          <Image
            src="/heroPhoto.png"
            alt="Woman with dog"
            className="object-contain rounded-xl w-[513px] h-[342px] z-20"
           width={513}
            height={342}
            priority
          />
        </div>

        <div className="text-primary-80 relative h-full flex justify-end">
          <div className="h-full w-full bg-secondary absolute z-10 rotate-[25.23deg] rounded-bl-[99px] -top-[50px] -left-[100px]" />
          <div className="h-full w-[50%] bg-secondary absolute ml-[500px] z-20" />
          <div className="relative p-6 z-20 xl:w-[70%]">
            <h1 className="text-end text-[52px] font-[800] leading-[68px]">
              One More Friend
            </h1>
            <h2 className="text-end text-[36px] font-[700] mb-4">
              Thousands More Fun!
            </h2>
            <p className="text-secondary-300 text-end text-[15px] font-[500] mb-6">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button className="border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition flex items-center">
                View Intro <PlayCircle className="ml-2 h-6 w-6" />
              </button>
              <Link
                href="#"
                className="bg-primary text-white h-[48px] flex items-center px-4 py-2 rounded-full hover:bg-secondary hover:border hover:border-primary hover:text-black transition"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / SM */}
      <div className="md:hidden flex flex-col items-center bg-secondary overflow-hidden rounded-[20px] relative">
        <div className="relative z-20 px-4 text-center">
          <h1 className="text-[30px] font-[700] leading-[50px]">
            One More Friend
          </h1>
          <h2 className="text-[20px] font-[700] mb-4">Thousands More Fun!</h2>
          <p className="text-secondary-300 text-[11px] font-[500] mb-6">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition flex items-center">
              View Intro <PlayCircle className="ml-2 h-6 w-6" />
            </button>
            <Link
              href="#"
              className="bg-primary text-white h-[48px] flex items-center px-4 py-2 rounded-full hover:bg-secondary hover:border hover:border-primary hover:text-black transition"
            >
              Explore Now
            </Link>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-end bg-primary z-0">
          <div className="absolute h-[50%] w-full z-10 -top-[70px] rounded-br-[75px] rotate-[11.41deg] bg-secondary" />
          <Image
            src="/heroPhoto.png"
            alt="Woman with dog"
            className="object-contain rounded-xl w-full max-w-[500px] z-30"
           width={500}
            height={500}
            priority
          />
          <div className="absolute h-full w-full z-0 -bottom-[110px] rounded-tl-[59px] rotate-[20.25deg] bg-primary-80" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
