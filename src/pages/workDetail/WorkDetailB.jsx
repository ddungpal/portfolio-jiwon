import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsB } from "../../api/firebase";

export default function WorkDetailB() {
  const {
    isLoading,
    error,
    data: productsB,
  } = useQuery(["productsB"], getProductsB);

  console.log(productsB);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";

  if (productsB) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(productsB);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "54a9bb37357d3b1d74ffb38aeb3cefa8"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2df7af595c0a0160ee21161cd7973ade"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "47e851450ab24011f1e4730105c87f42"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2e4e86b9b54abddfd003227bd5cb3a33"
      );
    image4 = image4Obj[0].image;
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
          src="https://www.youtube.com/embed/LQSw5yUv1z4?rel=0"
          frameborder="0"
          allowfullScreen="allowfullscreen"
          title="YouTube video player"
          width="640"
          height="390"
        ></iframe>
      </div>
      <div className="video-container mb-5">
        <iframe
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/rmaaBCu6SLk?rel=0"
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
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image2}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image3}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image4}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
    </>
  );
}
