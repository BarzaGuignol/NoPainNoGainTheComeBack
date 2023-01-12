/* eslint-disable react/prop-types */
import React from "react";
import Nav from "@components/Nav";

import VehicleListCompany from "../components/VehicleListCompany";

function ManagementVehicles() {
  return (
    <div>
      <Nav />
      <VehicleListCompany />
    </div>
  );
}

export default ManagementVehicles;
