/* eslint-disable react/prop-types */
import VehicleCardUser from "./VehicleCardUser";

function VehicleList({ vehicleList, departure, arrival }) {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-8 pb-4">
        Choose your kart !
      </h1>
      <div className="px-2 w-full flex justify-center ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {vehicleList &&
            vehicleList.map((vehicle) => (
              <VehicleCardUser
                key={vehicle.id}
                vehicle={vehicle}
                departure={departure}
                arrival={arrival}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default VehicleList;
