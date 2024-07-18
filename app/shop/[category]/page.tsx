"use client";
import React, { useState, useEffect } from "react";
import Card from "../Card";
import { fetchGraphQL } from "@/lib/contentfulFetch";

const space_id = "w4hubm46n8vc";
const access_token = "N45HXFp-MbSa4GvLTotphSM4O3Ey5jCx9Qvb8-9p5PE";

interface Product {
  category: string;
  name: string;
  price: string;
  picture: {
    id: number;
    title: string;
    description: string;
    contentType: string;
    url: string;
  };
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
    let query = "";

    if (params.category === "all") {
      query = `
        query {
          productCollection {
            items {
              name
              price
              category
              picture {
                title
                description
                contentType
                url
              }
            }
          }
        }
      `;
    } else if (
      ["ring", "earring", "bracelet", "necklace"].includes(params.category)
    ) {
      query = `
        query {
          productCollection (where: {name_contains: "${params.category}"}) {
            items {
              name
              price
              category
              picture {
                title
                description
                contentType
                url
              }
            }
          }
        }
      `;
    } else {
      // Redirect to not-found page
      setRedirectToNotFound(true);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();
        console.log(data.data.productCollection.items);
        setProducts(data.data.productCollection.items);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchData();
  }, [params.category]);

  const handleAddToCart = () => {
    // Handle adding to cart logic
    console.log("Added to cart!");
  };

  if (redirectToNotFound) {
    // Redirect to not-found page
    window.location.href = "/not-found";
    return null;
  }

  return (
    <div>
      <h1 className="text-center my-[30px] text-4xl md:text-5xl font-bold font-serif text-dark_blue">
        {params.category === "all"
          ? // Render if params.category is "all"
            params.category[0].toUpperCase() +
            params.category.slice(1) +
            " products"
          : // Render if params.category is not "all"
            params.category[0].toUpperCase() + params.category.slice(1) + "s"}
      </h1>
      <div className="flex justify-center">
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, item) => (
            <Card
              imageUrl={product.picture.url}
              category={product.category}
              title={product.name}
              price={product.price}
              onAddToCart={handleAddToCart}
              key={item}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Page;
