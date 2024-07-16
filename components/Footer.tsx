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
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28.314 28.323"
              x="0px"
              y="0px"
              width="20"
              height="20"
            >
              <g fill="#25669c">
                <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
              </g>
            </svg>
            <p className=" text-center pl-1"> +385 097 621 4149 </p>
          </div>

          <div className="flex justify-center">
            <svg
              data-name="1-Mail"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              x="0px"
              y="0px"
              width="20"
              height="20"
            >
              <g fill="#25669c">
                <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                <path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" />
                <path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z" />
              </g>
            </svg>
            <p className=" text-center pl-1"> dina.vrandecic@gmail.com </p>
          </div>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
            >
              <g fill="#25669c">
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                </g>
              </g>
            </svg>
            <p className=" text-center pl-1"> d_beads_ </p>
          </div>

          <div className="flex justify-center">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              x="0px"
              y="0px"
              width="20"
              height="20"
            >
              <g fill="#25669c">
                <path d="m102.128 96.851 6.3 14.173a1.75 1.75 0 1 0 3.2-1.422l-6.3-14.173a1.75 1.75 0 1 0-3.2 1.422z" />
                <path d="m123.1 120.649-17.69-39.811a1.75 1.75 0 0 0-1.6-1.039H83.831C89.219 71.13 93.938 62 96.778 53.651a43.164 43.164 0 0 0 2.657-13.466 35.436 35.436 0 1 0-70.871 0 43.174 43.174 0 0 0 2.657 13.467c2.84 8.353 7.56 17.478 12.948 26.147H24.19a1.75 1.75 0 0 0-1.6 1.039L4.9 120.649a1.75 1.75 0 0 0 1.6 2.461h115a1.75 1.75 0 0 0 1.6-2.461zM32.064 40.186a31.936 31.936 0 1 1 63.871 0 39.8 39.8 0 0 1-2.471 12.34c-3.041 8.945-8.311 18.822-14.24 28.026l-.037.058A194.664 194.664 0 0 1 64 101.136a194.667 194.667 0 0 1-15.188-20.525c-.013-.02-.024-.04-.038-.059-5.929-9.2-11.2-19.081-14.239-28.025a39.812 39.812 0 0 1-2.471-12.341zM9.192 119.61 25.327 83.3H46.4a194.324 194.324 0 0 0 16.29 21.663 1.75 1.75 0 0 0 2.629 0A194.313 194.313 0 0 0 81.6 83.3h21.068l16.135 36.311z" />
                <path d="M64 58.775a18.592 18.592 0 1 0-18.592-18.591A18.613 18.613 0 0 0 64 58.775zm0-33.684a15.092 15.092 0 1 1-15.092 15.093A15.109 15.109 0 0 1 64 25.092z" />
              </g>
            </svg>
            <p className=" text-center pl-1"> 21000, Split, Croatia </p>
          </div>
        </div>
      </div>
    </div>
  );
}
