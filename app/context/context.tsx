"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  name: string;
  price: string;
  quantity: number;
  picture: string;
}
interface contextProps {
  //   cartArray: ItemCardProps[];
  cartArray: Product[];
  addToCart: (item: Product) => void;
  removeItemFromCart: (item: Product) => void;
  emptyCart: () => void;
}

const MyContext = createContext<contextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider = ({ children }: MyProviderProps) => {
  const [cartArray, setCart] = useState<Product[]>([]);

  const emptyCart = () => {
    setCart([]);
  };

  const addToCart = (item: Product) => {
    const existingItem = cartArray.find(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItem) {
      setCart(
        cartArray.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cartArray, item]);
    }
  };

  const removeItemFromCart = (item: Product) => {
    const newCart = cartArray.filter((cartItem) => cartItem.name !== item.name);
    setCart(newCart);
  };

  return (
    <MyContext.Provider
      value={{
        cartArray,
        addToCart,
        removeItemFromCart,
        emptyCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = (): contextProps => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyProvider as ContextProvider, useMyContext as useContext };
