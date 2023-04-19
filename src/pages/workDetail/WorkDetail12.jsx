import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts12 } from "../../api/firebase";

export default function WorkDetail12() {
  const {
    isLoading,
    error,
    data: products12,
  } = useQuery(["products12"], getProducts12);

  console.log(products12);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  // let video1 = "";

  if (products12) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products12);
    // const video1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "105ea9f4-7063-4f5e-97a1-a55b5346bf00"
    //   );
    // video1 = video1Obj[0].image;
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "934c59d0-ab7e-4a29-ba1f-9c19a10e1338"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "c647d75a-5583-4310-abca-2f6e4cf57751"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "a35148a3-1139-4a9e-8937-c344c41c8b3b"
      );
    image3 = image3Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="">
        <p className="p-2 mb-3 text-xl font-bold">
          2019, ILWOLOBONG, Sound interaction
        </p>
        <p className="p-2 mb-5 line-clamp text-justify">
          日月五峯2019 is a media-interaction work based on royal paintings of
          the Joseon Dynasty, 日月五峯圖, which unravel the symbolic meaning of
          日月五峯圖 from the perspective of the contemporary characteristic.
          日月五峯圖 , consisting of five peaks and yin and yang (陰陽),
          symbolizing the sun and moon, and the world, was installed right
          behind the throne, symbolizing the authority and dignity of the king.
          With the sun and the moon floating at the same time, the space where
          five magnificent peaks can be gathered in one place represents
          ‘authority-power’. Based on this traditional design, AHA collective
          asked how ‘authority-power’ is expressed in modern society and tried
          to show it in modelling.
          <br /><br />
          日月五峯2019 begins with the generation of fine light and sound in a
          space in which nothing is visible. With red and white light repeatedly
          embodied in the time when the sun and moon coexist, the audience goes
          through a rather curved terrain. When faced with five waves located
          around the terrain, the response of the sensors results in a different
          sound. It is a collection of whispers of "unfounded remarks,"
          including the scene of 日月五峯圖 , which witnessed the ups and downs
          of Joseon and modern history, the unspecified number of protests
          taking place in Gwanghwamun Square in front of Gyeongbok Palace, and
          anonymous comments directed at certain figures. These sounds, which
          are reproduced irregularly, are reproductions of ‘Current Power’.
          <br /><br />
          We hope to experience the constant alternating forces (Energy, Power)
          according to the coordinates by using the wave, sound and light tools
          that respond according to the individual's position, and to be able to
          think about their position and direction as the person who performs
          it.
        </p>
      </div>
      {/* <video className="mb-5" src={video1} controls autoPlay></video> */}
      <img className="mb-5" src={image1} alt="일월오봉.jpeg" />
      <img className="mb-5" src={image2} alt="일월오봉1.jpeg" />
      <img className="mb-5" src={image3} alt="일월오봉2.jpeg" />
      <div className="video-container mb-5">
        <iframe
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/jIT4EmmfMrU?rel=0"
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
          src="https://www.youtube.com/embed/tPHLitD-W6o?rel=0"
          frameborder="0"
          allowfullScreen="allowfullscreen"
          title="YouTube video player"
          width="640"
          height="390"
        ></iframe>
      </div>
    </>
  );
}
