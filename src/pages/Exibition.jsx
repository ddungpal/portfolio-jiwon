import React from "react";
import Topbar from "../components/Topbar";
import { useQuery } from "@tanstack/react-query";
import { getProducts1 } from "../api/firebase";

export default function Exibition() {
  const {
    isLoading,
    error,
    data: products1,
  } = useQuery(["products1"], getProducts1);

  let video1 = "";
  let image1 = "";
  let image2 = "";

  if (products1) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products1);
    const video11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "fc1ce811-aca5-4f87-93d5-a7a8e1231928"
      );
    video1 = video11Obj[0].image;
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7ef8932e-d791-4ef8-9039-22acc5b85b0c"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "0023985e-72f6-4f48-950f-96000f83b6fd"
      );
    image2 = image2Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      <Topbar />
      <div className="container mx-auto flex-column items-center justify-between mt-10">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="p-5">
          {/* <video
            className="mb-10"
            src={video1}
            autoPlay
            muted
            loop
            playsInline
          ></video> */}
          <video className="mb-10" src={video1} autoPlay muted loop playsInline></video>
        </div>
        <div className="p-5">
          <p className="mb-10 mt-5 text-base font-bold">
            최지원 개인전 {"<"}춤추는 내향성{">"}
          </p>
          <p className="text-sm">
            플루리포텐트 아트스페이스 (서울 종로구 효자로 9길 30)
          </p>
          <p className="mb-10 text-sm">
            2023년 7월 14-27일 1-6pm (월요일 휴관)
          </p>
          <img className="mb-10" src={image1} alt="1.jpg" />
          <p className="text-sm line-clamp text-justify mb-10">
            최지원은 서울에서 활동중인 시각예술가로, '순간의 인상'을 모티브로
            작업한다. 주로 회화를 통해 쉽게 정의할 수 없는 감각의 행간을
            탐구한다. 이번 전시에서 화면의 자율성, 미숙한 붓질, 연약한 색에
            집중하며 회화를 통해 일상의 감각을 함축하여 이야기한다.
          </p>
          <p className="text-sm mb-10 underline">전시서문</p>
          <p className="text-sm line-clamp text-justify mb-10">
            최지원 작가의 세번째 개인전 {"<"}춤추는 내향성{">"}에서는
            희미해지면서 명료해지는 회화들이 전시된다. 이전 작업에서 작가가
            순간의 인상을 축으로 심리의 표현에 집중해왔었다면, 이번 전시에서는
            작가를 둘러싼 환경의 모습들을 옮긴다. 작가는 살아있다는 감각을
            불러일으키는 생경한 장면들을 지극히 일상적인 경험에서 발견한다. 오랜
            친구를 우연히 만난 순간, 잠깐의 쉼의 여정, 가족과 함께한 시간들은
            작품안에서 가장 편안한 방식으로 선명해진다.
          </p>
        </div>
        <div className="p-5">
          <img className="" src={image2} alt="2.jpg" />
        </div>
      </div>
    </>
  );
}
