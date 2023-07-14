import React from "react";
import TopbarBg from "../components/TopbarBg";
import { useQuery } from "@tanstack/react-query";
import { getHome } from "../api/firebase";

export default function Home() {
  const { isLoading, error, data: homeImg } = useQuery(["homeImg"], getHome);

  let image1 = "";

  console.log(homeImg);
  if (homeImg) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(homeImg);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (img) => img.id === "82a220f0-6112-4236-9518-4c34b0bf39b0"
      );
    image1 = image1Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      {isLoading && <p></p>}
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
      {/* <div
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
      ></div> */}
    </>
  );
}
