"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import Image from "next/image";
import logoImage from "../public/pictures/logo.png";
import Search from "../components/Search";
import Dropdown from "./DropdownButton";

interface NavbarProps {
  pages: Record<string, `/${string}`>;
}
const baseClass =
  "uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue  hover:bg-dark_blue hover:text-peach1";

const Navbar: FC<NavbarProps> = ({ pages }) => {
  const pathName = usePathname();

  return (
    <div className=" justify-between sticky z-10 top-0 hidden md:flex lg:flexg:w-1/2l bg-nf_blue mb-15">
      <div className="mx-[10px] lg:mx-[30px] flex justify-center items-center">
        <Link legacyBehavior href="/">
          <a>
            <Image
              src={logoImage}
              alt="Hero Image"
              width={120}
              height={120}
              className="h-auto"
            />
          </a>
        </Link>
      </div>
      <Search></Search>
      <nav className="flex items-center justify-end lg:px-[80px] py-[40px]">
        <ul className="flex gap-2">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              {name === "shop" ? (
                <>
                  <Dropdown link={path} />
                </>
              ) : (
                <Link href={path}>
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
      </nav>
    </div>
  );
};
export default Navbar;
