import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts9 } from "../../api/firebase";

export default function WorkDetail9() {
  const {
    isLoading,
    error,
    data: products9,
  } = useQuery(["products9"], getProducts9);

  let image1 = "";

  console.log(products9);
  if (products9) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products9);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "3cd24ada-2e2a-458d-845a-d96aa3a05c95"
      );
    image1 = image1Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image1}
          alt="1.0m3, media installation.jpeg"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          0m3, media installation
        </span>
      </div>
    </>
  );
}
