import React from "react";
import Collection from "./Collection";
import heroImage1 from "../../public/pictures/ring.png";
import heroImage2 from "../../public/pictures/earring.png";
import heroImage3 from "../../public/pictures/chains.png";
import Link from "next/link";

const CollectionSection = () => (
  <div className="w-full">
    <div className="flex flex-col items-center lg:flex-row justify-center gap-[50px] md:gap-[100px] mt-20 mb-2 mr-[30px] p-[15px] font-serif rounded-sm">
      <Collection heroImage={heroImage1} button_text="ring" />
      <Collection heroImage={heroImage2} button_text="earring" />
      <Collection heroImage={heroImage3} button_text="necklace" />
    </div>
    <div className="flex justify-center mr-[30px]">
      <Link href={"/shop/" + "all"} className=" font-serif text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 p-[15px] m-[10px] rounded-sm">
        SHOP ALL
      </Link>
    </div>
  </div>
);

export default CollectionSection;
