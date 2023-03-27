import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../api/firebase";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], () => getProducts());
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products &&
          products.map((product) => (
            <ImageCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
