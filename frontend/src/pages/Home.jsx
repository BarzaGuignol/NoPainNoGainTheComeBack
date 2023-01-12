import React, { useContext } from "react";
import { Link } from "react-router-dom";

import User from "../contexts/UserContext";

export default function Home() {
  const { user } = useContext(User.UserContext);
  console.log(user);
  return (
    <div>
      <h1 className="text-red-700">Home</h1>
      <Link className="cstm_cstmrButton" to="/vehicle/creation">
        AddVehicle
      </Link>
      <Link className="cstm_cstmrButton" to="/vehicle/update/1">
        EditVehicle
      </Link>
    </div>
  );
}
