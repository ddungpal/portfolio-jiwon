import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts16 } from "../../api/firebase";

export default function WorkDetail16() {
  const {
    isLoading,
    error,
    data: products16,
  } = useQuery(["products16"], getProducts16);

  console.log(products16);
  // let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";
  let image5 = "";
  let image5_2 = "";
  // let image6 = "";
  let image7 = "";
  let image8 = "";
  let image9 = "";
  let image10 = "";
  let image11 = "";
  let image12 = "";
  let image13 = "";
  let image14 = "";
  let image15 = "";
  let image16 = "";
  let image17 = "";
  let image18 = "";

  if (products16) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products16);
    // const image1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "1eb4c534-de9a-4c79-84ba-580021c247aa"
    //   );
    // image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "963db902-98d2-4544-b683-d775c01312c3"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "0207e519-8988-4c01-b6ee-86866384a976"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2394d8c5-b39a-4f58-b0c9-d76eec753767"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6df09113-49f1-4be3-bb83-b24ae5bfe446"
      );
    image5 = image5Obj[0].image;
    const image5_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "ac503fe5-70bd-4903-94ba-c1141bb33ff4"
      );
    image5_2 = image5_2Obj[0].image;
    // const image6Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "403fac96-7e8c-423f-8902-f93e1ba993fe"
    //   );
    // image6 = image6Obj[0].image;
    const image7Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "17326248-5db3-4ce7-8c8d-2ceb5f2c5b77"
      );
    image7 = image7Obj[0].image;
    const image8Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6ef79800-285f-4ef9-a1a8-eb0f997f269c"
      );
    image8 = image8Obj[0].image;
    const image9Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7f12d929-819c-4bd1-bdb0-392c08fbb9ce"
      );
    image9 = image9Obj[0].image;
    const image10Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "369f4408-8191-465f-96f7-0fa57393cdb3"
      );
    image10 = image10Obj[0].image;
    const image11bj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "87113bb3-3030-4cd6-bc25-9b20aa5564d4"
      );
    image11 = image11bj[0].image;
    const image12Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6d68f597-abd5-4d75-8999-8c959ac9c878"
      );
    image12 = image12Obj[0].image;
    const image13Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "bb9af63c-57f9-47e5-adec-262ae19b9b20"
      );
    image13 = image13Obj[0].image;
    const image14Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "3963ac00-3081-4d15-98ff-e16ba753c9cf"
      );
    image14 = image14Obj[0].image;
    const image15Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "3c35d2d5-e422-44e8-973b-1bf8e61da382"
      );
    image15 = image15Obj[0].image;
    const image16Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "17e1b299-2f2a-4c1a-8eb8-d2f447981262"
      );
    image16 = image16Obj[0].image;
    const image17Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "20d69a86-42ed-421b-843d-c5ff546bb484"
      );
    image17 = image17Obj[0].image;
    const image18Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2e944590-eb69-4c7a-b83f-7c5b34842b9b"
      );
    image18 = image18Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <img
        className="mb-5"
        src={image5}
        alt="5.Yellow Forest, 20x20cm, pigment on Hanji.jpg"
      />
      {/* <img
        className="mb-5"
        src={image1}
        alt="1.낀 사람,21.5x16.5cm,pigment on Hanji.jpg"
      /> */}
      <img
        className="mb-5"
        src={image2}
        alt="2.이름없는 대화,131x163cm,pigment on Hanji.jpg"
      />
      <img
        className="mb-5"
        src={image3}
        alt="3.바람,131x163cm,pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image4}
        alt="4.와유(臥遊),120x120cm,pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image5_2}
        alt="5.몇그램의 나, 23x30cm, pigment on Hanji,2018.jpg"
      />
      {/* <img
        className="mb-5"
        src={image6}
        alt="6.Yellow Forest, 20x20cm, pigment on Hanji.jpg"
      /> */}
      <img
        className="mb-5"
        src={image7}
        alt="7.마을, 23x30cm, pigment on Hanji, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image8}
        alt="8.Untitled, 30x23cm, pigment on Hanji, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image9}
        alt="9.기쁨의 요소들,53x72.7cm,pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image10}
        alt="10.기쁨의 요소들1,53x72.7cm,pigment on Hanji,2018.jpg"
      />
      <img
        className="mb-5"
        src={image11}
        alt="11.Hyaline, 75x100cm, pigment on Hanji.jpg"
      />
      <img
        className="mb-5"
        src={image12}
        alt="12.Untitled, 20x20cm, pigment on Hanji, 2018.jpg"
      />
      <img
        className="mb-5"
        src={image13}
        alt="13.Sunset, 34x53cm, pigment on Hanji.jpg"
      />
      <img
        className="mb-5"
        src={image14}
        alt="14.Untitled, 34x53cm, pigment on Hanji.jpg"
      />
      <img
        className="mb-5"
        src={image15}
        alt="15.Moment,38.5x46cm,pigment on Hanji,2016.jpg"
      />
      <img
        className="mb-5"
        src={image16}
        alt="16. night,38.5x46cm.pigment on Hanji,2016.jpg"
      />
      <img className="mb-5" src={image17} alt="17.Exhibition View.jpg" />
      <img className="mb-5" src={image18} alt="18.Exhibition View.jpg" />
    </>
  );
}
