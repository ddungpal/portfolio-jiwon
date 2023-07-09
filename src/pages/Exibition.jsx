import React from "react";
import Topbar from "../components/Topbar";
import { useQuery } from "@tanstack/react-query";
import { getProducts1 } from "../api/firebase";

export default function Exibition() {
  const {
    isLoading,
    error,
    data: products1,
  } = useQuery(["products1"], getProducts1);

  let video1 = "";
  let image1 = "";
  let image2 = "";

  if (products1) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products1);
    const video11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "fc1ce811-aca5-4f87-93d5-a7a8e1231928"
      );
    video1 = video11Obj[0].image;
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7ef8932e-d791-4ef8-9039-22acc5b85b0c"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "0023985e-72f6-4f48-950f-96000f83b6fd"
      );
    image2 = image2Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      <Topbar />
      <div className="container mx-auto flex items-center justify-between mt-10">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div>
          <video className="mb-5" src={video1} controls autoPlay></video>
        </div>
        <div>
          <img className="" src={image1} alt="1.jpg" />
        </div>
        <div>
          <img className="" src={image2} alt="2.jpg" />
        </div>
      </div>
    </>
  );
}
