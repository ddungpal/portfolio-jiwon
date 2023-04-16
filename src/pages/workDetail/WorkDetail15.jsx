import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts15 } from "../../api/firebase";

export default function WorkDetail15() {
  const {
    isLoading,
    error,
    data: products15,
  } = useQuery(["products15"], getProducts15);

  console.log(products15);
  // let image1 = "";
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
  let image12 = "";
  let image13 = "";

  if (products15) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products15);
    // const image1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "a1166ae5-cd29-412d-af8d-707710eb7316"
    //   );
    // image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "d16593c4-efce-451f-83f5-585b630335f1"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "49d45d01-0d50-4835-a47c-9b3a72a8c6e1"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "48c687a5-9d30-47af-8b73-ba6cf384c64d"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "876ff6af-a06a-4e88-8b04-5c3f4e1e574c"
      );
    image5 = image5Obj[0].image;
    const image6Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "26d7bdaf-eb60-4029-b7c4-9beccc3878a0"
      );
    image6 = image6Obj[0].image;
    const image7Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2c77514b-feda-4da5-a3d8-db91f4909125"
      );
    image7 = image7Obj[0].image;
    const image8Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "042b1253-2f6b-4c3f-a707-a0b761e4d75d"
      );
    image8 = image8Obj[0].image;
    const image9Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "bb8523e3-1d70-4a00-b12d-228fa7837fad"
      );
    image9 = image9Obj[0].image;
    const image10Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "487bf047-9406-4295-8477-87fb90eb693a"
      );
    image10 = image10Obj[0].image;
    const image11bj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "0ac08e92-ff34-4001-bfe6-3f93279c0de1"
      );
    image11 = image11bj[0].image;
    const image12Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "63789b51-2bcc-4e13-b54a-a08f9947b308"
      );
    image12 = image12Obj[0].image;
    const image13Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "313c94ef-bdc0-4284-aa5f-0fa8fbc1bca6"
      );
    image13 = image13Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {/* <img className="mb-5" src={image1} alt="1.Untitled,2018.jpg" /> */}
      <img className="mb-5" src={image2} alt="2.Untitled,2018.jpg" />
      <img
        className="mb-5"
        src={image3}
        alt="3.Hyaline,67x67cm, pigment on Hanji, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image4}
        alt="4.Hyaline,67x67cm, pigment on Hanji, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image5}
        alt="5.Hyaline,100x75cm, pigment on Hanji, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image6}
        alt="6.Hyaline,100x75cm, pigment on Hanji, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image7}
        alt="7. Palette, 34x53cm, pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image8}
        alt="8. Palette, 34x53cm, pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image9}
        alt="9. Palette, 34x53cm, pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image10}
        alt="10. Palette, 34x53cm, pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image11}
        alt="11. Palette, 34x53cm, pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image12}
        alt="12. Supernumerary Rainbow, Exhibition view, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image13}
        alt="13. Supernumerary Rainbow, Exhibition view, 2018.jpg"
      />
    </>
  );
}
