import React from "react";

export default function Avatar({ image, name }) {
  return (
    <div className="w-[200px] mx-auto">
      <img className="" src={image} alt="profile" />
    </div>
  );
}
