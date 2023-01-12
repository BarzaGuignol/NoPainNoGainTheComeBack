import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import ButtonTemplate from "@components/ButtonTemplate";
import VehicleCardUser from "@components/VehicleCardUser";
import apiConnexion from "../services/apiConnexion";

import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const [vehicle, setVehicle] = useState({
    type: "break",
    picture:
      "https://cdn-s-www.ledauphine.com/images/7E78C5B1-52BB-49C6-AFC0-630BF74ACD39/NW_raw/le-nouveau-volvo-v60-propose-cinq-niveaux-de-finition-distinctifs-v60-momentum-inscription-inscription-luxe-et-r-design-sans-compter-la-gamme-business-chacun-d-eux-evolue-selon-quatre-definitions-ou-positionnements-expressivite-elegance-discretion-ou-sportivite-premier-signe-distinctif-les-jantes-dont-la-taille-evolue-de-16-a-20-pouces-sp-1541401369.jpg",
    model: "Volvo V60",
    vehicle_year: "2018",
    kilometer: 114560,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const handleValidation = () => {
    toast("Your booking has been validated");
  };
  const backToAllVehicles = () => {
    navigate("/vehicles");
  };
  useEffect(() => {
    apiConnexion
      .get(`/vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="flex justify-center space-x-8 mt-10">
      <div>
        <VehicleCardUser vehicle={vehicle} />
      </div>

      <ButtonTemplate
        buttonType="button"
        buttonText="Delete"
        buttonStyle="text-black text-lg rounded bg-transparent  border-2 border-current px-4 py-2"
        methodOnClick={backToAllVehicles}
      />
      <ButtonTemplate
        buttonType="button"
        buttonText="Validate"
        buttonStyle="text-black text-lg rounded bg-transparent  border-2 border-current px-4 py-2"
        methodOnClick={handleValidation}
      />
      <ToastContainer />
    </div>
  );
}

export default Booking;
