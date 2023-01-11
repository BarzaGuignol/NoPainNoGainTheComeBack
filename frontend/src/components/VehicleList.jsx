// import { useState, useEffect } from "react";
// import apiConnexion from "../services/apiConnexion";
import VehicleCardUser from "./VehicleCardUser";

function VehicleList({ search, statusId, title }) {
  const [vehicleList, setVehicleList] = useState();

  useEffect(() => {
    apiConnexion
      .get(`decisionsMaking/?status=${statusId}&search=${search}`)
      .then((res) => {
        setVehicleList(res.data);
      })
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div>
      <div>
        <h1 className="text-start font-bold text-3xl px-12 pt-8 pb-4">
          {title}
        </h1>
        <div className="px-2">
          <div className="flex w-full -mx-2">
            {vehicleList &&
              vehicleList.map((vehicle) => (
                <VehicleCardUser key={vehicle.id} vehicle={vehicle} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleList;
