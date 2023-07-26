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
  let image1 = "";
  let image2 = "";
  let image2_1 = "";
  let image2_2 = "";
  let image3 = "";
  let image4 = "";
  let image5 = "";
  let image6 = "";
  let image7 = "";
  let image8 = "";
  let image9 = "";
  let image10 = "";
  let image11 = "";
  let image12 = "";
  let image12_1 = "";
  let image13 = "";
  let image14 = "";
  let image17 = "";
  let image18 = "";
  let image19 = "";

  if (products1) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products1);
    const video11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "3ece5ab4-96fa-4941-8fbf-68c3ea22ae98"
      );
    video1 = video11Obj[0].image;
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "aaf5ea10-6f2d-4e82-a2d0-5a8a0330eab1"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "5177b4a2-ba38-4e5f-9ed4-7e1e9e6eb0e8"
      );
    image2 = image2Obj[0].image;
    const image2_1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "96f6b2a9-d0a4-4cdf-af95-615e7cd4e689"
      );
    image2_1 = image2_1Obj[0].image;
    const image2_2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2ff1e72d-08d8-44c5-afd5-b43551de4ff6"
      );
    image2_2 = image2_2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "81f37c1a-0470-47f7-99be-738a1bed118d"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2e49befd-a185-44ee-b14a-913f568be691"
      );
    image4 = image4Obj[0].image;
    const image5Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "b65c7a27-9a25-4d19-9c5f-a94fa9cdb252"
      );
    image5 = image5Obj[0].image;
    const image6Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "036a6f2f-0692-4e79-a59c-ba7d87c26380"
      );
    image6 = image6Obj[0].image;
    const image7Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "362092d5-1766-4790-ab43-9fc36cd86e86"
      );
    image7 = image7Obj[0].image;
    const image8Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "5684b0f9-f548-4e69-a9c5-230f8f8d88f6"
      );
    image8 = image8Obj[0].image;
    const image9Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "8879ba86-1d60-4db9-b486-e91ba52e07e2"
      );
    image9 = image9Obj[0].image;
    const image10Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "202d3374-731a-42b9-8852-e4f111127e22"
      );
    image10 = image10Obj[0].image;
    const image11Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "54190d15-6613-452c-b737-d20ab0e7fa9a"
      );
    image11 = image11Obj[0].image;
    const image12Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "46fdc529-46be-4d1a-836d-90a97b457078"
      );
    image12 = image12Obj[0].image;
    const image12_1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "4f258000-a8bf-4e0d-95fd-8c0d455b4d10"
      );
    image12_1 = image12_1Obj[0].image;
    const image13Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "c9e8d6a4-8a6a-468f-ba33-291d51df4431"
      );
    image13 = image13Obj[0].image;
    const image14Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "88afc8c2-d7f8-4aba-89f0-2dde338b1f0a"
      );
    image14 = image14Obj[0].image;
    const image17Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "30287aec-ab27-49d2-8601-f5afb38ba12b"
      );
    image17 = image17Obj[0].image;
    const image18Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "3951b88c-33a8-40f8-955a-d070f9ed6be8"
      );
    image18 = image18Obj[0].image;
    const image19Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "8d299097-3c40-4f31-b6b9-b3f57a33297d"
      );
    image19 = image19Obj[0].image;
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
        <img className="p-5 mb-10" src={image1} alt="1.jpg" />
        <img className="p-5 mb-10" src={image2} alt="2.jpg" />
        <img className="p-5 mb-10" src={image2_1} alt="2_1.jpg" />
        <img className="p-5 mb-10" src={image2_2} alt="2_2.jpg" />
        <img className="p-5 mb-10" src={image3} alt="3.jpg" />
        <img className="p-5 mb-10" src={image4} alt="4.jpg" />
        <img className="p-5 mb-10" src={image5} alt="5.jpg" />
        <img className="p-5 mb-10" src={image6} alt="6.jpg" />
        <img className="p-5 mb-10" src={image7} alt="7.jpg" />
        <img className="p-5 mb-10" src={image8} alt="8.jpg" />
        <img className="p-5 mb-10" src={image9} alt="9.jpg" />
        <img className="p-5 mb-10" src={image10} alt="10.jpg" />
        <img className="p-5 mb-10" src={image11} alt="11.jpg" />
        <img className="p-5 mb-10" src={image12} alt="12.jpg" />
        <img className="p-5 mb-10" src={image12_1} alt="12_1.jpg" />
        <img className="p-5 mb-10" src={image14} alt="14.jpg" />
        <img className="p-5 mb-10" src={image17} alt="17.jpg" />
        <img className="p-5 mb-10" src={image18} alt="18.jpg" />
        <img className="p-5 mb-10" src={image19} alt="19.jpg" />
        <img className="p-5" src={image13} alt="13.jpg" />
        <p className="p-5 mb-5 italic text-slate-400 text-right text-sm">사진: @heoyu_photograph</p>
      </div>
    </>
  );
}
