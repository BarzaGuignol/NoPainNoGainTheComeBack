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
import UserListAdmin from "@pages/UserListAdmin";
import AddUserAdmin from "@pages/AddUserAdmin";
import ManagementVehicles from "@pages/ManagementVehicles";

import User from "./contexts/UserContext";

import "./App.css";

function App() {
  const { user } = useContext(User.UserContext);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />

          {/* Pages des entreprises */}
          {(user?.user_type === 1 || user?.user_type === 2) && (
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
          {(user?.user_type === 0 || user?.user_type === 2) && (
            <>
              <Route path="/panic-room" element={<PanicRoom />} />
              <Route path="/search" element={<Search />} />
              <Route path="/vehicles" element={<AllVehicles />} />
              <Route path="/booking" element={<Booking />} />
            </>
          )}
          {user?.user_type === 2 && (
            <>
              <Route path="/users" element={<UserListAdmin />} />
              <Route path="/users/creation" element={<AddUserAdmin />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
