import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "@pages/Search";
import AddVehicle from "@pages/AddVehicle";
import Footer from "@components/Footer";
import PanicRoom from "@pages/PanicRoom";
import AllVehicles from "@pages/AllVehicles";
import EditVehicle from "@pages/EditVehicle";
import Booking from "@pages/Booking";
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
          <Route path="/panic-room" element={<PanicRoom />} />
          <Route path="/vehicle/update/:id" element={<EditVehicle />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/search"
            element={
              <Search
                departure={decisionDepart}
                arrival={decisionArrival}
                setType={setTypeChoice}
                setDeparture={setDecisionDepart}
                setArrival={setDecisionArrival}
                type={typeChoice}
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
