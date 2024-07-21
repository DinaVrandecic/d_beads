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

  if (redirectToNotFound) {
    window.location.href = "/not-found";
    return null;
  }
  console.log(product);

  return (
    <div className="flex justify-center items-center flex-col">
      {product.picture && product.picture.url && (
        <Product
          imageUrl={product.picture.url}
          category={product.category}
          title={product.name}
          price={product.price}
        />
      )}
    </div>
  );
}

export default Page;
