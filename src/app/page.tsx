import Image from "next/image";
import Footer from "@/components/Footer";
import OurPets from "@/components/OurPet";
import OurProducts from "@/components/OurProduct";
import PetAdoptionSection from "@/components/PetAdoptionSection";
import UPK from "@/components/UPK";

import NavBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import HeroSectionp from "@/components/HeroSection1";

export default function Home() {
  return (
    <div className="w-full min-h-screen  items-center ">
      <NavBar />

      <main>
        <HeroSectionp />

        <OurPets />

        <HeroSection />

        <OurProducts />

        <PetAdoptionSection />

        <UPK />
      </main>

      <Footer />
    </div>
  );
}
