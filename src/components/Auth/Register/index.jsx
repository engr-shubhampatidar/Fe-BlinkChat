import React, { useEffect, useState } from "react";
import "../Register/index.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./../../../assets/images/logo-blue.svg";
import logo2 from "./../../../assets/images/Blink-Logo2.png"
import api from "../../../services/api";

// import logo from "../../../assets/images/love.png";
import axios from "axios";
function Register() {
  const [countryList, setCountryList] = useState([]);
  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        setCountryList(data);
        console.log(data);
      });
  };
  useEffect(() => {
    getCountries();
  }, []);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const submitinfo = async () => {
    try {
      await api
        .post("/api/user/register", {
          email: userData?.email,
          password: userData?.password,
          name: userData?.name,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response?.data));
          navigate("/login");
        })
        .catch((error) => {
          if (error?.response?.data) {
            setErrorMessage(error.response.data);
          } else {
            setErrorMessage("An error occurred while register");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="SignUp-page bg-gray-300 h-screen  height max-xl:home-bg">
        <div className=" flex h-screen justify-center items-center  max-sm:p-2">
          <div
            className="w-auto h-auto z-50 p-8 rounded-xl
                  bg-white  text-gray-600 max-sm:py-10"
          >
            <div className="flex justify-start text-3xl font-bold p-2 max-sm:justify-center">
              <img src={logo2} alt="blinkchat-logo" className="h-10" />
            </div>
            <div className="flex justify-start text-xl px-2 p-2 font-bold text-gray-800 max-sm:justify-center">
              <h1>SignUp</h1>
            </div>
            <div className="flex justify-start text-sm px-2 p-2 max-sm:justify-center">
              <p>
                Enter your details below to create your account and get started.
              </p>
            </div>

            <div className="forms-container grid grid-cols-2 max-sm:grid-cols-1">
              <div className="  w-auto h-auto flex justify-center">
                <form className="p-2 w-60 max-sm:pb-0">
                  <p className="text-xs text-gray-400 text-left w-auto font-bold pb-1 ">
                    Full name *
                  </p>
                  <input
                    value={userData?.name}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    type="text"
                    className=" bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)] mb-4 pl-2"
                    placeholder="Ex. John Martin"
                  />

                  <p className="text-xs text-left text-gray-400 w-auto font-bold pb-1 ">
                    password *
                  </p>
                  <input
                    value={userData?.password}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    type="password"
                    className=" bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)] mb-4 pl-2"
                    placeholder="Password "
                  />

                  <p className="text-xs text-gray-400 text-left w-auto font-bold pb-1 ">
                    Gender
                  </p>
                  <select
                    className=" w-56 py-2 text-gray-400 mb-4 text-xs rounded-md pl-2
                    border border-solid border-[rgb(214, 206, 206)]"
                    name=""
                    id=""
                  >
                    <option  value="Male">Male</option>
                    <option  value="Female">Female</option>
                  </select>

                  <p className="text-xs text-gray-400 text-left w-auto font-bold pb-1 ">
                    Phone Number
                  </p>
                  <input
                    type="number"
                    readOnly
                    className=" bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                             border border-solid border-[rgb(214, 206, 206)] mb-4 pl-2"
                    placeholder="+91 18813 31881"
                  />
                </form>
              </div>
              <div className=" w-auto h-auto flex justify-center ">
                <div className="p-2 w-60 max-sm:pt-0">
                  <p className="text-xs text-gray-400 text-left w-auto font-bold pb-1  ">
                    Email ID *
                  </p>
                  <input
                    value={userData?.email}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    type="text"
                    className=" bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)] mb-4 pl-2"
                    placeholder="example@gmail.com"
                  />

                  <p className="text-xs text-gray-400 text-left w-auto font-bold pb-1 m">
                    Confrim password *
                  </p>
                  <input
                    value={userData?.confirmPassword}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    type="password"
                    className=" input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)] mb-4 pl-2"
                    placeholder="Re-enter Password"
                  />

                  <p className="text-xs text-gray-400 text-left w-auto font-bold pb-1 max-sm:hidden">
                    Select Country
                  </p>
                  <select
                    className="input-area w-56 py-2 mb-4 text-xs rounded-md pl-2
                    border border-solid border-[rgb(214, 206, 206)] max-sm:hidden"
                    name=""
                    id=""
                  >
                    {countryList?.map((country) => (
                      <option value="Male">{country?.name?.common}</option>
                    ))}
                  </select>

                  <p className="text-xs text-gray-400 text-left w-auto font-bold pb-1 max-sm:hidden">
                    date
                  </p>
                  <input
                    type="date"
                    className=" bg-white rounded-md text-xs text-gray-600 w-56 py-2 mb-4 
                    border border-solid border-[rgb(214, 206, 206)] pl-2 pr-2 max-sm:hidden"
                    placeholder="date"
                  />
                </div>
              </div>
            </div>
            <div className="text-red-600  text-xs flex items-center pb-5 ml-12">
              <p className=" w-96 ">{errorMessage}</p>
            </div>
            <div className="grid grid-cols-2 justify-center items-center gap-5 max-sm:grid-cols-1 max-sm:gap-2">
              <div className="flex justify-center items-center order-2">
                <button
                  className=" text-gray-600  px-4 py-1.5 rounded-md w-56  mb-4 
                border border-solid border-[rgb(214, 206, 206)] "
                >
                  Cancel
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={submitinfo}
                  className="bg-[#014efe] text-white w-56 px-4 py-1.5 rounded-md  mb-4 "
                >
                  Confrim
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center text-xs pt-2">
              <p>
                Already have an Account ?{" "}
                <NavLink className={"text-[#014efe]"} to={"/login"}>
                  {" "}
                  Login
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
