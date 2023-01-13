import ButtonToFun from "@components/ButtonToFun";
import React from "react";

export default function Footer() {
  return (
    <div className="h-48 overflow-hidden flex flex-col items-center justify-center bg-[#1e3a8a]">
      <h3 className="mb-8 text-white w-4/5 text-center">
        Copyright NoPainNoGainTheComeBack © 2023 - All rights reserved
      </h3>
      <ButtonToFun />
    </div>
  );
}
