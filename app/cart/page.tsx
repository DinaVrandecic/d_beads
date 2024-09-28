"use client";
import Image from "next/image";
import Link from "next/link";
import cart from "../../public/pictures/cart.png";
import { useContext } from "../context/context";

function ShoppingCartPage() {
  const { cartArray, removeItemFromCart } = useContext();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col justify-center">
      {cartArray.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center mt-[30px] text-4xl md:text-5xl font-bold font-serif text-dark_blue">
            My Cart
          </h1>
          <div className="mb-[40px] mt-[60px] relative mr-[30px] shadow-top-right">
            <Image
              src={cart}
              alt="Our Vision"
              width={280}
              height={300}
              className="object-cover"
            />
            <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
          </div>
          <h3 className="text-dark_blue font-serif font-bold">
            Your Jewelry Box is Empty :(
          </h3>
          <h4 className="text-dark_blue font-serif font-bold mt-3">
            Add something!
          </h4>
          <Link legacyBehavior href="/shop/all">
            <a className="bg-dark_blue font-serif hover:bg-peach1 text-peach1 hover:text-dark_blue py-2 px-4 mt-3 mb-3 text-serif">
              SHOP ALL
            </a>
          </Link>
        </div>
      )}

      {cartArray.length !== 0 && (
        <div className="flex flex-col justify-center items-center w-full">
          {cartArray.map((cartItem, index) => {
            return (
              <div
                key={index}
                className="flex bg-white gap-2 mt-[20px] justify-center items-center w-11/12 md:w-2/3 xl:w-1/2"
              >
                <img
                  className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] m-[8px] ring-8 ring-peach1 "
                  src={cartItem.picture}
                ></img>
                <div className="flex-1 flex flex-col md:flex-row ml-auto justify-end items-center gap-2 md:mr-5">
                  <div className="text-blue1 font-bold font-serif text-base md:text-xl text-center md:w-full">
                    {capitalizeFirstLetter(cartItem.name)}
                  </div>
                  <div className="md:flex md:w-full md:justify-center">
                    <div className="text-brown1 font-inter font-semibold text-base md:text-xl m-[10px]">
                      {cartItem.price}
                      <span>€</span>
                    </div>
                    <div className="text-nf_blue font-inter font-semibold text-base md:text-xl m-[10px]">
                      <span className="font-normal">x</span>
                      {cartItem.quantity}
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => removeItemFromCart(cartItem)}
                  className="text-brown1 font-bold py-[5px] px-[10px] bg-beige_text m-[10px] hover:cursor-pointer rounded-sm"
                >
                  X
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-col align-center mt-[50px] mx-auto max-w-3xl">
        {/* Payment Method Section */}
        <div className="px-[10px]">
          <h2 className="text-2xl font-bold font-serif text-dark_blue mb-3">
            Payment Methods
          </h2>
          <p className="text-brown1 font-serif mb-3">
            We accept the following payment methods for your jewelry purchases:
          </p>
          <ul className="list-disc list-inside text-brown1 font-bold font-serif">
            <li>Revolut</li>
            <li>KEKS Pay</li>
            <li>Bank Transfer</li>
            <li>Cash</li>
          </ul>
          <p className="text-brown1 mt-3 font-serif">
            Please note that you have the flexibility to pay for your order upon
            receiving it, ensuring your satisfaction before completing the
            transaction.
          </p>
        </div>

        {/* Delivery Information Section */}
        <div className="mt-[50px] px-[10px]">
          <h2 className="text-2xl font-bold font-serif text-dark_blue mb-3">
            Delivery Information
          </h2>
          <p className="text-brown1 mt-3 font-serif">
            For deliveries within Split and the surrounding areas, I personally
            handle all shipments of the jewelry. Alternatively, we can arrange a
            convenient meetup location for you to receive your order. Orders
            will be completed within few days, with delivery times varying
            depending on the size of the order. Your satisfaction and
            convenience are my top priorities!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
