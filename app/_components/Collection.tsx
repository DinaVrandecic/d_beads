"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CollectionProps {
  heroImage: StaticImageData;
  button_text: string;
}

const Collection: React.FC<CollectionProps> = ({ heroImage, button_text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    setIsClicked(true);

    setTimeout(() => {
      window.location.href = `/shop/${button_text}`;
    }, 300);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col items-center cursor-pointer"
    >
      <div className="relative group">
        <Image
          src={heroImage}
          alt="Hero Image"
          width={400}
          height={400}
          className={`shadow-top-right transition-transform duration-300 group-hover:translate-y-2 group-hover:-translate-x-2 ${
            isClicked ? "translate-y-2 -translate-x-2" : ""
          }`}
        />
        <div
          className={`absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1 transition-all duration-300 group-hover:-top-[40px] group-hover:left-[40px] ${
            isClicked ? "-top-[40px] left-[40px]" : ""
          }`}
        ></div>
      </div>
      <button className="text-dark_blue bg-peach1 transition duration-300 ease-in-out hover:bg-dark_blue hover:text-peach1 p-[7px] mt-[10px] ml-[30px] rounded-sm font-serif">
        {button_text.toUpperCase() + "S"}
      </button>
    </div>
  );
};

export default Collection;
