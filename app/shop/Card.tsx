import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  category: string;
  title: string;
  price: string;
  onAddToCart: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  category,
  title,
  price,
  onAddToCart,
}) => {
  const urlNew = title.trim().replaceAll(" ", "-");

  return (
    <Link
      href={"/shop/" + category + "/" + urlNew}
      className="flex flex-col items-center bg-white w-fit h-fit m-[10px] pb-[20px] hover:bg-beige_text hover:cursor-pointer"
    >
      <div className="m-[20px]">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <p className="font-serif text-xl font-bold whitespace-break-spaces text-blue1">
        {title}
      </p>
      <p className="font-serif text-xl font-bold whitespace-break-spaces text-brown1">
        {price}
      </p>
    </Link>
  );
};

export default Card;
