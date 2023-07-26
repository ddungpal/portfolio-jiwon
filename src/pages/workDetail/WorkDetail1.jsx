import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts1 } from "../../api/firebase";

export default function WorkDetail1() {
  const {
    isLoading,
    error,
    data: products1,
  } = useQuery(["products1"], getProducts1);

  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";
  let image5 = "";
  // let image6 = "";
  let image7 = "";
  let image8 = "";
  let image9 = "";
  let image10 = "";
  let image11 = "";
  let image12 = "";

  console.log(products1);
  if (products1) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products1);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "59b6c75b-53fc-41a0-8e08-9a450cf9c2c5"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "b66f2588-b011-419f-a055-56397b7d1804"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "273d58e6-615c-418b-93bb-45cebe581fde"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "725cd954-de3d-45b8-8818-08300c65baf4"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "73ae8728-65dd-4b84-9916-7e5cf10127d6"
      );
    image5 = image5Obj[0].image;
    // const image6Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "0c7756be-4aa2-4c85-82a5-d8a61a148973"
    //   );
    // image6 = image6Obj[0].image;
    const image7Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "b755ab19-b420-4570-9cc1-e034d18ad07b"
      );
    image7 = image7Obj[0].image;
    const image8Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "d60067b3-d5ef-4ee0-b85f-258f2dd12e19"
      );
    image8 = image8Obj[0].image;
    const image9Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "00ecd2c6-7e22-45b7-89ea-499800a87e62"
      );
    image9 = image9Obj[0].image;
    const image10Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "33f60492-f939-4fb1-b428-e4c258b67068"
      );
    image10 = image10Obj[0].image;
    const image11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "abcc77e4-0a3b-48fc-881d-a3e684988882"
      );
    image11 = image11Obj[0].image;
    const image12Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "aa042a7e-b673-4a54-9041-5b306915cf3a"
      );
    image12 = image12Obj[0].image;
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
          alt="2023, ‘춤추는 내향성’, 163x262cm, 장지에 피그먼트"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          2023, ‘춤추는 내향성’, 163x262cm, 장지에 피그먼트
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image2}
          alt="2023, ‘A Camper’, 151x100cm, pigment on Jangi"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          2023, ‘A Camper’, 151x100cm, pigment on Jangi
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image3}
          alt="2023, ‘성냥갑’, 31x42.5cm, 장지에 피그먼트"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          2023, ‘성냥갑’, 31x42.5cm, 장지에 피그먼트
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image4}
          alt="2023, ‘Woodnotes’, 24x33cm, pigment on Jangi"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          2023, ‘Woodnotes’, 24x33cm, pigment on Jangi
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image5}
          alt="2023, ‘선율’, 18x26cm, 장지에 피그먼트"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          2023, ‘선율’, 18x26cm, 장지에 피그먼트
        </span>
      </div>
      {/* <div className="mb-5 project">
        <img
          className="project__img"
          src={image6}
          alt="2023, ‘가벼운 산책’, 42.5x31cm, 장지에 피그먼트"
        />
        <span className="project__description_vertical text-[8px] lg:text-base lg:h-1/20">
          2023, ‘가벼운 산책’, 42.5x31cm, 장지에 피그먼트
        </span>
      </div> */}
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image7}
          alt="2023, ‘여름에 밤이슬을 막는 덮개’, 53x34cm, 장지에 피그먼트"
        />
        <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          2023, ‘여름에 밤이슬을 막는 덮개’, 53x34cm, 장지에 피그먼트
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image8}
          alt="2023, ‘나른한 오후’, 34x53cm, 장지에 피그먼트"
        />
        <span className="project__description_vertical text-[8px] lg:text-base lg:h-1/20">
          2023, ‘나른한 오후’, 34x53cm, 장지에 피그먼트
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image9}
          alt="2023, ‘A Soft Lightpurple’, 53x45.5cm, pigment on Jangi"
        />
        <span className="project__description_vertical text-[8px] lg:text-base lg:h-1/20">
          2023, ‘A Soft Lightpurple’, 53x45.5cm, pigment on Jangi
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image10}
          alt="2023, ‘마중’, 34x53cm, 장지에 피그먼트"
        />
        <span className="project__description_vertical text-[8px] lg:text-base lg:h-1/20">
          2023, ‘마중’, 34x53cm, 장지에 피그먼트
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image11}
          alt="2023, ‘A Co-worker’, 92.3x60cm, pigment on Jangi"
        />
        <span className="project__description_vertical text-[8px] lg:text-base lg:h-1/20">
          2023, ‘A Co-worker’, 92.3x60cm, pigment on Jangi
        </span>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image12}
          alt="2023, ‘A Co-worker’, 53x45.5cm, pigment on Jangi"
        />
        <span className="project__description_vertical text-[8px] lg:text-base lg:h-1/20">
          2023, ‘A Co-worker’, 53x45.5cm, pigment on Jangi
        </span>
      </div>
      {/* <p className="mb-5 italic text-slate-400 text-right text-sm">사진: @heoyu_photograph</p> */}
    </>
  );
}
