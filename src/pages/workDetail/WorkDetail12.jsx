import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts12 } from "../../api/firebase";

export default function WorkDetail12() {
  const {
    isLoading,
    error,
    data: products12,
  } = useQuery(["products12"], getProducts12);

  console.log(products12);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let video1 = "";

  if (products12) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products12);
    const video1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "105ea9f4-7063-4f5e-97a1-a55b5346bf00"
      );
    video1 = video1Obj[0].image;
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "934c59d0-ab7e-4a29-ba1f-9c19a10e1338"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "c647d75a-5583-4310-abca-2f6e4cf57751"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "a35148a3-1139-4a9e-8937-c344c41c8b3b"
      );
    image3 = image3Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <video className="mb-5" src={video1} controls autoPlay></video>
      <img className="mb-5" src={image1} alt="일월오봉.jpeg" />
      <img className="mb-5" src={image2} alt="일월오봉1.jpeg" />
      <img className="mb-5" src={image3} alt="일월오봉2.jpeg" />
    </>
  );
}
