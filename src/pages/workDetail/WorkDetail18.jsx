import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts18 } from "../../api/firebase";

export default function WorkDetail18() {
  const {
    isLoading,
    error,
    data: products18,
  } = useQuery(["products18"], getProducts18);

  console.log(products18);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";
  let image4_2 = "";
  let image5 = "";
  let image5_2 = "";
  let image6 = "";
  // let image7 = "";
  let image8 = "";
  let image8_2 = "";
  let image9 = "";

  if (products18) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products18);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "51eb5d2d-47e4-4bd8-93ba-1c2dcbfbb42b"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "b500a229-a223-4aeb-aac9-00796f06b970"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7cf61f09-1ec8-4bb0-a292-d1b520904a5b"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "a36a1fa0-083f-42d3-be35-8065c653de2b"
      );
    image4 = image4Obj[0].image;
    const image4_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "9e651228-9af0-46d2-8098-771bef9dd63d"
      );
    image4_2 = image4_2Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6234d3f1-a4b5-4d08-b160-d2170058b524"
      );
    image5 = image5Obj[0].image;
    const image5_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "8d6c449f-3e86-4d3d-bb5d-47250ede8ce1"
      );
    image5_2 = image5_2Obj[0].image;
    const image6Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "1270d7f8-30d1-4cdd-91ca-0c0f3c17904f"
      );
    image6 = image6Obj[0].image;
    // const image7Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "741231d0-d36f-4074-9d40-6db4ca505384"
    //   );
    // image7 = image7Obj[0].image;
    const image8Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "afd8888c-ea58-468b-aa7c-6d47d931a92d"
      );
    image8 = image8Obj[0].image;
    const image8_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "8a49fffe-7cd5-4e7a-a5ce-babd4d89513f"
      );
    image8_2 = image8_2Obj[0].image;
    const image9Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "a668b282-c300-471e-9607-62c17610a89e"
      );
    image9 = image9Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img className="mb-5" src={image1} alt="1.A letter, book(2016).JPG" />
      <img
        className="mb-5"
        src={image2}
        alt="2.어떤 의식1, 57x77cm, pencil on paper, 2015.jpg"
      />
      <img
        className="mb-5"
        src={image3}
        alt="3.어떤 의식2, 57x77cm, pencil on paper, 2015.jpg"
      />
      <img
        className="mb-5"
        src={image4}
        alt="4.어떤 의식3, 70x300cm, pencil on paper, 2015.jpg"
      />
      <img className="mb-5" src={image4_2} alt="4-1. Exhibition view.jpg" />
      <img
        className="mb-5"
        src={image5}
        alt="5.상(像)에 대한 드로잉,20x110cm,장지에 채색,2016.JPG"
      />
      <img
        className="mb-5"
        src={image5_2}
        alt="5.상象, 57x77cm, pencil on paper, 2015.jpg"
      />
      <img
        className="mb-5"
        src={image6}
        alt="6.상象, 120x240cm, pigment on Hanji 2015.jpg"
      />
      {/* <img
        className="mb-5"
        src={image7}
        alt="7. Perception Lab, Exhibition View(2016).jpg"
      /> */}
      <img
        className="mb-5"
        src={image8}
        alt="8. Perception Lab, Exhibition View(1).JPG"
      />
      <img
        className="mb-5"
        src={image8_2}
        alt="8. Perception Lab, Exhibition View.JPG"
      />
      <img
        className="mb-5"
        src={image9}
        alt="9. Perception Lab, Exhibition View.JPG"
      />
    </>
  );
}
