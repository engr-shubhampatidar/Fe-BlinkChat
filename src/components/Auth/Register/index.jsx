import React, { useEffect, useState } from "react";
import "../Register/index.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
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
 
 const [userData, setUserData] = useState({ email: "", password: "" ,name:"" , confirmPassword:""});
  const navigate = useNavigate();
  const submitinfo = () => {
    try{
    axios
  .post("http://localhost:4000/api/user/register",{
    email: userData?.email,
    password: userData?.password,
    name:userData?.name,

  })
    .then((response) => {
          localStorage.setItem("user", JSON.stringify(response?.data));
          navigate("/");
        });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="SignUp-page bg-[#014efe] h-screen ">
        <div className=" flex h-screen justify-center items-center ">
          <div
            className="w-auto h-auto z-50 p-8 rounded-xl
                  bg-white  text-gray-600"
          >
            <div className="flex justify-start text-3xl font-bold px-2  p-2">
              <img src={logo} alt="blinkchat-logo" className="h-10" />
            </div>
            <div className="flex justify-start text-xl px-2 p-2 font-bold text-gray-800">
              <h1>SignUp</h1>
            </div>
            <div className="flex justify-start text-sm px-2 p-2">
              <p>
                Enter your details below to create your account and get started.
              </p>
            </div>

            <div className="forms-container flex flex-r grid-cols-2">
              <div className="  w-auto h-auto ">
                <form className="p-2">
                  <p className="text-xs mr-40 w-auto font-bold pb-1">
                    Full name *
                  </p>
                  <input
                  value={userData?.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                    type="text"
                    className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                           border-2 border-solid border-gray-700 mb-4 pl-2"
                    placeholder="Ex. John Martin"
                  />

                  <p className="text-xs mr-40 w-auto font-bold pb-1">
                    password *
                  </p>
                  <input
                  value={userData?.password}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                    type="password"
                    className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                            border-2 border-solid border-gray-700 mb-4 pl-2"
                    placeholder="Password "
                  />

                  <p className="text-xs mr-44 w-auto font-bold pb-1">Gender</p>
                  <select
                    className="input-area border-2 w-56 py-2 mb-4 text-xs rounded-md pl-2"
                    name=""
                    id=""
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  <p className="text-xs mr-32 w-auto font-bold pb-1">
                    Phone Number
                  </p>
                  <input
                    type="number"
                    readOnly
                    className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                             border-2 border-solid border-gray-700 mb-4 pl-2"
                    placeholder="+91 18813 31881"
                  />
                </form>
              </div>
              <div className=" w-auto h-auto  ">
                <div className="p-2">
                  <p className="text-xs mr-40 w-auto font-bold pb-1">
                    Email ID *
                  </p>
                  <input
                  value={userData?.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                    type="text"
                    className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                            border-2 border-solid border-gray-700 mb-4 pl-2"
                    placeholder="example@gmail.com"
                  />

                  <p className="text-xs mr-28 w-auto font-bold pb-1">
                    Confrim password *
                  </p>
                  <input
                  value={userData?.confirmPassword}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, confirmPassword: e.target.value }))
                }
                    type="password"
                    className=" input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                            border-2 border-solid border-gray-700 mb-4 pl-2"
                    placeholder="Re-enter Password"
                  />

                  <p className="text-xs mr-32 w-auto font-bold pb-1">
                    Select Country
                  </p>
                  <select
                    className="input-area border-2 w-56 py-2 mb-4 text-xs rounded-md pl-2"
                    name=""
                    id=""
                  >
                    {countryList?.map((country) => (
                      <option value="Male">{country?.name?.common}</option>
                    ))}
                  </select>

                  <p className="text-xs mr-48 w-auto font-bold pb-1">date</p>
                  <input
                    type="date"
                    className="input-area bg-white rounded-md text-xs text-gray-600 w-56 py-2 mb-4 
                                             pl-2 pr-2"
                    placeholder="date"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-r justify-center items-center gap-7">
              <div className="flex justify-center items-center">
                <button className=" input-area text-gray-600  px-4 py-1.5 rounded-md w-56  mb-4 ">
                  Cancel
                </button>
              </div>
              <div className="flex justify-center items-center">
                <button
                 onClick={submitinfo}
                className="bg-[#014efe] text-white w-56 px-4 py-1.5 rounded-md  mb-4 ">
                  Confrim
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center text-xs pt-2">
              <p>
                Already have an Account ?
                <NavLink className={"text-[#014efe]"} to={"/login"}>
                  Login
                </NavLink>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
