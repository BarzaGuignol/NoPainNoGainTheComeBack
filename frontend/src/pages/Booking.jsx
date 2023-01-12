import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ButtonTemplate from "@components/ButtonTemplate";
import Nav from "@components/Nav";
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const navigate = useNavigate();
  const handleValidation = () => {
    toast("Your booking has been validated");
  };
  const backToAllVehicles = () => {
    navigate("/vehicles");
  };
  return (
    <>
      <Nav />
      <div className="flex justify-center space-x-8 mt-10">
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
    </>
  );
}

export default Booking;
