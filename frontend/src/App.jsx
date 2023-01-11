import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "@pages/Search";
import AllVehicles from "@pages/AllVehicles";
import AddVehicle from "@pages/addVehicle";
import EditVehicle from "@pages/EditVehicle";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [decisionDepart, setDecisionDepart] = useState("2023-01-11");
  const [decisionArrival, setDecisionArrival] = useState("2023-01-11");
  const [typeChoice, setTypeChoice] = useState("");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle/creation" element={<AddVehicle />} />
          <Route path="/vehicle/update/:id" element={<EditVehicle />} />
          <Route
            path="/booking"
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
