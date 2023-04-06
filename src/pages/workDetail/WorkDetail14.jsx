import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts14 } from "../../api/firebase";

export default function WorkDetail14() {
  const {
    isLoading,
    error,
    data: products14,
  } = useQuery(["products14"], getProducts14);

  console.log(products14);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  // let image3_2 = "";
  let image3_3 = "";
  // let image4 = "";
  // let image5 = "";
  let image6 = "";

  if (products14) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products14);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "28d51c41-e344-4e7b-8446-6c871e9252a4"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6a674d91-c7e4-489c-b831-221c83998644"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "99f314c8-f8da-41a7-9de0-ab230ad0fae0"
      );
    image3 = image3Obj[0].image;
    // const image3_2Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "1dda945a-bf94-47df-8fe2-c7479a9c0429"
    //   );
    // image3_2 = image3_2Obj[0].image;
    const image3_3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "5382bdd2-e657-496a-8cc5-ebe245c7f1be"
      );
    image3_3 = image3_3Obj[0].image;
    // const image4Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "fb4073e7-03e8-476b-b3fd-08dd4cf6d8d3"
    //   );
    // image4 = image4Obj[0].image;
    // const image5Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "6894e75d-7b0a-4253-8374-ad7127c584e5"
    //   );
    // image5 = image5Obj[0].image;
    const image6Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2cb34dde-ef07-4f01-8c55-f6742a924fc2"
      );
    image6 = image6Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img className="mb-5" src={image1} alt="1.png" />
      <img className="mb-5" src={image2} alt="2.jpeg" />
      <img className="mb-5" src={image3} alt="3.jpeg" />
      {/* <img className="mb-5" src={image3_2} alt="3-1.jpeg" /> */}
      <img className="mb-5" src={image3_3} alt="3-2.jpeg" />
      {/* <img className="mb-5" src={image4} alt="4.jpeg" />
      <img className="mb-5" src={image5} alt="5.jpeg" /> */}
      <img className="mb-5" src={image6} alt="6.png" />
    </>
  );
}
