import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "@pages/Search";
import AddVehicle from "@pages/AddVehicle";
import Footer from "@components/Footer";
import PanicRoom from "@pages/PanicRoom";
import AllVehicles from "@pages/AllVehicles";
import EditVehicle from "@pages/EditVehicle";
import Login from "@pages/Login";
import Booking from "@pages/Booking";
import ManagementVehicles from "@pages/ManagementVehicles";
import Home from "./pages/Home";
import User from "./contexts/UserContext";

import "./App.css";

function App() {
  const { user } = useContext(User.UserContext);
  const [decisionDepart, setDecisionDepart] = useState("2023-01-11");
  const [decisionArrival, setDecisionArrival] = useState("2023-01-11");
  const [typeChoice, setTypeChoice] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Pages des entreprises */}
          {user?.user_type === 1 && (
            <>
              <Route
                path="/vehicles/management"
                element={<ManagementVehicles />}
              />
              <Route path="/vehicle/creation" element={<AddVehicle />} />
              <Route path="/vehicle/update/:id" element={<EditVehicle />} />
            </>
          )}
          {/* Pages des collaborateurs */}
          {user?.user_type === 0 && (
            <>
              <Route path="/panic-room" element={<PanicRoom />} />
              <Route
                path="/search"
                element={
                  <Search
                    departure={decisionDepart}
                    arrival={decisionArrival}
                    setType={setTypeChoice}
                    setDeparture={setDecisionDepart}
                    setArrival={setDecisionArrival}
                  />
                }
              />
              <Route
                path="/vehicles"
                element={
                  <AllVehicles
                    departure={decisionDepart}
                    arrival={decisionArrival}
                    type={typeChoice}
                  />
                }
              />
              <Route path="/booking" element={<Booking />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
