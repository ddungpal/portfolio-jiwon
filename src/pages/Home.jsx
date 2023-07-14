import React from "react";
import TopbarBg from "../components/TopbarBg";
import { useQuery } from "@tanstack/react-query";
import { getHome } from "../api/firebase";

export default function Home() {
  const { isLoading, error, data: homeImg } = useQuery(["homeImg"], getHome);

  let image1 = "";
  let image2 = "";
  let image3 = "";

  console.log(homeImg);
  if (homeImg) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(homeImg);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (img) => img.id === "bf8fa6eb-8f69-440c-a2d7-7b4883c6fbed"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (img) => img.id === "873a07cc-9dfa-458c-9819-516e44293f01"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (img) => img.id === "33f962b7-6ac4-48a0-8fa8-6430512e9ca0"
      );
    image3 = image3Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <TopbarBg />
      </div>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </>
  );
}
