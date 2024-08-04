"use client";
import Image from "next/image";
import heroImage1 from "../../public/pictures/hero.png";

export default function HeroSection() {
  return (
    <section className="container flex flex-col lg:flex-row justify-between items-center gap-10 w-screen relative mb-[100px]  lg:px-10">
      <div className="flex-1 w-full  flex flex-col gap-[5px] order-2 md:m-[50px] px-[20px] mt-[20px] lg:px-[0px] lg:order-1">
        <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-blue1 ">
          Your Ultimate Jewelry Destination
        </h1>
        <p className="font-serif text-xl whitespace-break-spaces text-brown1 mt-7">
          Welcome to dBeads, your ultimate destination for exquisite handmade
          jewelry. Our collection showcases a fusion of creativity and quality
          craftsmanship, ensuring each piece is vibrant and eye-catching.
          Explore our diverse range of accessories and unleash your unique style
          with dBeads today!
        </p>
        <div className="flex items-center justify-center mt-[40px]">
          <a href="/about">
            <button className="font-serif text-peach1 bg-dark_blue hover:text-dark_blue hover:bg-peach1 p-[15px] m-[10px] rounded-sm ">
              LEARN MORE
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 order-1 mr-[50px] mt-[90px] mb-[50px] lg:order-2 lg:mt-[95px] md:mr-[80px]">
        <div className="relative">
          <Image
            src="/powtoon.gif"
            alt="Hero GIF"
            height={500}
            width={500}
            className="w-[750px] h-auto"
          />
          <div className="absolute w-full h-[120%] -top-[10%] left-[50px] md:left-[70px] -z-10 bg-peach1"></div>
        </div>
      </div>
    </section>
  );
}
