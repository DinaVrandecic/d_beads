"use client";
import Image from "next/image";
import Link from "next/link";
import cart from "../../public/pictures/cart.png";
import { useContext } from "../context/context";

function ShoppingCartPage() {
  const { cartArray, removeItemFromCart } = useContext();
  return (
    <div className="flex flex-col justify-center">
      {cartArray.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center mt-[30px] text-4xl md:text-5xl font-bold font-serif text-dark_blue">
            My Cart
          </h1>
          <div className="mb-[40px] mt-[60px] relative mr-[30px]">
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
            Your Jewelry Box is Empty :({" "}
          </h3>
          <h4 className="text-dark_blue font-serif font-bold mt-3">
            Add something!{" "}
          </h4>
          <Link legacyBehavior href="/shop/all">
            <a className="bg-dark_blue font-serif hover:bg-peach1 text-peach1 hover:text-dark_blue py-2 px-4 mt-3 mb-3 text-serif">
              SHOP ALL
            </a>
          </Link>
        </div>
      )}

      {cartArray.length && (
        <div className="flex flex-col justify-center items-center w-full">
          {cartArray.map((cartItem, index) => {
            return (
              <div
                key={index}
                className="flex bg-white gap-2 mt-[20px] justify-center items-center w-11/12 lg:w-2/4"
              >
                <img
                  className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] p-[10px]"
                  src={cartItem.picture.url}
                ></img>
                <div className="flex-1 ml-auto flex justify-end items-center gap-2 md:mr-5">
                  <div className="text-blue1 font-bold font-serif text-base md:text-xl ">
                    {cartItem.name}
                  </div>
                  <div className="text-brown1 font-bold font-serif text-base md:text-xl m-[10px]">
                    {cartItem.price}
                  </div>
                </div>
                <div
                  onClick={() => removeItemFromCart(cartItem)}
                  className=" text-brown1 font-bold py-[5px] px-[10px] bg-beige_text m-[10px] hover:cursor-pointer rounded-sm"
                >
                  X
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-col align-center justify-start mt-[50px] mx-auto">
        {/* Payment Method Section */}
        <div className="px-[10px]">
          <h2 className="text-2xl font-bold font-serif text-dark_blue mb-3">
            Payment Methods
          </h2>
          <p className="text-brown1 font-serif mb-3">
            We accept the following payment methods for your jewelry purchases:
          </p>
          <ul className="list-disc list-inside text-brown1 font-bold font-serif">
            <li>Credit Cards (Visa, MasterCard, American Express)</li>
            <li>PayPal</li>
            <li>Bank Transfer</li>
          </ul>
          <p className="text-brown1 mt-3 font-serif">
            Rest assured that your payment information is encrypted and
            protected during the entire transaction process.
          </p>
        </div>

        {/* Delivery Information Section */}
        <div className="mt-[50px] px-[10px]">
          <h2 className="text-2xl font-bold font-serif text-dark_blue mb-3">
            Delivery Information
          </h2>
          <p className="text-brown1 font-serif mb-3 ">
            We partnered with the best delivery companies so you could enjoy a
            fast and reliable delivery of your goods:
          </p>
          <ul className="list-disc list-inside text-brown1 font-bold font-serif">
            <li>Standard Shipping: 5-7 business days</li>
            <li>Express Shipping: 2-3 business days</li>
            <li>International Shipping available</li>
          </ul>
          <p className="text-brown1 mt-3 font-serif">
            Track your order and receive updates on your delivery status for a
            worry-free shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
