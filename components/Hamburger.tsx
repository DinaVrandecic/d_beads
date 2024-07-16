"use client"
import { FC } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {cn} from "../lib/utils";
import Image from "next/image";
import logoImage  from "../public/pictures/logo.png";
import React, { useState } from "react";
import DropdownPhone from "./DropdownPhone"


interface HamburgerProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}
const baseClass =
"uppercase whitespace-nowrap font-serif text-base px-5 py-3 rounded-sm text-dark_blue  hover:bg-dark_blue hover:text-peach1";

const Hamburger: FC<HamburgerProps> = ({ pages }) => {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  return ( 
    <div className=" hover:cursor-pointer md:hidden lg:hidden">
      <div className="flex bg-nf_blue ">
        <div
          onClick={toggleMenu}
          className="p-5 bg-nf_blue  flex flex-col gap-1 justify-around"
        >
          <div className="transition-all origin-center w-6 h-1 bg-brown1"></div>
          <div className="transition-all origin-center w-6 h-1 bg-brown1"></div>
          <div className="transition-all origin-center w-6 h-1 bg-brown1"></div>
        </div>
        <div className="mx-[10px]  mt-[20px]">
        <Image
          src={logoImage}
          alt="Hero Image"
          width={100} 
          height={100} 
        />
        </div>
      </div>


      <div
        className={` ${
          isMenuOpen ? "absolute" : "hidden"
        }  w-full top-10 left-0 bg-nf_blue text-dark_blue h-30 z-10 mt-[20px]`}
      >

        <ul className="flex  flex-col justify-center items-center my-[20px] gap-[30px]">
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
                  <DropdownPhone link={path}/>
                </>
              ) : (
                <Link href={path}>
                  <span
                    className={cn(baseClass, {
                      "bg-dark_blue text-peach1 ":
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
        </div>
      </div>

  );
};
export default Hamburger;





// {Object.entries(pages).map(([name, path]) => (
//   <li key={name}>
//     <Link href={path}>
//       <span
//         className={cn(baseClass, {
//           "bg-dark_blue text-peach1 pointer-events-none":
//             path === pathName,
//         })}
//       >
//         {name}
//       </span>
//     </Link>
//   </li>
// ))}





// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// function Hamburger() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className=" hover:cursor-pointer">
//       <div
//         onClick={toggleMenu}
//         className="m-5 md:hidden lg:hidden flex flex-col gap-1 justify-around"
//       >
//         <div className="transition-all origin-center w-6 h-1 bg-brown1"></div>
//         <div className="transition-all origin-center w-6 h-1 bg-brown1"></div>
//         <div className="transition-all origin-center w-6 h-1 bg-brown1"></div>
//       </div>
//       <div
//         className={` ${
//           isMenuOpen ? "absolute" : "hidden"
//         }  w-full top-10 left-0 bg-peach1 text-brown1 h-30 z-10`}
//       >
//         <div className="flex flex-col justify-center items-center my-[20px]">
//           <Link href="/products">Products</Link>
//           <Link href="/cart">Cart</Link>
//           <Link href="/about">About Us</Link>
//           <Link href="/login">Sign In</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hamburger;