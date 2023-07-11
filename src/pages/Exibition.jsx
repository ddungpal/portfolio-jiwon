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

  console.log(products1);
  let video1 = "";
  // let image1 = "";
  // let image2 = "";

  if (products1) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products1);
    const video11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "3ece5ab4-96fa-4941-8fbf-68c3ea22ae98"
      );
    video1 = video11Obj[0].image;
    // const image1Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "7ef8932e-d791-4ef8-9039-22acc5b85b0c"
    //   );
    // image1 = image1Obj[0].image;
    // const image2Obj =
    //   productsOri &&
    //   productsOri.filter(
    //     (product) => product.id === "0023985e-72f6-4f48-950f-96000f83b6fd"
    //   );
    // image2 = image2Obj[0].image;
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
          <video
            className="mb-10 w-full"
            src={video1}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="p-5">
          <p className="mb-10 text-base font-bold">
            최지원 개인전 《 춤추는 내향성 》
          </p>
          <p className="text-sm">2023. 7. 14. - 7. 27.</p>
          <p className="mb-5 text-sm">화-일 1-6pm [월요일 휴관]</p>
          <p className="text-sm">플루리포텐트 아트 스페이스</p>
          <p className="mb-10 text-sm">
            서울 종로구 효자로 9길 30(창성동) 지층 101호
          </p>
          {/* <img className="mb-10" src={image1} alt="1.jpg" />
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
          </p> */}
        </div>
        {/* <div className="p-5 flex">
          <div className="w-2/4">
            <img className="" src={image2} alt="2.jpg" />
          </div>
          <div className="w-2/4 p-5">
            <p className="text-sm mb-10 underline">작가노트</p>
            <p className="text-sm mb-20">
              "막막할 때, 사랑하는 순간들을 떠올려본다.
              <br />
              그리고 가장 편안한 선을 긋는다.
              <br />
              사랑하는 순간들에는 장식이 필요없다."
            </p>
            <p className="text-sm mb-5">#내향성</p>
            <p className="text-sm line-clamp text-justify mb-10">
              '회화는 어떤 색깔을 갖을까?' 라는 질문을 시작으로, 하얀 화면을
              바라본다. 회화의 성격이 궁금하다. 궁금증의 단초는 기호에 의해
              선택된 색, 형상, 그리고 끊임없는 상상에 있다.
            </p>
            <p className="text-sm mb-5">#텅빈 밀도</p>
            <p className="text-sm line-clamp text-justify mb-10">
              필요성이 다분한 이미지들 사이에서 내가 추구하는 화면은 사용하는
              색의 범위 좁힘, 단순하게 보기, 경계 없애기를 통해 의도된 우연성을
              만나는 경험이다. 경험의 밀도가 오히려 빈 공간을 주는데, 이는
              형태없음이 아니라 미숙한 형태를 건너 가능해진다.
            </p>
            <p className="text-sm mb-5">#부드러운 춤</p>
            <p className="text-sm line-clamp text-justify mb-10">
              크기와 장소 등 여건을 개의치 않고 우연해지는 상태를 바라본다. 가장
              편안한 선을 그은 후, 장식이 필요없는 순간들을 재료로 하면 화면
              위에 자율성이 부여된다.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
