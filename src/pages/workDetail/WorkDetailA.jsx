import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsA } from "../../api/firebase";

export default function WorkDetailA() {
  const {
    isLoading,
    error,
    data: productsA,
  } = useQuery(["productsA"], getProductsA);

  console.log(productsA);
  let image1 = "";

  if (productsA) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(productsA);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "c5a03ccc92216742645590beae7e87cf"
      );
    image1 = image1Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="video-container mb-5">
        <iframe
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/H6SefqXq34c?rel=0"
          frameborder="0"
          allowfullScreen="allowfullscreen"
          title="YouTube video player"
          width="640"
          height="390"
        ></iframe>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image1}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span>
      </div>
    </>
  );
}
