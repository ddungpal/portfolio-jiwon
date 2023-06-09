import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts4 } from "../../api/firebase";

export default function WorkDetail4() {
  const {
    isLoading,
    error,
    data: products4,
  } = useQuery(["products4"], getProducts4);

  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";
  let image5 = "";
  let image6 = "";
  let image7 = "";

  console.log(products4);
  if (products4) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products4);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "ec10c7cb-3d08-4ce9-aff1-d6338e4a6a48"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "cc9def16-efcb-4818-8fa7-da1a5056f250"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "76df872f-8564-423b-91b3-98e152d9dfa7"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "8afb9ed3-992a-4a63-8b56-7dc76fdf0893"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6b020dec-e471-4536-b759-890ff14d61f7"
      );
    image5 = image5Obj[0].image;
    const image6Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "16800cb5-6285-4a46-9db3-2767bf1f89d2"
      );
    image6 = image6Obj[0].image;
    const image7Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "593b2dfe-c799-4f28-a648-8489b4e77ec8"
      );
    image7 = image7Obj[0].image;
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
          alt="0.<FLOW>,Exhibition_view"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          &lt;FLOW&gt;,Exhibition_view
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image2}
          alt="1.Home, 120x120cm, pigment on Hanji"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          Home, 120x120cm, pigment on Hanji
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image3}
          alt="2.Crypsis, 120x120cm, pigment on Hanji"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          Crypsis, 120x120cm, pigment on Hanji
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image4}
          alt="3. Void, 120x120cm, pigment on Hanji"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          Void, 120x120cm, pigment on Hanji
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image5}
          alt="4.FLOW, 163x131cm, pigment on Hanji"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          FLOW, 163x131cm, pigment on Hanji
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image6}
          alt="5.<FLOW>, Exhibition view"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          &lt;FLOW&gt;,Exhibition_view
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image7}
          alt="6.<FLOW>, Exhibition view"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          &lt;FLOW&gt;,Exhibition_view
        </span>
      </div>
      <p className="mb-5 italic text-slate-400 text-right text-sm">Photography 허유</p>
    </>
  );
}
