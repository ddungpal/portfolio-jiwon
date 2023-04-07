import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts7 } from "../../api/firebase";

export default function WorkDetail7() {
  const {
    isLoading,
    error,
    data: products7,
  } = useQuery(["products7"], getProducts7);

  let image1 = "";
  let image2 = "";
  // let image3 = "";
  let image4 = "";
  let image5 = "";
  // let video1 = "";

  console.log(products7);
  if (products7) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products7);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "6f9b112f-5708-44b9-aecd-64540bb55b47"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "9780d670-6d53-4bf8-82f2-9f6794f4b7b7"
      );
    image2 = image2Obj[0].image;
    // const image3Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "782fffaa-0af3-4cda-8838-8649d93c2261"
    //   );
    // image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "fe650c1d-aad4-4669-95b3-40b573b82911"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "ec883f2c-9af3-4476-b6fb-40091845cad6"
      );
    image5 = image5Obj[0].image;
    // const video1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "393bdf8d-28c8-4add-b002-5435de680a2d"
    //   );
    // video1 = video1Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="video-container mb-5">
        <iframe
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/y-BdxBqaTlo?rel=0"
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
          src="https://www.youtube.com/embed/9Q3qdXMEZ88?rel=0"
          frameborder="0"
          allowfullScreen="allowfullscreen"
          title="YouTube video player"
          width="640"
          height="390"
        ></iframe>
      </div>
      {/* <video className="mb-5" src={video1} controls autoPlay></video> */}
      <img
        className="mb-5"
        src={image1}
        alt="2.‘우연히, Phasing’, projection mapping, 2022"
      />
      <img
        className="mb-5"
        src={image2}
        alt="3. ‘0과 1의 Pulse’, installation, 2022"
      />
      {/* <img
        className="mb-5"
        src={image3}
        alt="4. ‘0과 1의 Pulse’, installation, 2022"
      /> */}
      <img
        className="mb-5"
        src={image4}
        alt="5. ‘0과 1의 Pulse’, installation, 2022"
      />
      <img
        className="mb-5"
        src={image5}
        alt="6. ‘나무조각들을 위한 손’, 4channel video, 2022"
      />
    </>
  );
}
