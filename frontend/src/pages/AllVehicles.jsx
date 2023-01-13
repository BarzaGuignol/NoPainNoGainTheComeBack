/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "@components/Nav";
import apiConnexion from "../services/apiConnexion";

import VehicleList from "../components/VehicleList";

function AllVehicles() {
  const [vehicleList, setVehicleList] = useState();
  const [searchParams, setSearchparams] = useSearchParams();
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
        <link rel="icon" type="image/png" href="../src/assets/iconeMario.png" />
      </Helmet>
      <Nav />
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images-ext-1.discordapp.net/external/pPJ7tOzgHisfFsYFJFt5r5BzzqKZorId_JI9d3-5Q-M/https/i.pinimg.com/originals/94/1c/c3/941cc3a0ff66359276efa3e288aacb64.jpg?width=921&height=518)",
        }}
      >
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
