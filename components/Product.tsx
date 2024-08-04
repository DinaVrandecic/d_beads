import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useContext } from "@/app/context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductProps {
  imageUrl: string;
  category: string;
  title: string;
  price: string;
}

const Product: React.FC<ProductProps> = ({
  imageUrl,
  category,
  title,
  price,
}) => {
  const urlNew = title.trim().replaceAll(" ", "-");
  const [counter, setCounter] = useState(1);
  const { cartArray, addToCart } = useContext();

  const handleAddToCart = () => {
    addToCart({
      name: title,
      price,
      quantity: counter,
      picture: imageUrl,
    });
    toast.success(`${counter} ${title} added to cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-fit h-fit mx-[15px] mt-[50px]">
      <div className="flex">
        <div className="relative mt-[30px] mr-[30px]">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={400}
            style={{ width: "300px", height: "300px" }}
          />
          <div className="absolute w-full h-full -top-[30px] left-[30px] -z-10 bg-peach1"></div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[30px] md:mt-[0px] md:ml-[100px]">
        <div className="text-2xl md:text-3xl font-bold text-center text-dark_blue font-serif ">
          {title}
        </div>
        <p className="font-serif text-xl font-bold whitespace-break-spaces text-brown1 mt-[10px]">
          {price}
        </p>
        <div className="flex justify-between mt-5 outline outline-1 outline-gray py-1">
          <button
            onClick={() => (counter > 1 ? setCounter(counter - 1) : counter)}
            className="px-3 text-black"
          >
            -
          </button>
          <div className="text-black">{counter}</div>
          <button
            onClick={() => setCounter(counter + 1)}
            className="px-3 text-black"
          >
            +
          </button>
        </div>
        <div>
          <button
            className="font-serif text-dark_blue bg-peach1 hover:text-peach1 hover:bg-dark_blue p-[7px] mt-[10px] rounded-sm"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            toastStyle={{ backgroundColor: "#2A4F6E" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
