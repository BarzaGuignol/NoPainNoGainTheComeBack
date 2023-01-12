import React from "react";

import "@components/RunButton.css";

export default function RunButton() {
  return (
    <div className="text-center justify-center flex flex-col w-[500px] mx-auto">
      <div>
        <div className="button3D">
          <a href="http://localhost:3000/">NO</a>
        </div>
      </div>
      <div className="mt-5">
        <button className="glow-on-hover" type="button">
          WOW O_O
        </button>
      </div>
      <div className="mt-5">
        <div
          href="http://localhost:3000/"
          className="btn-flip"
          data-back="Nope"
          data-front="Maybe ?"
        />
      </div>
      <div className="mt-5">
        <a href="http://localhost:3000/" className="power">
          YES
          <span />
          <span />
          <span />
          <span />
        </a>
      </div>
    </div>
  );
}
