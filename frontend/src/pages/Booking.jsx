import React, { useState } from "react";

export default function Booking() {
  const [decisionDepart, setDecisionDepart] = useState("2023-01-11");
  const [decisionArrival, setDecisionArrival] = useState("2023-01-11");
  const [typeChoice, setTypeChoice] = useState("");

  const handleDecisionDeparture = (e) => {
    setDecisionDepart(e.target.value);
  };

  const handleDecisionArrival = (e) => {
    setDecisionArrival(e.target.value);
  };

  const handleChange = (e) => {
    setTypeChoice(e.target.value);
  };

  const dataButton = () => {
    alert(`departure : ${decisionDepart}
    arrival : ${decisionArrival}
    type : ${typeChoice}`);
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
            value={decisionDepart}
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
            value={decisionArrival}
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
            <option value="Limousine">Limousine</option>
            <option value="truck">Truck</option>
            <option value="pick-up">Pick-up</option>
            <option value="van">Van</option>
          </select>
        </form>
        <button
          className="border-solid border-2 border-green-900 rounded-full w-40 text-green-900"
          type="button"
          onClick={dataButton}
        >
          Validation
        </button>
      </div>
    </div>
  );
}
