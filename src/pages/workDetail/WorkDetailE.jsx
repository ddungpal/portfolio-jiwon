import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsE } from "../../api/firebase";

export default function WorkDetailE() {
  const {
    isLoading,
    error,
    data: productsE,
  } = useQuery(["productsE"], getProductsE);

  console.log(productsE);
  let image1 = "";
  let image2 = "";
  let image3 = "";
  let image4 = "";

  if (productsE) {
    const _ = require("lodash");
    const productsOri = _.cloneDeep(productsE);
    const image1Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "33a3a5407d576d1d1d4877d25e6c9cae"
      );
    image1 = image1Obj[0].image;
    const image2Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "b37e922ae8a6f22d5a2c2bb5284f8a48"
      );
    image2 = image2Obj[0].image;
    const image3Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "1c5eaf3320073deaed55931c531f7577"
      );
    image3 = image3Obj[0].image;
    const image4Obj =
      productsOri &&
      productsOri.filter(
        (product) => product.id === "909d178ab55003514bbf76ed69d358ec"
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
          src="https://www.youtube.com/embed/7uVq_z1ulEg?rel=0"
          frameborder="0"
          allowfullScreen="allowfullscreen"
          title="YouTube video player"
          width="640"
          height="390"
        ></iframe>
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image1}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image2}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image3}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
      <div className="mb-5 project">
        <img
          className="project__img"
          src={image4}
          alt="AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic"
        />
        {/* <span className="project__description text-[8px] lg:text-base lg:h-1/20">
          AHA Collective x Arktonic, Anti-Gravity, 2024, 00:03:59, REONE Clinic
        </span> */}
      </div>
    </>
  );
}
