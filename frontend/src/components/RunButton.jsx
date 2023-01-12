import React from "react";
import { Link } from "react-router-dom";

import "@components/RunButton.css";

export default function RunButton() {
  return (
    <div className="text-center justify-center flex flex-col w-full mx-auto mt-20">
      <div>
        <div className="button3D">
          <Link to="/search">NO</Link>
        </div>
      </div>
      <div className="mt-5">
        <button className="glow-on-hover" type="button">
          WOW O_O
        </button>
      </div>
      <div className="mt-5">
        <div className="btn-flip" data-back="Nope" data-front="Maybe ?" />
      </div>
      <div className="mt-5">
        <a href="https://racing.pmnd.rs/" target="_blanck" className="power">
          HOLD ME
          <span />
          <span />
          <span />
          <span />
        </a>
      </div>
    </div>
  );
}
