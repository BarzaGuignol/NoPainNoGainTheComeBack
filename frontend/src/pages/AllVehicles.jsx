/* eslint-disable react/prop-types */
import React from "react";
import { Helmet } from "react-helmet";

import VehicleList from "../components/VehicleList";
import Nav from "@components/Nav";

function AllVehicles({ type }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Users - All Vehicles by Date</title>
        <meta
          name="description"
          content="View and filter our entire rental fleet by reservation date on this page. Easily find available vehicles for your desired rental period."
        />
        <link rel="icon" type="image/png" href="../sec/assets/favicon.svg" />
      </Helmet>
      <div>
        <Nav />
        <VehicleList type={type} />
      </div>
    </>
  );
}

export default AllVehicles;
