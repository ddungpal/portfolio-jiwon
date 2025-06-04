import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsF } from "../../api/firebase";

export default function WorkDetailF() {
  const {
    isLoading,
    error,
    data: productsF,
  } = useQuery(["productsF"], getProductsF);

  console.log(productsF);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";
  let image5 = "";
  let image6 = "";
  let image7 = "";
  let image8 = "";
  let image9 = "";
  let image10 = "";

  if (productsF) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(productsF);
    const image1Obj =
      productsOri && productsOri.filter((product) => product.id === "izusab");
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri && productsOri.filter((product) => product.id === "ym5s6w");
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri && productsOri.filter((product) => product.id === "amb2ib");
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri && productsOri.filter((product) => product.id === "z3ut8u");
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri && productsOri.filter((product) => product.id === "fumk4n");
    image5 = image5Obj[0].image;
    const image6Obj =
      productsOri && productsOri.filter((product) => product.id === "kxiadj");
    image6 = image6Obj[0].image;
    const image7Obj =
      productsOri && productsOri.filter((product) => product.id === "l49kaj");
    image7 = image7Obj[0].image;
    const image8Obj =
      productsOri && productsOri.filter((product) => product.id === "zc2ga4");
    image8 = image8Obj[0].image;
    const image9Obj =
      productsOri && productsOri.filter((product) => product.id === "oaij8l");
    image9 = image9Obj[0].image;
    const image10Obj =
      productsOri && productsOri.filter((product) => product.id === "qfhaq6");
    image10 = image10Obj[0].image;
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
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image2}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image3}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image4}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image5}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image6}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image7}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image8}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image9}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image10}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
      </div>
    </>
  );
}
