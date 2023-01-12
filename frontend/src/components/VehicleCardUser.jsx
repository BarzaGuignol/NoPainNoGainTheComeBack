/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";

function VehicleCardUser({ vehicle }) {
  return (
    <div className="max-w-sm flex flex-col w-screen rounded-lg border-2 overflow-hidden ml-10 my-2 px-2 py-2">
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
            <div className="font-bold text-xl mb-2">{vehicle.model}</div>
            <p className="text-gray-700 text-base text-sm">
              Année {vehicle.vehicle_year}
            </p>
            <p className="text-gray-700 text-base text-sm">
              {vehicle.kilometer} km
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <button
            type="button"
            // onClick={methodOnClick}
            className="cstm_buttonPrimary px-6"
          >
            Choose
          </button>
        </div>
      </div>
    </div>
  );
}

export default VehicleCardUser;
