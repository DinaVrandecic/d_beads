"use client";
import React, { useRef, useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../app/firebase/firebase"; // Ensure Firebase is set up correctly
import Link from "next/link";

interface Product {
  title: string;
  category: string;
}

function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim().toLowerCase();

    if (searchTerm !== "") {
      await fetchData(searchTerm);
      setDropdownVisible(true);
    } else {
      setSearchResults([]);
      setDropdownVisible(false);
    }
  };

  const fetchData = async (searchTerm: string) => {
    try {
      const productsRef = collection(db, "products");
      const querySnapshot = await getDocs(productsRef);

      const matchedProducts = querySnapshot.docs
        .map((doc) => ({
          title: doc.data().title,
          category: doc.data().category,
        }))
        .filter((product) => product.title.toLowerCase().includes(searchTerm));

      setSearchResults(matchedProducts);
    } catch (error) {
      console.error("Error fetching Firestore data:", error);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center">
      <div className="hidden md:flex lg:flex items-center justify-evenly shrink-5 relative">
        <input
          ref={inputRef}
          onChange={handleInputChange}
          type="text"
          placeholder="Search..."
          className="block w-[80px] lg:w-full p-[3px] lg:px-4 py-2  rounded-sm text-brown1 bg-page_background focus:ring-peach1 focus:outline-none focus:ring focus:ring-opacity-70 font-serif text-xl"
        />
        {isDropdownVisible && searchResults.length > 0 && (
          <div
            ref={dropdownRef}
            className="absolute w-full bg-beige_text text-brown1 max-h-64 h-content top-[44px] z-10 rounded-sm overflow-y-auto"
          >
            {searchResults.map((product, index) => (
              <Link
                onClick={() => {
                  if (inputRef.current !== null) {
                    inputRef.current.value = "";
                  }
                  setSearchResults([]);
                  setDropdownVisible(false);
                }}
                href={`/shop/${product.category}/${product.title
                  .trim()
                  .replaceAll(" ", "-")}`}
                key={index}
              >
                <div className="font-serif text-lg my-1 hover:bg-nf_blue">
                  {product.title}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
