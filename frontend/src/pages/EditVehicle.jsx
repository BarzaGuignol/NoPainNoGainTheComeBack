/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import apiConnexion from "../services/apiConnexion";

import "react-toastify/dist/ReactToastify.css";

function EditVehicle() {
  const { id } = useParams();
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

  // Fonction qui gère la récupération des données avec axios
  const getVehicle = () => {
    apiConnexion
      .get(`/vehicles/${id}`)
      .then((oneVehicle) => setVehicle(oneVehicle.data))
      .catch((error) => console.error(error));
  };

  // Pour que la donnée se mette à jour en live
  useEffect(() => {
    getVehicle();
  }, []);

  // Fonction qui gère la modification d'une catégorie
  const handleUpdateCategory = () => {
    const { model, kilometer, picture, type, vehicle_year, vehicle_status } =
      vehicle;

    apiConnexion
      .put(`/vehicles/${vehicle.id}`, {
        model,
        kilometer,
        picture,
        type,
        vehicle_year,
        vehicle_status,
      })
      .then(() => {
        notify("Vehicle successfully updated!");
        setTimeout(() => navigate("/"), 4000);
      })
      .catch((error) => console.error(error));
  };

  const handleAvailability = (bool) => {
    const newVehicle = { ...vehicle };
    newVehicle.vehicle_status = bool;
    setVehicle(newVehicle);
  };

  const handleCancelButton = () => {
    navigate("/");
  };

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
            inputType="date"
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
            buttonText="UPDATE"
            buttonStyle="cstm_buttonSecondaryNone"
            methodOnClick={handleUpdateCategory}
          />
        </div>
      </form>
    </>
  );
}

export default EditVehicle;
