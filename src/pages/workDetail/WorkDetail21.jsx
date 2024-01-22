import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts21 } from "../../api/firebase";

export default function WorkDetail21() {
  const {
    isLoading,
    error,
    data: products21,
  } = useQuery(["products21"], getProducts21);

  console.log(products21);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";

  if (products21) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products21);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "4cf92aa3-52fe-4f29-af27-d83e31c8d613"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2ebd600a-2c9d-4cc4-8d9e-cb9a638e84dc"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "2577b5c6-f6ef-4075-9c81-5b758a459a31"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7a287a38-ed81-4e3b-b80d-90ba9d166bdb"
      );
    image4 = image4Obj[0].image;
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
          src="https://www.youtube.com/embed/UXa0_cuyMfs?rel=0"
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
          src="https://www.youtube.com/embed/LuYWyBzgNxo?rel=0"
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
          src="https://www.youtube.com/embed/okDGHcDsVYA?rel=0"
          frameborder="0"
          allowfullScreen="allowfullscreen"
          title="YouTube video player"
          width="640"
          height="390"
        ></iframe>
      </div>
      <div className="mb-5 project">
        <img className="project__img" src={image1} alt="" />
      </div>
      <div className="mb-5 project">
        <img className="project__img" src={image2} alt="" />
      </div>
      <div className="mb-5 project">
        <img className="project__img" src={image3} alt="" />
      </div>
      <div className="mb-5 project">
        <img className="project__img" src={image4} alt="" />
      </div>
      <div className="">
        <p className="p-2 mb-3 text-xl italic">
          <br />
          “정적을 깨는 하나의 동작이 그 고요함을 가장 강하게 일깨울 때가 있다.”
        </p>
        <p className="p-2 mb-5 line-clamp text-justify">
          ‘친다’라는 행위는 ‘안친다’라는 이름의 정적을 깨고, 정적을 깨는 동작은
          그 고요함을 가장 강하게 일깨운다. 전시 ＜ppp pppp ppppp＞에서
          아하콜렉티브는 0과 1사이의 숨을 고르는 순간을 그리며 하나의 동작에
          내포된 ‘섬세한 주관성’을 두드린다. 키네틱 오브제와 이를 둘러싼 3면
          영상은 0에서 점차 커짐(0＜ppp), 점차 작아지다가 사라짐(ppp＞0)의
          상대적 방향의 페이징을 반복하며 라이브홀 공간의 여백을 가른다. 소리와
          빛을 매개로한 이러한 상호작용은 즉흥성을 띤 심리적 질감으로 치환된다.
          이 가운데, 아우어퍼쿠션의 공연은 연주자들이 공간을 유연하게 점유하는
          방식으로 진행된다. 각 연주자들 사이에서 나타나는 리듬과 음형은 반복,
          확대되어 감상자와 소리의 경계를 허문다. 하나의 동작에서 비롯된 ＜ppp
          pppp ppppp＞는 공유된 시간 속에서 새로운 언어로서의 상징을 만들어
          간다.
          <br />
          <br />
          *ppp: 피아니시모(가장 약하게)
        </p>
        <p className="p-2 mb-3">
          <span className="font-bold">
            PLAP 2022 최우수 선정 후속작 | ppp pppp ppppp
          </span>
          <br />
          ・전시일정: 2023년 9월 21일-24일 (월요일 휴관) <br />
          ・공연일정: 1회차: 2023년 9월 21일(목) 오후 7:00-7:40, 러닝타임 40분 /
          2회차: 2023년 9월 22일(금) 오후 7:00-7:40, 러닝타임 40분
          <br />
          ・전시장소 : 플랫폼엘 컨템포러리 아트센터/ 플랫폼 라이브(B2) <br />
        </p>
        <p className="p-2 mb-3">
          <span className="font-bold">CREDIT</span>
          <br />
          ・전시기획 및 작품제작 <br />
          아하콜렉티브(AHA COLLECTIVE) - 김샛별, 박주애, 정혜리, 최지원 <br />
          ・라이브 공연 <br />
          아우어퍼쿠션(OUR PERCUSSION) - 우리, 김수진, 안다해, 우재훈, 김용진{" "}
          <br />
          ・사운드: 지성민 <br />
          ・ 주관 : 아하콜렉티브 <br />
          ・주최/후원: 플랫폼엘 컨템포러리 아트센터, 루이까또즈 <br />
        </p>
      </div>
    </>
  );
}
