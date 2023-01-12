/* eslint-disable react/prop-types */
import VehicleCardUser from "./VehicleCardUser";

function VehicleList({ vehicleList }) {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-8 pb-4">All vehicles</h1>
      <div className="px-2 w-full flex justify-center ">
        <div className="grid grid-cols-3 -mx-2">
          {vehicleList &&
            vehicleList.map((vehicle) => (
              <VehicleCardUser key={vehicle.id} vehicle={vehicle} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default VehicleList;
