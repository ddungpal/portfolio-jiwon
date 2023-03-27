import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts6 } from "../../api/firebase";

export default function WorkDetail6() {
  const {
    isLoading,
    error,
    data: products6,
  } = useQuery(["products6"], getProducts6);

  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";
  // let video1 = "";

  console.log(products6);
  if (products6) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products6);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "1923d56f-132f-4b26-aaee-5e000af60337"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "98395a0f-9e28-4011-8888-2ffb7cda658b"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "b7814cc2-cd90-4634-b182-00a3a6f74836"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "f9c31c03-eeab-4048-8167-38a4a880a55a"
      );
    image4 = image4Obj[0].image;
    // const video1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "393bdf8d-28c8-4add-b002-5435de680a2d"
    //   );
    // video1 = video1Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img
        className="mb-5"
        src={image1}
        alt="1.Piece of Light, Exhibition view.jpeg"
      />
      <img
        className="mb-5"
        src={image2}
        alt="2.Piece of Sphere, 00_01_50, video, installation.jpeg"
      />
      <img
        className="mb-5"
        src={image3}
        alt="3.Piece of Light, video installatioin.jpeg"
      />
      <img
        className="mb-5"
        src={image4}
        alt="4.Piece of Light, Exhibition view.jpeg"
      />
      {/* <video className="mb-5" src={video1} controls autoPlay></video> */}
    </>
  );
}
