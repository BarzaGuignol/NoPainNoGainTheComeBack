/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import Nav from "@components/Nav";
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
        setTimeout(() => navigate("/vehicles/management"), 4000);
      })
      .catch((error) => console.error(error));
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
        <title>Administrator - Edit a vehicle</title>
        <meta
          name="description"
          content="Edit and update the details of a vehicle in the rental fleet on this page. Manage vehicle availability and pricing."
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
        <h1 className="text-center font-bold text-3xl pt-8">User Management</h1>
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
            <label htmlFor="Availablity" className="mb-2">
              Availablity
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
                buttonText="Yes"
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
              buttonStyle="bg-blue-900 hover:bg-blue-800 w-48 h-10 rounded-lg text-white mt-6"
            />
            <ButtonTemplate
              buttonType="button"
              buttonText="Update"
              buttonStyle="bg-blue-900 hover:bg-blue-800 w-48 h-10 rounded-lg text-white mt-6"
              methodOnClick={handleUpdateCategory}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditVehicle;
