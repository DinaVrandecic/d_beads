"use client";
import React, { useState, useEffect } from "react";
import Product from "../../../../components/Product";
import { fetchGraphQL } from "@/lib/contentfulFetch";
import { useContext } from "@/app/context/context";

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
    product: string;
  };
}

function Page({ params }: pageProps) {
  const [redirectToNotFound, setRedirectToNotFound] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({} as Product);
  const productName = params.product.replace(/-/g, " ");

  const { cartArray, addToCart } = useContext();

  useEffect(() => {
    const query = `
    query {
      productCollection (where: {name: "${productName}"}) {
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

    const fetchData = async () => {
      try {
        const response = await fetchGraphQL(query, space_id, access_token);
        const data = await response.json();
        console.log(data.data.productCollection.items[0]);
        setProduct(data.data.productCollection.items[0]);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchData();
  }, [params.category]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (redirectToNotFound) {
    // Redirect to not-found page
    window.location.href = "/not-found";
    return null; // You can also return a loading spinner or any other component
  }
  console.log(product);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-dark_blue font-serif m-[30px] ">
        {product.name}
      </h1>
      {product.picture && product.picture.url && (
        <Product
          imageUrl={product.picture.url}
          category={product.category}
          title={product.name}
          price={product.price}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default Page;
