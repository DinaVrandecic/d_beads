import React from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <Link
      href={"/shop/" + category + "/" + urlNew}
      className="flex flex-col items-center bg-white w-fit h-fit m-[10px] pb-[20px] hover:bg-beige_text hover:cursor-pointer"
    >
      <div className="m-[20px]">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <p className="font-serif text-xl font-bold whitespace-break-spaces text-blue1">
        {capitalizeFirstLetter(title)}
      </p>
      <div className="font-inter text-xl font-semibold whitespace-break-spaces text-brown1">
        {price}
        <span>€</span>
      </div>
    </Link>
  );
};

export default Card;
