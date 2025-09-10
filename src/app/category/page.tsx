import CSHomeMobile from "@/components/CSHomeMobile";
import Footer from "@/components/Footer";

import HomeCategory from "@/components/HomeCategory";
import PuppyGalleryMoblie from "@/components/PuppyGalleryMoblie";
import PuppyGallery from "@/components/PuppyGallery";

import React from "react";

const Page = () => {
  return (
    <div  className=" py-10 ">
      <div className="flex md:hidden">
        <CSHomeMobile />
      </div>
      <div className="hidden sm:flex py-10 ">
        <HomeCategory />
      </div>
      <div className="block md:hidden">
        <PuppyGalleryMoblie />
      </div>

      <div className="hidden md:block py-6">
        <PuppyGallery />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
