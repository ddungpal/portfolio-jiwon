import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts3 } from "../../api/firebase";

export default function WorkDetail3() {
  const {
    isLoading,
    error,
    data: products3,
  } = useQuery(["products3"], getProducts3);

  let video1 = "";

  if (products3) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products3);
    const video11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "5373edc1-4e55-4faa-b5c4-719287f616c1"
      );
    video1 = video11Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <video className="mb-5" src={video1} controls autoPlay playsInline></video>
    </>
  );
}
