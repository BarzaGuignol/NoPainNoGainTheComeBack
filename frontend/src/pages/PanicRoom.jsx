import React from "react";

import CoffeeMachine from "@components/CoffeeMachine";
import RunButton from "@components/RunButton";

import "@pages/PanicRoom.css";

export default function PanicRoom() {
  return (
    <div className="bg-slate-500 h-[150vh]">
      <div className="text-center text-transparent">
        <h3>Space for hologram</h3>
      </div>
      <div className="mt-16">
        <div className="platform">
          <div className="plate" />
          <div className="plate" />
          <div className="panels">
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
            <div className="panel" />
          </div>
        </div>
      </div>
      <CoffeeMachine />
      <RunButton />
    </div>
  );
}
