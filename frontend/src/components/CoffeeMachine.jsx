import React from "react";

import "@components/CoffeeMachine.css";

export default function CoffeeMachine() {
  return (
    <div>
      <h1 className="text-center mt-40 h-[50vh] font-bold rainbow text-2xl">
        \Ö/ Coffee Time \Ö/
      </h1>
      <div className="container w-[300px] h-[280px]">
        <div className="coffee-header">
          <div className="coffee-header__buttons coffee-header__button-one" />
          <div className="coffee-header__buttons coffee-header__button-two" />
          <div className="coffee-header__display" />
          <div className="coffee-header__details" />
        </div>
        <div className="coffee-medium">
          <div className="coffe-medium__exit" />
          <div className="coffee-medium__arm" />
          <div className="coffee-medium__liquid" />
          <div className="coffee-medium__smoke coffee-medium__smoke-one" />
          <div className="coffee-medium__smoke coffee-medium__smoke-two" />
          <div className="coffee-medium__smoke coffee-medium__smoke-three" />
          <div className="coffee-medium__smoke coffee-medium__smoke-for" />
          <div className="coffee-medium__cup" />
        </div>
        <div className="coffee-footer" />
      </div>
    </div>
  );
}
