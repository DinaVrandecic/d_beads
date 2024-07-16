import Image from "next/image";
import Link from "next/link";
import logoImage from "../public/pictures/logo.png";

export default function Footer() {
  return (
    <div className="bg-nf_blue py-8 mt-20 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="p-8 text-center md:text-left md:w-1/3">
          <div className="flex justify-center md:justify-start">
            <Link legacyBehavior href="/">
              <a>
                <Image
                  src={logoImage}
                  alt="logo Image"
                  width={150}
                  height={150}
                />
              </a>
            </Link>
          </div>
          <p className="font-serif text-peach1 mt-2 mb-3">copyright © 2024</p>
          <p className="text-dark_blue font-bold font-serif">
            Your Ultimate Jewelry Destination
          </p>
        </div>

        <div className="p-8 font-serif text-blue1 md:w-1/3 text-center">
          <h1 className="font-bold mb-4">SITEMAP</h1>
          <Link legacyBehavior href="/shop/all">
            <a className="block mb-2 hover:text-peach1">Shop</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="block mb-2 hover:text-peach1">About Us</a>
          </Link>
          <Link legacyBehavior href="/cart">
            <a className="block mb-2 hover:text-peach1">Shopping cart</a>
          </Link>
          <Link legacyBehavior href="/login">
            <a className="block hover:text-peach1">Register/Log in</a>
          </Link>
        </div>

        <div className="p-8 font-serif text-blue1 md:w-1/3 text-center">
          <p className="font-bold mb-4"> CONTACT </p>
          <p></p>
          <p className=" text-center"> +385 007 700 </p>
          <p className=" text-center"> elina@elina.hr </p>
          <p className=" text-center"> Ulica R.Boskovica </p>
          <p className=" text-center"> 21000, Split, Croatia </p>
        </div>
      </div>
    </div>
  );
}
