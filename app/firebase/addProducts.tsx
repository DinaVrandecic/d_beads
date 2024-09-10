"use client";
import { useEffect } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import products from "../../public/products.json";
import { db } from "./firebase";
const AddProducts: React.FC = () => {
  useEffect(() => {
    async function addProducts() {
      const productsRef = collection(db, "products");

      try {
        for (const product of products) {
          const { docId, ...productData } = product;

          if (docId) {
            const productDocRef = doc(productsRef, docId);
            await setDoc(productDocRef, productData);
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

  return null;
};

export default AddProducts;
