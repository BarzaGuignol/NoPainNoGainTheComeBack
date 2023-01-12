import React from "react";

import CoffeeMachine from "@components/CoffeeMachine";
import RunButton from "@components/RunButton";

export default function PanicRoom() {
  return (
    <div className="bg-slate-500 h-[150vh]">
      <h3 className="text-center pt-20 text-red-500 font-bold text-2xl">
        Please don't panic !
      </h3>
      <CoffeeMachine />
      <RunButton />
    </div>
  );
}
