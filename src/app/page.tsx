import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import PetCard from "@/components/OurPet";
import OurProducts from "@/components/OurProduct";
import PetAdoptionSection from "@/components/PetAdoptionSection";
import UPL from "@/components/UPK";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="bg-secondary">
        {/* Grande forme de fond en beige (le cercle coupé) */}
        <div className=" relative w-full overflow-hidden  px-5 md:px-[10%]"></div>

        {/* Contenu principal */}
        <div className="relative   flex flex-col md:flex-row  md:space-x-16 items-center justify-between h-full px-6 md:px-45 py-16">
          {/* Partie texte et boutons */}
          <div>
            <div className="flex flex-row gap-9">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-80 mb-4">
                <span className="w-16 h-16  bg-secondary-80  rotate-60 rounded-full ">
                  O
                </span>
                ne More Friend
                <br />
                Thousands More Fun!
              </h1>

              <div className=" w-4 h-4 bg-blue-900 bottom-2 transform rotate-45"></div>
            </div>
            <p className="text-gray-700 text-sm mb-8">
              Having a pet means you have more joy, a new friend,a happy person{" "}
              <br /> who will always be with you to have fun We have 200+
              different pets <br /> that can meet your needs!
            </p>
            <div className="flex flex-row  gap-2 ">
              <Link
                href="/"
                className="inline-flex items-center gap-2 justify-center px-6 py-3 border border-gray-900 text-gray-900 rounded-full font-medium transition duration-300 hover:bg-gray-100"
              >
                View Intro{" "}
                <Image
                  src="/Videoicon.png"
                  alt="Smiling person holding a corgi"
                  width={18}
                  height={18}
                />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-full font-medium transition duration-300 hover:bg-blue-800"
              >
                Explore Now
              </Link>
            </div>
          </div>

          {/* Partie image */}

          <div className=" flex relative mt-12 md:mt-0">
            <div className="relative w-full h-full">
              {/* L'image de la personne avec le chien */}
              <Image
                src="/homePhoto.png"
                alt="Smiling person holding a corgi"
                width={1887}
                height={1258}
                className="relative z-30 w-full h-full max-h-[400px]"
              />

              {/* Forme bleue (en bas) */}
              {/* Forme bleue (en bas) */}
              <div className="absolute bottom-12 left-[5%] w-[60%] h-[80%] bg-blue-900 rounded-2xl rotate-16 z-10"></div>

              {/* Forme rouge (au-dessus) */}
              <div className="absolute bottom-[20%] left-[9%] w-[60%] h-[80%]  rounded-2xl bg-secondary-80 z-20 rotate-35"></div>
            </div>
          </div>
        </div>
      </div>

      <PetCard />
      <HeroSection />

      <OurProducts />
      <PetAdoptionSection />
      <UPL />

      <Footer />
    </div>
  );
}
