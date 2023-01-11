/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

function VehicleCardUser({ vehicle }) {
  return (
    <div className="max-w-sm flex flex-col w-screen rounded-lg border-2 overflow-hidden ml-10 my-2 px-2">
      <div className="px-6 pt-4 flex justify-end">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {vehicle.type}
        </span>
      </div>
      <div>
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src={vehicle.picture}
            alt={vehicle.model}
          />
          <div className="flex flex-col px-6 py-4">
            <div className="font-bold text-xl mb-2">{vehicle.model}</div>
            <p className="text-gray-700 text-base text-sm">
              Année {vehicle.vehicle_year}
            </p>
            <p className="text-gray-700 text-base text-sm">
              {vehicle.kilometer} km
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleCardUser;
