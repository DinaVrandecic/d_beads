"use client";
import React, { useEffect } from "react";
import Collection from "./Collection";
import bracelet from "../../public/pictures/other_pictures/bracelet.jpg";
import phone_charm from "../../public/pictures/other_pictures/phone_charm.jpg";
import necklace from "../../public/pictures/other_pictures/necklace.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const CollectionSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col items-center lg:flex-row justify-center gap-[50px] md:gap-[100px] mt-20 mb-2 mr-[30px] p-[15px] font-serif rounded-sm">
        <Collection heroImage={phone_charm} button_text="charm" />
        <Collection heroImage={bracelet} button_text="bracelet" />
        <Collection heroImage={necklace} button_text="necklace" />
      </div>
      <div className="flex justify-center mr-[30px]">
        <Link legacyBehavior href="/shop/all">
          <a className="bg-dark_blue font-serif hover:bg-peach1 text-peach1 hover:text-dark_blue py-2 px-4 mt-3 mb-3 text-serif rounded-sm shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
            SHOP ALL
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CollectionSection;
