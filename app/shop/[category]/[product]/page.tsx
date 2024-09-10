"use client";
import React, { useState, useEffect } from "react";
import Product from "../../../../components/Product";
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
    product: string;
  };
}

function Page({ params }: pageProps) {
  const [redirectToNotFound, setRedirectToNotFound] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const productName = params.product.replace(/-/g, " ").toLowerCase(); // Handle spaces and lowercase

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsRef = collection(db, "products");
        // Query to find the specific product by name (case-insensitive search)
        const q = query(
          productsRef,
          where("title", "==", productName) // Ensure product names are stored in lowercase
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const productData = querySnapshot.docs[0].data() as Product;
          setProduct(productData);
        } else {
          // Redirect if the product is not found
          setRedirectToNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    };

    fetchProduct();
  }, [productName]);

  if (redirectToNotFound) {
    // Redirect to a not-found page if the product is not found
    window.location.href = "/not-found";
    return null;
  }

  return (
    <div className="flex justify-center items-center flex-col">
      {product && (
        <Product
          image={product.image}
          category={product.category}
          title={product.title}
          price={product.price}
        />
      )}
    </div>
  );
}

export default Page;
