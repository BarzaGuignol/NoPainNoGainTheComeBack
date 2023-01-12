/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "@components/Nav";

export default function Search({
  departure,
  arrival,
  setType,
  setDeparture,
  setArrival,
}) {
  const handleDecisionDeparture = (e) => {
    setDeparture(e.target.value);
  };

  const handleDecisionArrival = (e) => {
    setArrival(e.target.value);
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin - User List </title>
        <meta
          name="description"
          content="Filter and narrow down your vehicle search on this page by rental dates, location, vehicle type, and other options."
        />
        <link rel="icon" type="image/png" href="../sec/assets/favicon.svg" />
      </Helmet>
      <Nav />
      <div className="text-center h-[100vh]">
        <h1 className="text-green-900 font-bold mb-20 text-2xl underline">
          Booking
        </h1>
        <div className="border-solid border-2 border-green-900 w-4/5 mx-auto p-8">
          <form className="mb-8">
            <label htmlFor="departure" className="mr-8">
              Departure :
            </label>
            <input
              className="border-2 border-500 rounded-lg outline-[#c8c8c8]"
              type="date"
              id="departure"
              name="trip-departure"
              value={departure}
              onChange={handleDecisionDeparture}
            />
          </form>
          <form className="mb-8">
            <label htmlFor="departure" className="mr-8">
              Arrival :
            </label>
            <input
              className="border-2 border-500 rounded-lg outline-[#c8c8c8]"
              type="date"
              id="departure"
              name="trip-departure"
              value={arrival}
              onChange={handleDecisionArrival}
            />
          </form>

          <form className="mb-20" onChange={handleChange}>
            <label htmlFor="selectVehicle" className="mr-8">
              Select type of vehicle :
            </label>
            <select id="selectVehicle">
              <option value="">Type</option>
              <option value="Break">Break</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Limousine">Limousine</option>
              <option value="Truck">Truck</option>
              <option value="Pick-up">Pick-up</option>
              <option value="Van">Van</option>
            </select>
          </form>
          <Link
            to="/vehicles"
            className="border-solid border-2 border-green-900 rounded-full w-40 text-green-900"
            type="button"
          >
            Validation
          </Link>
        </div>
      </div>
    </>
  );
}
