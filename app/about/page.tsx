"use client";
import PictureSlider from "@/components/PictureSlider";
import Image from "next/image";
import me from "../../public/pictures/other_pictures/me.jpg";
import jewelry from "../../public/pictures/other_pictures/jewelry.jpg";

export default function About() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-15 text-center text-dark_blue font-serif">
        About
      </h1>

      <section className="flex flex-col md:flex-row  items-center justify-around mb-8 my-[50px] ">
        <div className="  mb-4 mt-8 md:mb-0 mr-[30px] md:mr-[0px] relative order-2 md:order-1">
          <Image
            src={me}
            alt="me"
            width={500}
            height={500}
            className="object-cover shadow-top-right "
          />

          <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
        </div>
        <div className="md:w-1/2 ml-[0px] md:ml-[100px] text-center md:text-left order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-blue1 mb-4">
            Behind the Beads
          </h2>
          <p className="mb-4 font-serif text-brown1">
            Hello, I'm Dina, and I call the beautiful city of Split in Croatia
            my home.
          </p>
          <p className="mb-4 font-serif text-brown1">
            Since I was little, creativity has been my constant companion,
            encouraged by my time at a Waldorf kindergarten. Alongside crafting
            jewelry, I find joy in various hobbies, including makeup, painting,
            drawing, and culinary exploration.
          </p>
          <p className="mb-4 font-serif text-brown1">
            However, my creativity extends beyond the visual realm, as I am
            equally enthusiastic about programming – a passion that led me to
            create this very website. Currently, I'm pursuing my studies while
            continuing to explore the possibilities of both art and technology.
            Welcome to my world where creativity blooms!
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-around mb-8 mt-[50px]">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue1 font-serif">
            My Jwelry
          </h2>
          <p className="mb-4 font-serif text-brown1">
            Step into the world of jewelry creations, where style meets
            durability! Crafted with a combination of glass and plastic beads,
            each piece undergoes rigorous testing to ensure impeccable quality.
            With colors that never fade, my trendy and fun designs promise to
            add a vibrant touch to any outfit. Keep an eye out for upcoming hair
            wraps, soon to be accessible on the page.
          </p>
        </div>
        <div className="mb-4 mt-8 md:mb-0 md:ml-28 relative mr-[30px] md:mr-[0px]">
          <Image
            src={jewelry}
            alt="jewelry"
            width={500}
            height={500}
            className="object-cover shadow-top-right"
          />
          <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row  items-center justify-around mb-8 my-[50px] ">
        <div className=" mb-4 mt-8 md:mb-0 relative order-2 md:order-1 mr-[30px] md:mr-[0px]">
          <PictureSlider />
          <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
        </div>
        <div className="md:w-1/2 ml-[0px] md:ml-[100px] text-center md:text-left order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-blue1 mb-4">
            Workshops
          </h2>
          <p className="mb-4 font-serif text-brown1">
            In addition to creating jewelry, I also host jewelry workshops on
            the beautiful island of Brač, where creativity knows no age limit.
          </p>
          <p className="mb-4 font-serif text-brown1">
            These workshops are a fun and engaging experience for kids, making
            them an ideal choice for birthdays or similar celebrations. Whether
            it's a birthday party or a special event, you can rent these
            workshops to ensure a creative and memorable experience where
            everyone can enjoy the art of beading.
          </p>
        </div>
      </section>
    </div>
  );
}
