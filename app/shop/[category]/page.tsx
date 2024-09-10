"use client";
import React, { useState, useEffect } from "react";
import Card from "../Card";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/firebase"; // Adjust the path to your Firebase setup

interface Product {
  category: string;
  title: string;
  price: string;
  image: string;
}

interface pageProps {
  params: {
    category: string;
  };
}

function Page({ params }: pageProps) {
  const [redirectToNotFound, setRedirectToNotFound] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");

        // Convert the category to lowercase to match Firestore data
        let normalizedCategory = params.category.toLowerCase();

        // Build the query based on the category
        let q;
        if (normalizedCategory === "all") {
          q = query(productsRef); // Fetch all products
        } else if (
          ["charm", "bracelet", "necklace", "ring", "chain"].includes(
            normalizedCategory
          )
        ) {
          q = query(productsRef, where("category", "==", normalizedCategory)); // Fetch products by category
        } else {
          setRedirectToNotFound(true);
          return;
        }

        const querySnapshot = await getDocs(q);
        const fetchedProducts: Product[] = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        })) as Product[];

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products from Firestore:", error);
      }
    };

    fetchProducts();
  }, [params.category]);

  const handleAddToCart = () => {
    console.log("Added to cart!");
  };

  if (redirectToNotFound) {
    window.location.href = "/not-found";
    return null;
  }

  return (
    <div>
      <h1 className="text-center my-[30px] text-4xl md:text-5xl font-bold font-serif text-dark_blue">
        {params.category === "all"
          ? params.category[0].toUpperCase() +
            params.category.slice(1) +
            " products"
          : params.category[0].toUpperCase() + params.category.slice(1) + "s"}
      </h1>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              image={product.image}
              category={product.category}
              title={product.title}
              price={product.price}
              onAddToCart={handleAddToCart}
              key={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Page;
