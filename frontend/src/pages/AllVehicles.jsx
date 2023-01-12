/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import apiConnexion from "../services/apiConnexion";

import VehicleList from "../components/VehicleList";

function AllVehicles() {
  const [vehicleList, setVehicleList] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const departure = searchParams.get("departure_date");
  const arrival = searchParams.get("arrival_date");
  const type = searchParams.get("type");

  useEffect(() => {
    apiConnexion
      .get(
        `/vehicles?arrival_date=${arrival}&departure_date=${departure}&type=${type}`
      )
      .then((res) => {
        setVehicleList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

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
        <VehicleList vehicleList={vehicleList} />
      </div>
    </>
  );
}

export default AllVehicles;
