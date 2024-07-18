import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CollectionProps {
  heroImage: StaticImageData;
  button_text: string;
}

const Collection: React.FC<CollectionProps> = ({ heroImage, button_text }) => (
  <div>
    <Link href={"/shop/" + button_text} className="flex flex-col items-center">
      <div className="relative">
        <Image src={heroImage} alt="Hero Image" width={400} height={400} />
        <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
      </div>
      <button className="text-dark_blue bg-peach1 hover:bg-dark_blue hover:text-peach1 p-[7px] m-[10px] rounded-sm font-serif">
        {button_text.toUpperCase() + "S"}{" "}
      </button>
    </Link>
  </div>
);

export default Collection;
