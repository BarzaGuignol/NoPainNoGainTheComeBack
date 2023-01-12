import React from "react";
import { Helmet } from "react-helmet";

import CoffeeMachine from "@components/CoffeeMachine";
import RunButton from "@components/RunButton";
import Nav from "@components/Nav";

import "@pages/PanicRoom.css";

export default function PanicRoom() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Have Fun !!</title>
        <meta
          name="description"
          content="Here is a surprise page to add some fun to the hackathon. To combine competence and fun "
        />
        <link rel="icon" type="image/png" href="../sec/assets/favicon.svg" />
      </Helmet>
      <Nav />
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
      <h2 className="text-center mt-20  font-bold rainbow text-2xl">
        \/ - Want a game ? - \/
      </h2>
      <RunButton />
    </div>
   </>
  );
}
