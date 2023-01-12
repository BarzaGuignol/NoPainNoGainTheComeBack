import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import apiConnexion from "@services/apiConnexion";

import User from "../contexts/UserContext";

function Login() {
  const { handleUser } = useContext(User.UserContext);
  const [infos, setInfos] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const notify = (msg) => {
    toast(msg);
  };

  const handleInputOnChange = (place, value) => {
    const newUser = { ...infos };
    newUser[place] = value;
    setInfos(newUser);
  };

  // eslint-disable-next-line consistent-return
  const handleLogin = () => {
    if (!validateEmail.test(infos.email)) {
      return notify("Email is not correct");
    }
    if (!validatePassword.test(infos.password)) {
      return notify("Password is not correct");
    }
    delete infos.confirmPassword;
    apiConnexion
      .post(`/login`, {
        ...infos,
      })
      .then((curentUser) => {
        handleUser(curentUser.data);
        notify("Connected!");
        if (curentUser.data.user_type === 1) {
          navigate("/vehicles/management");
        }
        if (curentUser.data.user_type === 0) {
          navigate("/search");
        }
      })
      .catch((err) => {
        notify("Wrong Credentials!");
        console.error(err);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <p className="text-white">Enter your credentials to connect</p>
        <form className="flex flex-col items-center gap-y-7 w-full">
          <InputTemplate
            customWidth="cstm_width_XlInput bg-white"
            inputType="text"
            textPlaceholder="Email"
            value={infos.email}
            methodOnChange={handleInputOnChange}
            name="email"
          />
          <InputTemplate
            customWidth="cstm_width_XlInput bg-white"
            inputType="password"
            textPlaceholder="Password"
            value={infos.password}
            methodOnChange={handleInputOnChange}
            name="password"
          />
          <ButtonTemplate
            buttonType="button"
            buttonText="CONNECT"
            buttonStyle="cstm_cstmrButton"
            methodOnClick={handleLogin}
          />
        </form>
      </div>
    </>
  );
}

export default Login;
