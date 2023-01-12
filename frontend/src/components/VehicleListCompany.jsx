/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import apiConnexion from "../services/apiConnexion";
import VehicleCardCompany from "./VehicleCardCompany";

import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "../assets/backgroundmario.jpeg";

function VehicleListCompany() {
  const [vehicleList, setVehicleList] = useState();

  const [vehicles, setVehicles] = useState({
    id: null,
    model: "",
    kilometer: "",
    picture: "",
    type: "",
    vehicle_year: "",
    vehicle_status: "",
  });
  console.warn(vehicles);

  const notify = (msg) => {
    toast(msg);
  };

  const getAllVehicles = () => {
    apiConnexion
      .get(`/management`)
      .then((res) => {
        setVehicleList(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteVehicle = (id) => {
    apiConnexion
      .delete(`/vehicles/${id}`)
      .then(() => {
        setVehicles({
          id: null,
          model: "",
          kilometer: "",
          picture: "",
          type: "",
          vehicle_year: "",
          vehicle_status: "",
        });
        notify("Vehicle deleted !");
        getAllVehicles();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className="bg-cover bg-center h-1000"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className=" text-center font-bold text-3xl pt-8 pb-4">
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
        <div className="px-2 w-full flex justify-center">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {vehicleList &&
              vehicleList.map((vehicle) => (
                <VehicleCardCompany
                  key={vehicle.id}
                  vehicle={vehicle}
                  handleDeleteVehicle={handleDeleteVehicle}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleListCompany;
