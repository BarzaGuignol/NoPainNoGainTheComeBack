import React from "react";
import { Helmet } from "react-helmet";

import CoffeeMachine from "@components/CoffeeMachine";
import Nav from "@components/Nav";

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
      <div className="bg-slate-500 h-screen">
        <h3 className="text-center pt-20 text-red-500 font-bold text-2xl">
          Please don't panic !
        </h3>
        <CoffeeMachine />
      </div>
    </>
  );
}
