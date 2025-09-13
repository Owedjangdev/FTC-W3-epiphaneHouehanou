
import Footer from "@/components/Footer";
import HeroSection from "@/components/ladingPage/HeroSection";
import HeroSectionp from "@/components/ladingPage/HeroSection1";
import NavBar from "@/components/ladingPage/Navbar";

import OurPets from "@/components/ladingPage/OurPet";

import OurProducts from "@/components/ladingPage/OurProduct";
import PetAdoptionSection from "@/components/ladingPage/PetAdoptionSection";
import UPK from "@/components/ladingPage/UPK";

export default function Home() {
  return (
    <div className="w-full min-h-screen  items-center ">
      <NavBar />

      <main className="py-8">
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
