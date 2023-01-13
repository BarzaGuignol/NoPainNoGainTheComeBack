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
      <ul className="flex justify-around items-center">
        <Link to="/">
          <img
            className="w-8 sm:w-12"
            src="https://cdn.discordapp.com/attachments/1062381866923069480/1063234118852288652/91610-mario-play-toy-super-kart-download-hd-png.png"
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
          <button type="button" onClick={handleLogOut}>
            <img
              className="w-10 sm:w-14"
              src="https://cdn.discordapp.com/attachments/1062381866923069480/1063236183955603466/bullet-PhotoRoom.png-PhotoRoom.png"
              alt="logo"
            />
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
