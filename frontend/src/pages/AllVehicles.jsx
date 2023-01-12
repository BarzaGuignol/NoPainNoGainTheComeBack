/* eslint-disable react/prop-types */
import React from "react";

import VehicleList from "../components/VehicleList";
import Nav from "@components/Nav";

function AllVehicles({ type }) {
  return (
    <div>
      <Nav />
      <VehicleList type={type} />
    </div>
  );
}

export default AllVehicles;
