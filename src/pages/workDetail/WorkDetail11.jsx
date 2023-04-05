import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts11 } from "../../api/firebase";

export default function WorkDetail11() {
  const {
    isLoading,
    error,
    data: products11,
  } = useQuery(["products11"], getProducts11);

  console.log(products11);
  let image1 = "";
  // let image2 = "";
  // let image3 = "";

  if (products11) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products11);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "98d0f284-0657-474c-a2a8-83f4b224cc16"
      );
    image1 = image1Obj[0].image;
    // const image2Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "c166b63c-c516-4fb8-b336-88b70deef057"
    //   );
    // image2 = image2Obj[0].image;
    // const image3Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "21141508-dd29-42e0-a8fd-3520fd47d4ba"
    //   );
    // image3 = image3Obj[0].image;
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
        alt="1.Siren, Fitting room exhibition view.jpg"
      />
      {/* <img
        className="mb-5"
        src={image2}
        alt="2.Siren_drawing,21x93cm, mixed media, 2016.jpg"
      />
      <img
        className="mb-5"
        src={image3}
        alt="사이렌,혼합매체,70x267cm,2016i.jpg"
      /> */}
    </>
  );
}
