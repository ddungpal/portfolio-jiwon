import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import { useQuery } from "@tanstack/react-query";
import { getCurrent } from "../api/firebase";

export default function Exibition() {
  const {
    isLoading,
    error,
    data: current,
  } = useQuery(["current"], getCurrent);

  console.log(current);
  let image1 = "";

  if (current) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(current);

    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "e2254487-5be6-41d0-b70c-ea2659cc81ce"
      );
    image1 = image1Obj[0].image;
  } else {
    console.log("데이터를 받아오지 못했습니다.");
  }

  return (
    <>
      <Topbar />
      <div className="container mx-auto flex-column items-center justify-between mt-10">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <img className="p-5 mb-10" src={image1} alt="1.jpg" />
        <div className="p-5 mb-10 text-base">
          <div className="font-bold">
            전시명 | 피어나: 나의 이야기에 꽃이
          </div>
          <div className="font-bold">
            참여작가 | 강민성, 문보리, 채민정, 최지원
          </div>
          <div className="font-bold">
            전시일시 I  2024.1.24 (수) - 3.19 (화) 10:00-18:00 (수-토)
          </div>
          <div className="font-bold">
            전시장소 I Reveat Hannam (리빗한남)
          </div>
          <br></br>
          <p className="">* 전시는 프라이빗 뷰잉으로 관람 이틀 전까지 사전 예약제로 진행됩니다.</p>
          <p className="">* 예약링크 : &nbsp;
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSecYMhAYsnqup9KCJ6JEJ0Ja2zyGRQ_kc56zI-VCBcwKUnTHg/viewform?usp=send_form" target="_blank">
              <span className="text-blue-700">https://docs.google.com/forms/d/e/1FAIpQLSecYMhAYsnqup9KCJ6JEJ0Ja2zyGRQ_kc56zI-VCBcwKUnTHg/viewform?usp=send_form</span>
            </Link>  
          </p>
        </div>
      </div>
    </>
  );
}
