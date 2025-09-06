import CSHomeMobile from "@/components/CSHomeMobile";

import HomeCategory from "@/components/HomeCategory";
import PuppyGallery from "@/components/PuppyGallery";

import React from "react";

const Page = () => {
  return (
    <div >
      <div className="flex md:hidden">
        <CSHomeMobile />
      </div>
      <div className="hidden md:flex">
        <HomeCategory />
      </div>
<div>
 <PuppyGallery/>
 
</div>



    </div>
  );
};

export default Page;
