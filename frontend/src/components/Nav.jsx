import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../contexts/UserContext";

function Nav() {
  const { user, handleUser } = useContext(User.UserContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    handleUser({});
    navigate("/");
  };
  return (
    <div className="border-b-4 border-indigo-900">
      <ul className="flex justify-around">
        <Link to="/">
          <img
            className="w-28"
            src="https://www.freeiconspng.com/thumbs/vehicle-icon/vehicle-icon-7.jpg"
            alt="logo"
          />
        </Link>
        <div className="flex justify-end gap-5 items-center">
          {user?.user_type === 2 && (
            <>
              <Link to="/users" className="font-extrabold text-xl">
                DASHBOARD
              </Link>
              <Link to="/search" className="font-extrabold text-xl">
                USERS
              </Link>
              <Link
                to="/vehicles/management"
                className="font-extrabold text-xl"
              >
                COMPANY
              </Link>
            </>
          )}
          <button
            type="button"
            onClick={handleLogOut}
            className="font-extrabold text-xl"
          >
            LOG OUT
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
