"use client";
import Image from "next/image";
import heroImage1 from "../../public/pictures/hero.png";

export default function HeroSection() {
  return (
    <section className="container flex flex-col lg:flex-row justify-between items-center gap-10 w-screen relative mb-[100px] lg:mb-[200px] lg:px-10">
      <div className="flex-1 w-full  flex flex-col gap-[5px] order-2 md:m-[50px] px-[20px] mt-[20px] lg:px-[0px] lg:order-1">
        <h1 className="font-serif text-6xl font-extrabold text-blue1 ">
          Your Ultimate Jewelry Destination
        </h1>
        <p className="font-serif text-xl whitespace-break-spaces text-brown1 mt-7">
        Discover the essence of timeless elegance shimmering through every piece at Elina. From delicate necklaces to intricate bracelets, we invite you to join us on an exciting and sparkling journey. At Elina, we offer sophistication and affordability, ensuring that every piece reflects your unique style.
        </p>
        <div className="flex items-center justify-center mt-[40px]">
          <a href="/about">
            <button className="font-serif text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 p-[15px] m-[10px] rounded-sm ">
              LEARN MORE
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 order-1 mr-[70px] mt-[90px] mb-[50px] lg:order-2 lg:mt-[95px] lg:mr-[80px] md:mr-[80px]">
        <div className="relative">
          <Image
            src={heroImage1}
            alt="Hero Image"
            className="w-[650px] h-auto "
          />
          <div className="absolute w-full h-[120%] -top-[10%] left-[70px] -z-10 bg-peach1"></div>
        </div>
      </div>
    </section>
  );
}