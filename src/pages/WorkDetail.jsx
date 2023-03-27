import React from "react";
import WorkDetail1 from "./workDetail/WorkDetail1";
import WorkDetail10 from "./workDetail/WorkDetail10";
import WorkDetail11 from "./workDetail/WorkDetail11";
import WorkDetail12 from "./workDetail/WorkDetail12";
import WorkDetail13 from "./workDetail/WorkDetail13";
import WorkDetail14 from "./workDetail/WorkDetail14";
import WorkDetail15 from "./workDetail/WorkDetail15";
import WorkDetail16 from "./workDetail/WorkDetail16";
import WorkDetail17 from "./workDetail/WorkDetail17";
import WorkDetail18 from "./workDetail/WorkDetail18";
import WorkDetail2 from "./workDetail/WorkDetail2";
import WorkDetail3 from "./workDetail/WorkDetail3";
import WorkDetail4 from "./workDetail/WorkDetail4";
import WorkDetail5 from "./workDetail/WorkDetail5";
import WorkDetail6 from "./workDetail/WorkDetail6";
import WorkDetail7 from "./workDetail/WorkDetail7";
import WorkDetail8 from "./workDetail/WorkDetail8";
import WorkDetail9 from "./workDetail/WorkDetail9";

export default function WorkDetail({ selectedContent }) {
  switch (selectedContent) {
    case "1":
      return (
        <>
          <div>
            <WorkDetail1 />
          </div>
        </>
      );
    case "2":
      return (
        <>
          <div>
            <WorkDetail2 />
          </div>
        </>
      );
    case "3":
      return (
        <>
          <div>
            <WorkDetail3 />
          </div>
        </>
      );
    case "4":
      return (
        <>
          <div>
            <WorkDetail4 />
          </div>
        </>
      );
    case "5":
      return (
        <>
          <div>
            <WorkDetail5 />
          </div>
        </>
      );
    case "6":
      return (
        <>
          <div>
            <WorkDetail6 />
          </div>
        </>
      );
    case "7":
      return (
        <>
          <div>
            <WorkDetail7 />
          </div>
        </>
      );
    case "8":
      return (
        <>
          <div>
            <WorkDetail8 />
          </div>
        </>
      );
    case "9":
      return (
        <>
          <div>
            <WorkDetail9 />
          </div>
        </>
      );
    case "10":
      return (
        <>
          <div>
            <WorkDetail10 />
          </div>
        </>
      );
    case "11":
      return (
        <>
          <div>
            <WorkDetail11 />
          </div>
        </>
      );
    case "12":
      return (
        <>
          <div>
            <WorkDetail12 />
          </div>
        </>
      );
    case "13":
      return (
        <>
          <div>
            <WorkDetail13 />
          </div>
        </>
      );
    case "14":
      return (
        <>
          <div>
            <WorkDetail14 />
          </div>
        </>
      );
    case "15":
      return (
        <>
          <div>
            <WorkDetail15 />
          </div>
        </>
      );
    case "16":
      return (
        <>
          <div>
            <WorkDetail16 />
          </div>
        </>
      );
    case "17":
      return (
        <>
          <div>
            <WorkDetail17 />
          </div>
        </>
      );
    case "18":
      return (
        <>
          <div>
            <WorkDetail18 />
          </div>
        </>
      );
    default:
      return (
        <>
          <div>
            <WorkDetail1 />
          </div>
        </>
      );
  }
}
