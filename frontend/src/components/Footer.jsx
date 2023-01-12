import ButtonToFun from "@components/ButtonToFun";
import React from "react";

export default function Footer() {
  return (
    <div className="h-48 overflow-hidden flex flex-col items-center justify-center bg-[#333]">
      <h3 className="mb-8 text-white">
        Copyright NoPainNoGainTheComeBack © 2023 - All rights reserved
      </h3>
      <ButtonToFun />
    </div>
  );
}
