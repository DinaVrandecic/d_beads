"use client";
import { useEffect } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import products from "../../public/products.json";
import { db } from "./firebase"; // Ensure you have this import from your firebase setup

const AddProducts: React.FC = () => {
  useEffect(() => {
    async function addProducts() {
      const productsRef = collection(db, "products");

      try {
        for (const product of products) {
          const { docId, ...productData } = product; // Extract docId and the rest of the product data

          if (docId) {
            const productDocRef = doc(productsRef, docId); // Use custom docId for the document reference
            await setDoc(productDocRef, productData); // Use setDoc instead of addDoc to set data with a custom ID
          } else {
            console.error("Document ID is missing for product:", product);
          }
        }
        console.log("All products have been added!");
      } catch (error) {
        console.error("Error adding products: ", error);
      }
    }

    addProducts();
  }, []);

  return null; // This component doesn't render anything
};

export default AddProducts;
