import AddVehicle from "@pages/addVehicle";
import AllVehicles from "@pages/AllVehicles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle/creation" element={<AddVehicle />} />
          <Route path="/vehicles" element={<AllVehicles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
