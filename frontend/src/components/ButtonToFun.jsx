import React from "react";
import { Link } from "react-router-dom";

import "./ButtonToFun.css";

export default function ButtonToFun() {
  return (
    <div>
      <Link
        to="/panic-room"
        className="noselect blue way text-center pt-3"
        type="button"
      >
        Way To Fun
      </Link>
    </div>
  );
}
