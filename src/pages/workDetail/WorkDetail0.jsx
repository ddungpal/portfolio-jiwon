import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts0 } from "../../api/firebase";

export default function WorkDetail0() {
  const {
    isLoading,
    error,
    data: products0,
  } = useQuery(["products0"], getProducts0);

  let image1 = "";
  let video1 = "";

  if (products0) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products0);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "26cffe0a-745d-4d16-901c-52ff58b5158a"
      );
    image1 = image1Obj[0].image;
    const video1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "d4be4db4-2bea-4314-a7f2-7c80ff0c8dbe"
      );
    video1 = video1Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="container mx-auto px-5 lg:px-1">
        <div className="mt-5">
          <p className="lg:w-3/5 lg:mx-auto mb-3 text-xl font-bold">Yellow Forest</p>
          <div className="lg:w-3/5 lg:mx-auto">
            <img
              className="project__img mb-2"
              src={image1}
              alt="Yellow Forest still cut"
            />
          </div>
          <p className="text-gray-400 text-center mb-5">
            “Yellow Forest” still cut
          </p>
          <video
            className="mb-5 mx-auto"
            src={video1}
            controls
            autoPlay
            playsInline
          ></video>
          <p className="text-gray-400 text-center mb-10">
            “Yellow Forest” teaser
          </p>
          <div className="lg:w-3/5 lg:mx-auto mb-10">
            <p className="line-clamp text-justify">
              <span className="font-bold mr-2">Choi Ji Won</span>
              <span>
                is a visual artist who works in drawing, painting, and
                multidisciplinary arts. Her work may seem simple and empty, but
                there’s an energy and rhythm about to flow somewhere. Her
                abstract art quietly seeps in your mind and lingers.
              </span>
            </p>
            <p className="line-clamp text-justify">
              <span className="font-bold mr-2">“Yellow Forest”</span>
              <span>
                is a piece inspired by the forest. As grass sways in the wind,
                it conjures the moment of becoming one with nature, with
                indistinct lumps representing one with nature, with indistinct
                lumps representing people seen among the grass. It signifies the
                artist’s experience in the still yet dynamic forest, told
                through brush strokes as the sensations stay concentrated in the
                tips of her fingers.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
