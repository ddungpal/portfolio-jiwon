import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts5 } from "../../api/firebase";

export default function WorkDetail5() {
  const {
    isLoading,
    error,
    data: products5,
  } = useQuery(["products5"], getProducts5);

  // let image1 = "";
  let image2 = "";
  let video1 = "";
  // let video2 = "";

  console.log(products5);
  if (products5) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products5);
    // const image1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "983ef1d0-f471-4f64-b2df-f9ff4929af4b"
    //   );
    // image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "735ae30a-1dac-4c13-88a5-408ad1a233e9"
      );
    image2 = image2Obj[0].image;
    const video1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "393bdf8d-28c8-4add-b002-5435de680a2d"
      );
    video1 = video1Obj[0].image;
    // const video2Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "8afb9ed3-992a-4a63-8b56-7dc76fdf0893"
    //   );
    // video2 = video2Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <video className="mb-5" src={video1} controls autoPlay></video>
      <div className="video-container mb-5">
        <iframe
          id="ytplayer"
          type="text/html"
          src="https://www.youtube.com/embed/dPu0z44fFGQ?rel=0"
          frameborder="0"
          allowfullScreen="allowfullscreen"
          title="YouTube video player"
          width="640"
          height="390"
        ></iframe>
      </div>
      {/* <img
        className="mb-5"
        src={image1}
        alt="1.Dialing,sound_interaction,_installation,AR.jpg"
      /> */}
      <img className="mb-5" src={image2} alt="2.Dialing,_Exhibiton_view.jpg" />
      {/* <video className="mb-5" src={video2} controls></video> */}
    </>
  );
}
