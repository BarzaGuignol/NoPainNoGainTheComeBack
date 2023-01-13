import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import Nav from "@components/Nav";
import apiConnexion from "../services/apiConnexion";

import "react-toastify/dist/ReactToastify.css";

function AddVehicle() {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({
    model: "",
    kilometer: "",
    picture: "",
    type: "",
    vehicle_year: "",
    vehicle_status: 0,
  });

  const notify = (msg) => {
    toast(msg);
  };

  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newCategory = { ...vehicle };
    newCategory[place] = value;
    setVehicle(newCategory);
  };

  const handleAddCategory = () => {
    // delete vehicle.id;
    apiConnexion
      .post(`/vehicles`, {
        ...vehicle,
      })
      .then((vehicles) => {
        notify("Vehicle successfully added!");
        setVehicle(vehicles.data);
        setTimeout(() => navigate("/vehicles/management"), 2500);
      })
      .catch((err) => console.error(err));
  };

  const handleAvailability = (bool) => {
    const newVehicle = { ...vehicle };
    newVehicle.vehicle_status = bool;
    setVehicle(newVehicle);
  };

  const handleCancelButton = () => {
    navigate("/vehicles/management");
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Administrator - Add a vehicle</title>
        <meta
          name="description"
          content="Add a new vehicle to the rental fleet on this page. Manage vehicle details and availability."
        />
        <link rel="icon" type="image/png" href="../src/assets/iconeMario.png" />
      </Helmet>
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
      <Nav />
      <div className="h-[150vh]">
        <h1 className="text-center font-bold text-3xl pt-8">Add a vehicle</h1>
        <form className="flex flex-col items-center">
          {/* FORM ADD OPTION */}
          <div className="mt-8 flex flex-col items-center w-full">
            <label htmlFor="Model" className="mb-2">
              Model
            </label>
            <InputTemplate
              textPlaceholder="Model"
              customWidth="cstm_width_XlInput mb-7"
              value={vehicle.model}
              methodOnChange={handleInputOnChange}
              inputType="text"
              name="model"
            />
            <label htmlFor="Mileage" className="mb-2">
              Mileage
            </label>
            <InputTemplate
              textPlaceholder="Kilometers"
              customWidth="cstm_width_XlInput mb-7"
              value={vehicle.kilometer}
              methodOnChange={handleInputOnChange}
              inputType="number"
              name="kilometer"
            />
            <label htmlFor="Picture" className="mb-2">
              Picture
            </label>
            <InputTemplate
              textPlaceholder="Picture URL"
              customWidth="cstm_width_XlInput mb-7"
              value={vehicle.picture}
              methodOnChange={handleInputOnChange}
              inputType="text"
              name="picture"
            />
            <label htmlFor="Type" className="mb-2">
              Type
            </label>
            <InputTemplate
              textPlaceholder="Vehicle type"
              customWidth="cstm_width_XlInput mb-7"
              value={vehicle.type}
              methodOnChange={handleInputOnChange}
              inputType="text"
              name="type"
            />
            <label htmlFor="Year" className="mb-2">
              Year
            </label>
            <InputTemplate
              textPlaceholder="Vehicle year"
              customWidth="cstm_width_XlInput mb-7"
              value={vehicle.vehicle_year}
              methodOnChange={handleInputOnChange}
              inputType="number"
              name="vehicle_year"
            />
            <label htmlFor="Availability" className="mb-2">
              Availability
            </label>
            {vehicle.vehicle_status === 0 && (
              <ButtonTemplate
                buttonType="button"
                buttonText="No"
                buttonStyle="border-solid border-gray-400 text-gray-400 border-2 rounded-md p-3 hover:bg-blue-100 hover:text-white hover:border-primary"
                methodOnClick={() => handleAvailability(1)}
              />
            )}
            {vehicle.vehicle_status === 1 && (
              <ButtonTemplate
                buttonType="button"
                buttonText="Available"
                buttonStyle="bg-blue-800 border-solid border-primary border-2 rounded-md p-3 text-white hover:bg-white hover:text-gray-400 hover:border-gray-400"
                methodOnClick={() => handleAvailability(0)}
              />
            )}
          </div>
          <div className="flex justify-around space-x-8 pt-5">
            <ButtonTemplate
              methodOnClick={handleCancelButton}
              buttonType="button"
              buttonText="Cancel"
              buttonStyle="bg-blue-900 hover:bg-blue-800 w-40 h-10 rounded-lg text-white mt-6"
            />
            <ButtonTemplate
              buttonType="button"
              buttonText="Add"
              buttonStyle="bg-blue-900 hover:bg-blue-800 w-40 h-10 rounded-lg text-white mt-6"
              methodOnClick={handleAddCategory}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddVehicle;
