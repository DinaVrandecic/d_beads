// "use client"
// import React, { useRef, useState, useEffect } from "react";
// import { fetchGraphQL } from "@/utils/networking/contentfulFetch";
// import Link from "next/link";

// export default function Search() {
//     return (
//         <div className="flex items-center">
//             <div className="flex ">
//                 <input
//                     type="text"
//                     className="block w-[80px] lg:w-full p-[3px] lg:px-4 py-2 text-brown1 bg-page_background focus:ring-peach1 focus:outline-none focus:ring focus:ring-opacity-70"
//                     placeholder="Search..."
//                 />
//                 <Link href="/notFound" className="flex">
//                     <button className="px-4 text-peach1 bg-dark_blue  ">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                     </svg>
//                     </button>
//                 </Link>

//             </div>
//         </div>
//     );
// }

"use client";
import React, { useRef, useState, useEffect } from "react";
import { fetchGraphQL } from "@/lib/contentfulFetch";
import Link from "next/link";

const space_id = "w4hubm46n8vc";
const access_token = "N45HXFp-MbSa4GvLTotphSM4O3Ey5jCx9Qvb8-9p5PE";

interface Product {
  name: string;
  category: string;
}

function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = `
    query {
      productCollection (where: {name_contains: "${e.target.value}"}) {
        items {
          name
          category
        }
      }
    }`;

    if (e.target.value !== "") {
      fetchData(query);
      setDropdownVisible(true);
    } else {
      setSearchResults([]);
      setDropdownVisible(false);
    }
  };

  const fetchData = async (query: string) => {
    try {
      const response = await fetchGraphQL(query, space_id, access_token);
      const data = await response.json();
      setSearchResults(data.data.productCollection.items);
    } catch (error) {
      console.log("Error fetching Contentful data:", error);
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
          className="block w-[80px] lg:w-full p-[3px] lg:px-4 py-2 text-brown1 bg-page_background focus:ring-peach1 focus:outline-none focus:ring focus:ring-opacity-70 font-serif text-xl"
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
                href={`/shop/${product.category}/${product.name
                  .trim()
                  .replaceAll(" ", "-")}`}
                key={index}
              >
                <div className="font-serif text-lg my-1 hover:bg-nf_blue">
                  {product.name}
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
