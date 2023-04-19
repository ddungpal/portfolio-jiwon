import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts13 } from "../../api/firebase";

export default function WorkDetail13() {
  const {
    isLoading,
    error,
    data: products13,
  } = useQuery(["products13"], getProducts13);

  console.log(products13);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  // let video1 = "";

  if (products13) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products13);
    // const video1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "a3da94b8-a531-4f3d-9eb3-b6e9517d6cdd"
    //   );
    // video1 = video1Obj[0].image;
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "67b2531f-6b09-458a-9a47-b8729a1ef53e"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "b6a27627-f6ea-40cd-8f4c-0268d899d358"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "0fba11bb-0eaf-4009-bd14-7610a403ced8"
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
          2020, AHACOLLECTIVE, 'AN UTOPIA AS AN ECOSYSTEM : PREFERABLE FUTURE'
          <br />
          ‌VR / Performance, sound installation
        </p>
        <p className="p-2 mb-5 line-clamp text-justify">
          ‌‌‘An Utopia as an Ecosystem: Preferable future’ is a media
          installation work that inducing to imagine a utopia on the present age
          motivated on &lt;Mongyudowondo&gt;. With appearing scattered particles
          of a peach surrounding SCENCE3: An asepsis space, it is overlapped
          with SCENCE1: A mirage space and the space of utopia is circulated.
          <br />
          <br />
          #SCENE1: A mirage space, projection mapping, installation On this
          scene, AHAcollective throw a question about the universal utopia
          metaphored to ‘Peach’ which is extracted from ‘Dohwawon’ which is
          represented as a utopia in oriental traditional culture.
          <br />
          <br />
          #SCENE2:A fastidious space, performance The movement for an utopia
          started from doing disinfection bring human behavior that obsessed for
          a sterilize in mind on the present age.
          <br />
          <br />
          #SCENE3:An asepsis space, projection mapping, installation In an
          asepsis space made of UV light, AHAcollective proposed for audience to
          recognize a distopia which embedded in utopia. An asepsis space as an
          alternative utopia is being area that human cannot alive as numerical
          value of UV rays increasing. Through these switch of 3 scenes, we
          expressed space-time of utopia and intended to look at the possibility
          of changing meaning of utopia in order to point of view we have on
          circumstances which can occur ambidextrous matters.
        </p>
      </div>
      <img
        className="mb-5"
        src={image1}
        alt="1신기루의 공간, 프로젝션 맵핑, 가변설치.png"
      />
      <img className="mb-5" src={image2} alt="2 결벽의 공간, 퍼포먼스.png" />
      <img
        className="mb-5"
        src={image3}
        alt="3 멸균의 공간, 프로잭션 맵핑, 가변설치.jpeg"
      />
      {/* <video className="mb-5" src={video1} controls></video> */}
      <div className="video-container mb-5">
        <iframe
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/yoWppIOFMhA?rel=0"
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
