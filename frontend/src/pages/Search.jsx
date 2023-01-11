/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

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
            value={departure}
            onChange={handleDecisionDeparture}
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
            value={arrival}
            onChange={handleDecisionArrival}
          />
        </form>

        <form className="mb-20" onChange={handleChange}>
          <label htmlFor="selectVehicle" className="mr-8">
            Select type of vehicle :
          </label>
          <select id="selectVehicle">
            <option value="break">Break</option>
            <option value="sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="limousine">Limousine</option>
            <option value="truck">Truck</option>
            <option value="pick-up">Pick-up</option>
            <option value="van">Van</option>
          </select>
        </form>
        <Link
          to="/vehicles"
          className="border-solid border-2 border-green-900 rounded-full w-40 text-green-900"
        >
          Validation
        </Link>
      </div>
    </div>
  );
}
