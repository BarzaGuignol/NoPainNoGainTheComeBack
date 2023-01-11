import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "@pages/Search";
import AllVehicles from "@pages/AllVehicles";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [decisionDepart, setDecisionDepart] = useState("2023-01-11");
  const [decisionArrival, setDecisionArrival] = useState("2023-01-11");
  const [typeChoice, setTypeChoice] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
    </Router>
  );
}

export default App;
