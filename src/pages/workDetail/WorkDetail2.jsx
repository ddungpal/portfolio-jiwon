import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts2 } from "../../api/firebase";

export default function WorkDetail2() {
  const {
    isLoading,
    error,
    data: products2,
  } = useQuery(["products2"], getProducts2);

  console.log(products2);
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
  let image11 = "";
  let image11_2 = "";
  let image12 = "";
  let image14 = "";
  let image15 = "";
  let image16 = "";
  let image17 = "";
  let image18 = "";
  let image19 = "";
  let image20 = "";
  if (products2) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products2);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "195d7faf-f8c7-4dcb-bb5a-717b7f17bd45"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "d10b3521-d2f4-4d9c-864c-f58c41828aed"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "def9ebf6-743c-4ff2-bd02-b403cd8a925f"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "f43f5f5f-8ad9-41d5-9284-24c4cd11a73c"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7cf4113f-be70-4831-8756-ef3cfb583f4b"
      );
    image5 = image5Obj[0].image;
    const image6Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "c1463542-4ea1-41e7-b18a-41a5dcbdce12"
      );
    image6 = image6Obj[0].image;
    const image7Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "0bdc7441-a433-4a2a-887e-c3681a180dfb"
      );
    image7 = image7Obj[0].image;
    const image8Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "623bc063-613a-4bba-ac01-97d8b92e61c1"
      );
    image8 = image8Obj[0].image;
    const image9Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "9435abc6-9d55-4b21-be09-5bb05677e6ff"
      );
    image9 = image9Obj[0].image;
    const image10Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6ce83ccc-278c-4bed-9577-c997e89b8b64"
      );
    image10 = image10Obj[0].image;
    const image11bj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "c25ab27f-6736-4033-a2fe-d137149e8d80"
      );
    image11 = image11bj[0].image;
    const image11_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "28dc9c12-cdcc-4ed2-8b5c-172d3114cbc7"
      );
    image11_2 = image11_2Obj[0].image;
    const image12Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "a93bfdf9-fbe0-43b8-b55a-1f486aaa804d"
      );
    image12 = image12Obj[0].image;
    const image14Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6ec7522e-66b2-4e5d-94c5-26a8336555aa"
      );
    image14 = image14Obj[0].image;
    const image15Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "e5d6619c-e9d0-4381-9f2c-6477dd563034"
      );
    image15 = image15Obj[0].image;
    const image16Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "c0ff8a78-29a7-4a6c-a618-982ccaa6c677"
      );
    image16 = image16Obj[0].image;
    const image17Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "68cbc59f-4450-4724-a023-2b2c359a7fe7"
      );
    image17 = image17Obj[0].image;
    const image18Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "30432c70-61dc-4ea2-9d89-70a860f45ea0"
      );
    image18 = image18Obj[0].image;
    const image19Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "31af6c8e-55f6-4837-8cf0-6436e9d41565"
      );
    image19 = image19Obj[0].image;
    const image20Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "ca3c250a-c9db-41ef-aba5-3997acbe5a03"
      );
    image20 = image20Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img className="mb-5" src={image1} alt="1.jpg" />
      <img className="mb-5" src={image2} alt="2.jpg" />
      <img className="mb-5" src={image3} alt="3.jpg" />
      <img className="mb-5" src={image4} alt="4.jpg" />
      <img className="mb-5" src={image5} alt="5.jpg" />
      <img className="mb-5" src={image6} alt="6.jpg" />
      <img className="mb-5" src={image7} alt="7.jpg" />
      <img className="mb-5" src={image8} alt="8.jpg" />
      <img className="mb-5" src={image9} alt="9.jpg" />
      <img className="mb-5" src={image10} alt="10.jpg" />
      <img className="mb-5" src={image11} alt="11.jpg" />
      <img className="mb-5" src={image11_2} alt="11(1).jpg" />
      <img className="mb-5" src={image12} alt="12.jpg" />
      <img className="mb-5" src={image14} alt="14.jpg" />
      <img className="mb-5" src={image15} alt="15.jpg" />
      <img className="mb-5" src={image16} alt="16.jpg" />
      <img className="mb-5" src={image17} alt="17.jpg" />
      <img className="mb-5" src={image18} alt="18.jpg" />
      <img className="mb-5" src={image19} alt="19.jpg" />
      <img className="mb-3" src={image20} alt="20.jpg" />
      <div className="">
        <p className="p-2 line-clamp text-justify font-serif text-sm tracking-normal">
          2023, AHACOLLECTIVE, ‘노노바운즈(Know no bounds)’,00:01:40, loop,
          single channel video, dimension variable
          <br /> 2023, AHACOLLECTIVE, ‘노노바운즈2(Know no bounds)’, 138x113cm,
          interactive installation, dimension variable
          <br /> 2023, AHACOLLECTIVE, ‘Objects in mirror are ___ they appear’,
          00:02:30, surround sound
          <br /> 2023, AHACOLLECTIVE, ‘Objects in mirror 1’, 00:00:40, loop,
          single channel video, dimension variable
          <br /> 2023, AHACOLLECTIVE, ‘Objects in mirror 2’, 00:00:40, loop,
          single channel video, dimension variable
          <br /> 2023, AHACOLLECTIVE, ‘Objects in mirror 3’, 00:00:40, loop,
          single channel video, dimension variable
          <br /> 2023, AHACOLLECTIVE, ‘Pulse’, 70x70x150cm, mixed media,
          dimension variable
          <br /> 2023, AHACOLLECTIVE, ‘Ping’, 70x50cm, digital print
        </p>
      </div>
      <p className="mb-5 italic text-slate-400 text-right text-sm">Photography 허유</p>
    </>
  );
}
