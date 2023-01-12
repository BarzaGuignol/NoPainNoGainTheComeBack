/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiConnexion from "../services/apiConnexion";
import VehicleCardCompany from "./VehicleCardCompany";

function VehicleListCompany() {
  const [vehicleList, setVehicleList] = useState();

  useEffect(() => {
    apiConnexion
      .get(`/vehicles`)
      .then((res) => {
        setVehicleList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-8 pb-4">
        Management vehicles
      </h1>
      <div className="my-4 ml-32">
        <Link
          to="/vehicle/creation"
          className="bg-black rounded px-5 py-2 text-white"
        >
          Add a new vehicle
        </Link>
      </div>
      <div className="px-2 w-full flex justify-center ">
        <div className="grid grid-cols-3 -mx-2">
          {vehicleList &&
            vehicleList.map((vehicle) => (
              <VehicleCardCompany key={vehicle.id} vehicle={vehicle} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default VehicleListCompany;
