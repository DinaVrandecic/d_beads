"use client"
import { FC } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {cn} from "../lib/utils";
import Image from "next/image";
import logoImage  from "../public/pictures/logo.png";
import Search from "../components/Search"
import Dropdown from "./DropdownButton"

interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}
const baseClass =
"uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue  hover:bg-dark_blue hover:text-peach1";

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathName = usePathname();

  return ( 
    <div className=" justify-between sticky z-10 top-0 hidden md:flex lg:flexg:w-1/2l bg-nf_blue mb-15">
      <div className="mx-[10px] lg:mx-[30px] mt-[30px]">
        <Link legacyBehavior href="/">
        <a>
          <Image
          src={logoImage}
          alt="Hero Image"
          width={150} 
          height={150} 
         />
        </a>
        </Link>
      </div>
      <Search></Search>
      <nav className="flex items-center justify-end lg:px-[80px] py-[40px]">
        <ul className="flex gap-2">
        {Object.entries(pages).map(([name, path]) => (
  <li key={name}>
    {name === 'shop' ? (
      <>
        {/* <Link href={path}>
          <span
            className={cn(baseClass, {
              "bg-dark_blue text-peach1 pointer-events-none":
                path === pathName,
            })}
          >
            {name}
          </span>
        </Link> */}
        <Dropdown link={path}/>
      </>
    ) : (
      <Link href={path}>
        <span
          className={cn(baseClass, {
            "bg-dark_blue text-peach1":
              path === pathName,
          })}
        >
          {name}
        </span>
      </Link>
    )}
  </li>
))}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;