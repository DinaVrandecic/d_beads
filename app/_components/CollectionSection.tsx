import React from "react";
import Collection from "./Collection";
import bracelet from "../../public/pictures/other_pictures/bracelet.jpg";
import phone_charm from "../../public/pictures/other_pictures/phone_charm.jpg";
import necklace from "../../public/pictures/other_pictures/necklace.jpg";
import Link from "next/link";

const CollectionSection = () => (
  <div className="w-full">
    <div className="flex flex-col items-center lg:flex-row justify-center gap-[50px] md:gap-[100px] mt-20 mb-2 mr-[30px] p-[15px] font-serif rounded-sm">
      <Collection heroImage={phone_charm} button_text="charm" />
      <Collection heroImage={bracelet} button_text="bracelet" />
      <Collection heroImage={necklace} button_text="necklace" />
    </div>
    <div className="flex justify-center mr-[30px]">
      <Link
        href={"/shop/" + "all"}
        className=" font-serif text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 p-[15px] mt-[10px] ml-[30px] rounded-sm"
      >
        SHOP ALL
      </Link>
    </div>
  </div>
);

export default CollectionSection;
