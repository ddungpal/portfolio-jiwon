import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts20 } from "../../api/firebase";

export default function WorkDetail20() {
  const {
    isLoading,
    error,
    data: products20,
  } = useQuery(["products20"], getProducts20);

  console.log(products20);
  let image1 = "";

  if (products20) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(products20);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "7cbe13d8-0329-4eac-9854-fe8cbc997166"
      );
    image1 = image1Obj[0].image;
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
          src="https://www.youtube.com/embed/vmbo-IN23do?rel=0"
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
      <div className="">
        <p className="p-2 mb-3 text-xl font-bold">
          <br />
          Art Film 'MUNMYO'
          <br />
          하나의 음 속에서 영원을 보고 어둠 앞에서 사랑을 노래하다
        </p>
        <p className="p-2 mb-3">
          CREDITS
          <br />
          <br />
          연주 | (정가)이유림 @_yooolim <br />
          (가야금)김보경 @bboookyung <br />
          (대금)이헌준 @daegeumer <br />
          (기타)정주영 @ju_young_cheong <br />
          (더블베이스)임도휘 <br />
          (타악)김용진 @raphaelyj99 <br />
          (정주)김샛별 박주애 정혜리 최지원 <br />
          <br />
          디지털 아트 | 아하콜렉티브 <br />
          사운드엔지니어 | 임수영 김종록 <br />
          촬영 | 김윤식 박준영 헤드피스 <br />
          디자이너 | 최영탁 <br />
          프로젝트 매니저 | 모아모아프로덕션 한지윤 <br />
          스태프 | 안병은 차영은 <br />
          제작협력 | 김승근 김상만 <br />
          <br />
          주최 | KOREAN MUSIC PROJECT <br />
          후원 | 한국문화예술위원회
        </p>
      </div>
    </>
  );
}
