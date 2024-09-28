"use client";
import { useState } from "react";
import Image from "next/image";
import slika1 from "../public/pictures/workshops/slika1.jpg";
import slika2 from "../public/pictures/workshops/slika2.jpg";
import slika3 from "../public/pictures/workshops/slika3.jpg";
import slika4 from "../public/pictures/workshops/slika4.jpg";
import slika5 from "../public/pictures/workshops/slika5.jpg";
import slika6 from "../public/pictures/workshops/slika6.jpg";
import slika10 from "../public/pictures/workshops/slika10.jpg";

const images = [slika10, slika1, slika2, slika3, slika4, slika5, slika6];

export default function PictureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[480px] md:max-w-[500px] mx-auto">
      <div className="overflow-hidden relative shadow-top-right">
        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 ">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-auto "
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 w-[50px] h-[50px] transition transform -translate-y-1/2 text-3xl hover:bg-black hover:bg-opacity-50 text-white rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 w-[50px] h-[50px] transition transform -translate-y-1/2 text-3xl hover:bg-black hover:bg-opacity-50 text-white rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
