import React, { useState } from "react";
import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import { useNavigate } from "react-router-dom";

function AddVehicle() {
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    model: "",
    kilometer: "",
    picture: "",
    type: "",
    vehicle_year: "",
    vehicle_status: "",
  });

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

  // Partie à mettre en place quand le back est terminé
  // const handleAddCategory = () => {
  // delete vehicle.id;
  // apiConnection
  //   .post(`/categories`, {
  //     ...vehicle,
  //   })
  //   .then((vehicles) => {
  //     notify("Vehicle successfully added!");
  //     setVehicle(vehicles.data);
  //   })
  //   .catch((error) => console.error(error));
  // };

  const handleCancelButton = () => {
    navigate("/");
  };

  return (
    <form className="flex flex-col items-center w-full pt-10 gap-y-7">
      {/* FORM ADD OPTION */}
      <div className="mt-10 flex flex-col items-center w-full gap-y-7">
        <InputTemplate
          textPlaceholder="Model"
          customWidth="cstm_width_XlInput"
          value={vehicle.model}
          methodOnChange={handleInputOnChange}
          name="model"
        />
        <InputTemplate
          textPlaceholder="Kilometer"
          customWidth="cstm_width_XlInput"
          value={vehicle.kilometer}
          methodOnChange={handleInputOnChange}
          name="kilometer"
        />
        <InputTemplate
          textPlaceholder="Picture URL"
          customWidth="cstm_width_XlInput"
          value={vehicle.picture}
          methodOnChange={handleInputOnChange}
          name="picture"
        />
        <InputTemplate
          textPlaceholder="Vehicle type"
          customWidth="cstm_width_XlInput"
          value={vehicle.type}
          methodOnChange={handleInputOnChange}
          name="type"
        />
        <InputTemplate
          textPlaceholder="Vehicle year"
          customWidth="cstm_width_XlInput"
          value={vehicle.vehicle_year}
          methodOnChange={handleInputOnChange}
          name="vehicle_year"
        />
        <InputTemplate
          textPlaceholder="vehicle status"
          customWidth="cstm_width_XlInput"
          value={vehicle.vehicle_status}
          methodOnChange={handleInputOnChange}
          name="vehicle_status"
        />
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
          // methodOnClick={handleAddCategory}
        />
      </div>
    </form>
  );
}

export default AddVehicle;
