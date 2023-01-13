import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

import InputTemplate from "@components/InputTemplate";
import ButtonTemplate from "@components/ButtonTemplate";
import apiConnexion from "@services/apiConnexion";
import Nav from "@components/Nav";

import User from "../contexts/UserContext";

function Login() {
  const { handleUser } = useContext(User.UserContext);
  const [hidePassword, setHidePassword] = useState(true);
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
        notify("Connected !");
        if (curentUser.data.user_type === 1) {
          navigate("/vehicles/management");
        }
        if (curentUser.data.user_type === 0) {
          navigate("/search");
        }
        if (curentUser.data.user_type === 2) {
          navigate("/users");
        }
      })
      .catch((err) => {
        notify("Wrong Credentials!");
        console.error(err);
      });
  };

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta
          name="description"
          content="Login page to access your personal account"
        />
        <link rel="icon" type="image/png" href="../src/assets/iconeMario.png" />
      </Helmet>
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
      <Nav />
      <div className="h-[100vh]">
        <form className="flex flex-col items-center gap-y-7 w-full mt-40">
          <InputTemplate
            customWidth="w-3/4 md:w-5/12 lg:w-3/12 bg-white"
            inputType="text"
            textPlaceholder="Email"
            value={infos.email}
            methodOnChange={handleInputOnChange}
            name="email"
          />
          {hidePassword ? (
            <InputTemplate
              customWidth="w-3/4 md:w-5/12 lg:w-3/12 bg-white"
              inputType="password"
              textPlaceholder="Password"
              value={infos.password}
              methodOnChange={handleInputOnChange}
              name="password"
            />
          ) : (
            <InputTemplate
              customWidth="w-3/4 md:w-5/12 lg:w-3/12 bg-white"
              inputType="text"
              textPlaceholder="Password"
              value={infos.password}
              methodOnChange={handleInputOnChange}
              name="password"
            />
          )}

          <div className="flex space-x-6">
            <ButtonTemplate
              buttonType="button"
              buttonText="To log in"
              buttonStyle="bg-blue-900 hover:bg-blue-800 w-48 h-10 rounded-lg text-white"
              methodOnClick={handleLogin}
            />
            {hidePassword ? (
              <button
                className="w-[30px] h-[30px] mt-2"
                onClick={showPassword}
                type="button"
              >
                <img
                  src="https://www.svgrepo.com/show/384356/close-cross-eye-hidden-vision.svg"
                  alt="eyeCross"
                />
              </button>
            ) : (
              <button
                className="w-[30px] h-[30px] mt-2"
                onClick={showPassword}
                type="button"
              >
                <img
                  src="https://www.svgrepo.com/show/384342/eye-look-show-view-visible-visiblity.svg"
                  alt="eyeOpen"
                />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
