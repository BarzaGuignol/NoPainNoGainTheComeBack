import React from "react";

import CoffeeMachine from "@components/CoffeeMachine";
import Nav from "@components/Nav";

export default function PanicRoom() {
  return (
    <div className="bg-slate-500 h-screen">
      <Nav />
      <h3 className="text-center pt-20 text-red-500 font-bold text-2xl">
        Please don't panic !
      </h3>
      <CoffeeMachine />
    </div>
  );
}
