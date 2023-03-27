import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts10 } from "../../api/firebase";

export default function WorkDetail10() {
  const {
    isLoading,
    error,
    data: products10,
  } = useQuery(["products10"], getProducts10);

  console.log(products10);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";
  let image5 = "";
  let image6 = "";
  let image7 = "";
  let image8 = "";
  let image8_2 = "";
  let image9 = "";
  let image9_2 = "";
  let image10 = "";
  let image10_2 = "";
  let image11 = "";
  let image12 = "";
  let image13 = "";
  let image14 = "";

  if (products10) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products10);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "f67469b9-86ee-4272-8bf0-efa44d130721"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "329f740c-56b8-4852-aac9-d56c5fba0daa"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "46bad30d-5302-47f1-9b17-c48cf49a6a7d"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "0b98b56c-19e4-45e4-8a9b-391e10f336ca"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "5d4c6417-fad6-4150-9ec1-a437f4cba1c8"
      );
    image5 = image5Obj[0].image;
    const image6Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "af91e7c3-a0a2-45d6-b7ae-67a978909f72"
      );
    image6 = image6Obj[0].image;
    const image7Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2dbad1e8-d7fe-41f9-89ce-d5bf5fe9be97"
      );
    image7 = image7Obj[0].image;
    const image8Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7187e082-0d26-4309-a033-3730dfdf2ccf"
      );
    image8 = image8Obj[0].image;
    const image8_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7d1cec40-d06a-4d55-a829-e1082b288547"
      );
    image8_2 = image8_2Obj[0].image;
    const image9Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "30a2b6e0-73d8-4073-a353-d287a13a9a5a"
      );
    image9 = image9Obj[0].image;
    const image9_2bj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "229bd8c1-b8cf-4644-a4ac-7d1b2eb7d226"
      );
    image9_2 = image9_2bj[0].image;
    const image10Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "fc21686f-40a5-4bd9-a0da-0e6045ebb697"
      );
    image10 = image10Obj[0].image;
    const image10_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "3dfb4b3e-6814-4ef9-8b4c-ee30be7f8c5e"
      );
    image10_2 = image10_2Obj[0].image;
    const image11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7ea90410-22f4-4bf0-92c4-5aedf8cde0eb"
      );
    image11 = image11Obj[0].image;
    const image12Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "546ee21a-dd4e-4cb2-b759-45a9d3cab443"
      );
    image12 = image12Obj[0].image;
    const image13Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "035bbecc-3448-4299-9dea-bf2fe238cfcb"
      );
    image13 = image13Obj[0].image;
    const image14Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "9a095cbd-7143-4ce0-884f-842a2970d63e"
      );
    image14 = image14Obj[0].image;
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
        alt="1.작은 무지개가 핀_가변크기_2019.JPG"
      />
      <img
        className="mb-5"
        src={image2}
        alt="2.작은 무지개가 핀_가변크기_2019..jpg"
      />
      <img
        className="mb-5"
        src={image3}
        alt="3.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image4}
        alt="4.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image5}
        alt="5.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image6}
        alt="6.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image7}
        alt="7.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image8}
        alt="8.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image8_2}
        alt="8.풀이 흔들리는_가변크기_2019.JPG"
      />
      <img
        className="mb-5"
        src={image9}
        alt="9.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image9_2}
        alt="9.풀이 흔들리는_가변크기_2019.JPG.jpg"
      />
      <img
        className="mb-5"
        src={image10}
        alt="10.작은 무지개가 핀_가변크기_2019..JPG"
      />
      <img
        className="mb-5"
        src={image10_2}
        alt="10.풀이 흔들리는_가변크기_2019.JPG.jpg"
      />
      <img
        className="mb-5"
        src={image11}
        alt="11.풀이 흔들리는_가변크기_2019.JPG.jpg"
      />
      <img
        className="mb-5"
        src={image12}
        alt="12.풀이 흔들리는_가변크기_2019.JPG.JPG"
      />
      <img
        className="mb-5"
        src={image13}
        alt="13.풀이 흔들리는_가변크기_2019.JPG.jpg"
      />
      <img
        className="mb-5"
        src={image14}
        alt="14.풀이 흔들리는_가변크기_2019.JPG.jpg"
      />
    </>
  );
}
