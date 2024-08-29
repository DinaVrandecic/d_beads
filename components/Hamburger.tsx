"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import Image from "next/image";
import logoImage from "../public/pictures/logo.png";
import React, { useState } from "react";
import DropdownPhone from "./DropdownPhone";

interface HamburgerProps {
  pages: Record<string, `/${string}`>;
}
const baseClass =
  "uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue hover:bg-dark_blue hover:text-peach1";

const Hamburger: FC<HamburgerProps> = ({ pages }) => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hover:cursor-pointer md:hidden lg:hidden sticky z-10 top-0">
      <div className="flex items-center py-[10px] bg-nf_blue">
        <div
          onClick={toggleMenu}
          className="p-5 w-10 h-10 bg-nf_blue flex flex-col justify-around"
        >
          <div className="w-5 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute transform transition duration-500 ease-in-out w-6 h-1 bg-brown1 rounded-sm ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute transform transition duration-500 ease-in-out w-6 h-1 bg-brown1 rounded-sm ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute transform transition duration-500 ease-in-out w-6 h-1 bg-brown1 rounded-sm ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </div>
        <div className="ml-[10px] mt-[12px] flex justify-center items-center">
          <Image src={logoImage} alt="Hero Image" width={100} height={100} />
        </div>
      </div>

      <div
        className={`fixed w-full left-0 bg-nf_blue text-dark_blue h-[calc(100vh-50px)] z-10 transform transition-transform duration-700 delay-150 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center my-[20px] gap-[30px]">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              {name === "shop" ? (
                <>
                  <DropdownPhone link={path} toggleMenu={toggleMenu} />
                </>
              ) : (
                <Link href={path} onClick={toggleMenu}>
                  <span
                    className={cn(baseClass, {
                      "bg-dark_blue text-peach1": path === pathName,
                    })}
                  >
                    {name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Hamburger;
