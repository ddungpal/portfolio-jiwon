import React from "react";
import Topbar from "../components/Topbar";

export default function Exibition() {
  return (
    <>
      <Topbar />
      <div className="relative flex flex-wrap items-center justify-between px-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          Exibition!
        </div>
      </div>
    </>
  );
}
