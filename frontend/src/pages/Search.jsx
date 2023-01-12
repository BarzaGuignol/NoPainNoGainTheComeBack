/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Search() {
  const [decisionDepart, setDecisionDepart] = useState("");
  const [decisionArrival, setDecisionArrival] = useState("");
  const [typeChoice, setTypeChoice] = useState("");
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
      <div className="text-center">
        <h1 className="text-green-900 font-bold mb-20 text-2xl underline">
          Booking
        </h1>
        <div className="border-solid border-2 border-green-900 w-4/5 mx-auto p-8">
          <form>
            <label htmlFor="departure" className="mr-8">
              Departure :
            </label>
            <input
              className="border-2 border-500 rounded-lg outline-[#c8c8c8]"
              type="date"
              id="departure"
              name="trip-departure"
              value={decisionDepart}
              onChange={(e) => setDecisionDepart(e.target.value)}
            />
          </form>

          <form>
            <label htmlFor="departure" className="mr-8">
              Arrival :
            </label>
            <input
              className="border-2 border-500 rounded-lg outline-[#c8c8c8]"
              type="date"
              id="departure"
              name="trip-departure"
              value={decisionArrival}
              onChange={(e) => setDecisionArrival(e.target.value)}
            />
          </form>

          <form className="mb-20">
            <label htmlFor="selectVehicle" className="mr-8">
              Select type of vehicle :
            </label>
            <select
              id="selectVehicle"
              onChange={(e) => setTypeChoice(e.target.value)}
            >
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
            to={`/vehicles?arrival_date=${decisionArrival}&departure_date=${decisionDepart}&type=${typeChoice}`}
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
