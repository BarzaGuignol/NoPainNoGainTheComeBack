import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

import ButtonTemplate from "@components/ButtonTemplate";
import Nav from "@components/Nav";
import apiConnexion from "../services/apiConnexion";
import User from "../contexts/UserContext";

import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const { user } = useContext(User.UserContext);
  const [vehicle, setVehicle] = useState({
    type: "",
    picture: "",
    model: "",
    vehicle_year: "",
    kilometer: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchparams] = useSearchParams();
  const departure = searchParams.get("departure_date");
  const arrival = searchParams.get("arrival_date");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleValidation = () => {
    apiConnexion
      .post(`/booking`, {
        id_users: user.id,
        id_vehicle: vehicle.id,
        departure_date: departure,
        arrival_date: arrival,
      })
      .then((book) => {
        toast("Your booking has been validated");
        setTimeout(() => navigate(`/summary-booking/${book.data}`), 4000);
      })
      .catch((err) => console.error(err));
  };

  const backToAllVehicles = () => {
    setVehicle({});
    toast("Booking successfully deleted");
    setTimeout(() => navigate("/search"), 4000);
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
    <div
      className="h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images-ext-1.discordapp.net/external/pPJ7tOzgHisfFsYFJFt5r5BzzqKZorId_JI9d3-5Q-M/https/i.pinimg.com/originals/94/1c/c3/941cc3a0ff66359276efa3e288aacb64.jpg?width=921&height=518)",
      }}
    >
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Users - Booking</title>
        <meta
          name="description"
          content="Reserve a vehicle from our rental fleet on this page. Choose from a variety of vehicles and rental options to suit your needs."
        />
        <link rel="icon" type="image/png" href="../src/assets/iconeMario.png" />
      </Helmet>
      <Nav />
      <div>
        <div className="flex flex-col justify-center items-center space-x-8 mt-10 gap-5">
          {vehicle && (
            <div className="max-w-sm flex flex-col w-screen rounded-lg border-2 overflow-hidden ml-10 my-2 px-2 py-2 bg-[#deb887e6]">
              <div className="pt-1 flex justify-end">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {vehicle.type}
                </span>
              </div>
              <div>
                <div className="flex items-center pl-6">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={vehicle.picture}
                    alt={vehicle.model}
                  />
                  <div className="flex flex-col px-8 py-4">
                    <div className="font-bold text-xl mb-2">
                      {vehicle.model}
                    </div>
                    <p className="text-gray-700 text-base text-sm">
                      Year {vehicle.vehicle_year}
                    </p>
                    <p className="text-gray-700 text-base text-sm">
                      {vehicle.kilometer} Km
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-5">
            <ButtonTemplate
              buttonType="button"
              buttonText="Delete booking"
              buttonStyle="bg-blue-900 hover:bg-blue-800 w-48 h-10 rounded-lg text-white p-3"
              methodOnClick={backToAllVehicles}
            />

            <ButtonTemplate
              buttonType="button"
              buttonText="Book this car"
              buttonStyle="bg-blue-900 hover:bg-blue-800 w-48 h-10 rounded-lg text-white p-3"
              methodOnClick={handleValidation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
