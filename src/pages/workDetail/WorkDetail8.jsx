import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts8 } from "../../api/firebase";

export default function WorkDetail8() {
  const {
    isLoading,
    error,
    data: products8,
  } = useQuery(["products8"], getProducts8);

  let video1 = "";
  // let video2 = "";
  // let video3 = "";

  console.log(products8);
  if (products8) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products8);
    const video1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "ea89d9dd-1334-4ada-a8ce-f10f58399b98"
      );
    video1 = video1Obj[0].image;
    // const video2Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "393bdf8d-28c8-4add-b002-5435de680a2d"
    //   );
    // video2 = video2Obj[0].image;
    // const video3Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "393bdf8d-28c8-4add-b002-5435de680a2d"
    //   );
    // video3 = video3Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <video className="mb-5" src={video1} controls autoPlay></video>
      {/* <video className="mb-5" src={video2} controls></video>
      <video className="mb-5" src={video3} controls></video> */}
    </>
  );
}
