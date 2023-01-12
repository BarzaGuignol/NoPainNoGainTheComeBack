/* eslint-disable react/prop-types */
import React from "react";

import VehicleList from "../components/VehicleList";

function AllVehicles({ type }) {
  return (
    <div>
      <VehicleList type={type} />
    </div>
  );
}

export default AllVehicles;
