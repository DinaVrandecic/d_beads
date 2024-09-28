import React from "react";
import Image from "next/image";
import ep from "../public/pictures/ep.png";

export default function NotFound() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <section className="flex flex-col md:flex-row  items-center justify-around mb-8 my-[50px]">
        <div className=" mb-4 mt-8 md:mb-0 relative shadow-top-right">
          <Image
            src={ep}
            alt="error"
            width={400}
            height={400}
            className="object-cover"
          />
          <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
        </div>
        <div className="md:w-1/2 ml-[0px] md:ml-[100px] text-center">
          <h1 className="text-6xl font-bold font-serif text-peach1 mb-2">
            404
          </h1>
          <p className="mt-2 text-2xl font-medium font-serif text-dark_blue">
            Page Not Found
          </p>
          <p className="mt-4 text-lg text-brown1 ue text-serif font-serif">
            It seems like the page you were trying to find has vanished like a
            misplaced earring!
            <br />
            But don't worry, we've got plenty of treasures for you to discover!
            <br />
          </p>
          <a href="/">
            <button className="font-serif text-peach1 w-max px-3 py-2 mt-6 bg-dark_blue hover:bg-peach1 hover:text-dark_blue">
              TAKE ME TO HOMEPAGE
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

{
  /* <div className="mt-[80px]">
<div className="text-center flex items-center justify-center flex-wrap">
  <div className="flex flex-col items-center justify-between lg:flex-row">
      <div className=" mb-4 mt-8 md:mb-0 relative">
      <Image
          src={ep} 
          alt="error"
          width={400}
          height={400}
          className="object-cover"
      />
      <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
      </div>
    <div className="text-left items-center lg:text-center lg:items-start">
      <h1 className="text-6xl font-bold font-serif text-peach1 mb-2">404</h1>
      <p className="mt-2 text-2xl font-medium font-serif text-dark_blue">Page Not Found</p>
      <p className="mt-4 text-lg text-brown1 ue text-serif font-serif">
        Looks like this page is as elusive as your favorite earring that always manages to disappear!
        <br />
        Fear not, we're polishing up this page to be as radiant as our jewelry.
        <br />
      </p>
      <a href="/">
        <button className="font-serif text-peach1 w-max px-3 py-2 mt-6 bg-dark_blue hover:bg-peach1 hover:text-dark_blue">
          TAKE ME TO HOMEPAGE
        </button>
      </a>
    </div>
  </div>
</div>
</div> */
}
