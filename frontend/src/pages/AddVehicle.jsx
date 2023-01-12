import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
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
        setTimeout(() => navigate("/"), 4000);
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
        <title>Admin - Add Vehicle</title>
        <meta
          name="description"
          content="Add a new vehicle to the rental fleet on this page. Manage vehicle details and availability."
        />
        <link rel="icon" type="image/png" href="../sec/assets/favicon.svg" />
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
      <form className="flex flex-col items-center w-full pt-10 gap-y-7">
        {/* FORM ADD OPTION */}
        <div className="mt-10 flex flex-col items-center w-full gap-y-7">
          <InputTemplate
            textPlaceholder="Model"
            customWidth="cstm_width_XlInput"
            value={vehicle.model}
            methodOnChange={handleInputOnChange}
            inputType="text"
            name="model"
          />
          <InputTemplate
            textPlaceholder="Kilometers"
            customWidth="cstm_width_XlInput"
            value={vehicle.kilometer}
            methodOnChange={handleInputOnChange}
            inputType="number"
            name="kilometer"
          />
          <InputTemplate
            textPlaceholder="Picture URL"
            customWidth="cstm_width_XlInput"
            value={vehicle.picture}
            methodOnChange={handleInputOnChange}
            inputType="text"
            name="picture"
          />
          <InputTemplate
            textPlaceholder="Vehicle type"
            customWidth="cstm_width_XlInput"
            value={vehicle.type}
            methodOnChange={handleInputOnChange}
            inputType="text"
            name="type"
          />
          <InputTemplate
            textPlaceholder="Vehicle year"
            customWidth="cstm_width_XlInput"
            value={vehicle.vehicle_year}
            methodOnChange={handleInputOnChange}
            inputType="number"
            name="vehicle_year"
          />
          {vehicle.vehicle_status === 0 && (
            <ButtonTemplate
              buttonType="button"
              buttonText="Not Available"
              buttonStyle="border-solid border-gray-400 text-gray-400 border-2 rounded-md p-3 hover:bg-primary hover:text-white hover:border-primary"
              methodOnClick={() => handleAvailability(1)}
            />
          )}
          {vehicle.vehicle_status === 1 && (
            <ButtonTemplate
              buttonType="button"
              buttonText="Available"
              buttonStyle="bg-primary border-solid border-primary border-2 rounded-md p-3 text-white hover:bg-white hover:text-gray-400 hover:border-gray-400"
              methodOnClick={() => handleAvailability(0)}
            />
          )}
        </div>
        <div className="flex justify-around space-x-8 pt-5">
          <ButtonTemplate
            methodOnClick={handleCancelButton}
            buttonType="button"
            buttonText="GO BACK"
            buttonStyle="cstm_buttonSecondaryNone"
          />
          <ButtonTemplate
            buttonType="button"
            buttonText="ADD"
            buttonStyle="cstm_buttonSecondaryNone"
            methodOnClick={handleAddCategory}
          />
        </div>
      </form>
    </>
  );
}

export default AddVehicle;
