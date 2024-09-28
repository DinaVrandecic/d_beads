"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

interface CardProps {
  image: string;
  category: string;
  title: string;
  price: string;
  onAddToCart: () => void;
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Card: React.FC<CardProps> = ({
  image,
  category,
  title,
  price,
  onAddToCart,
}) => {
  const urlNew = title ? title.trim().replaceAll(" ", "-") : "";

  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of the scroll animation
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <Link
        href={"/shop/" + category + "/" + urlNew}
        className="group flex flex-col items-center bg-white w-fit h-fit m-[20px] pb-[20px] rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out duration-500 cursor-pointer transform hover:-translate-y-2"
      >
        <div className="relative m-[20px] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            style={{ width: "300px", height: "300px" }}
            className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2 rounded-lg"
          />
          <div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-20"></div>
        </div>
        <p className="font-serif text-xl font-bold text-blue1 tracking-wide group-hover:text-dark_blue transition-all duration-500 transform group-hover:translate-y-2 group-hover:opacity-100 opacity-90">
          {capitalizeFirstLetter(title)}
        </p>
        <div className="font-inter text-xl font-semibold text-brown1 mt-2 transition-transform duration-500 transform group-hover:scale-105 group-hover:text-dark_blue">
          {price}
          <span>€</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
