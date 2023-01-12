/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "@components/Nav";
import apiConnexion from "../services/apiConnexion";

import VehicleList from "../components/VehicleList";

function AllVehicles() {
  const [vehicleList, setVehicleList] = useState();
  const [searchParams] = useSearchParams();
  // Add setSearchparams
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
        <Nav />
        <VehicleList
          vehicleList={vehicleList}
          departure={departure}
          arrival={arrival}
        />
      </div>
    </>
  );
}

export default AllVehicles;
