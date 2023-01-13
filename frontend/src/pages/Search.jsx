/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Nav from "@components/Nav";

export default function Search() {
  const [decisionDepart, setDecisionDepart] = useState("");
  const [decisionArrival, setDecisionArrival] = useState("");
  const [typeChoice, setTypeChoice] = useState("");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Administrator - Search </title>
        <meta
          name="description"
          content="Filter and narrow down your vehicle search on this page by rental dates, location, vehicle type, and other options."
        />
        <link rel="icon" type="image/png" href="../sec/assets/favicon.svg" />
      </Helmet>
      <Nav />
      <div className="text-center h-[100vh]">
        <h1 className="font-bold text-3xl pt-8 pb-4">Search</h1>
        <div className="border-solid border-2 border-blue-900 w-2/5 mx-auto p-8">
          <form className="mb-8 ">
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
          <form className="mb-8">
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

          <form className="mb-10">
            <label htmlFor="selectVehicle" className="mr-8">
              Select type of vehicle :
            </label>
            <select
              className="w-3/4 md:w-5/12 lg:w-3/12 p-1.5 text-gray-500 bg-white border rounded-md shadow-sm"
              id="selectVehicle"
              onChange={(e) => setTypeChoice(e.target.value)}
            >
              <option value="">Type</option>
              <option value="50CC">50CC</option>
              <option value="100CC">100CC</option>
              <option value="150CC">150CC</option>
            </select>
          </form>
          <Link
            to={`/vehicles?arrival_date=${decisionArrival}&departure_date=${decisionDepart}&type=${typeChoice}`}
            className="bg-blue-900 hover:bg-blue-800 rounded-lg px-12 py-3 text-white"
            type="button"
          >
            Research
          </Link>
        </div>
      </div>
    </>
  );
}
