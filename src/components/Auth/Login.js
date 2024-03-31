import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      axios
        .post("http://localhost:4000/api/user/login", {
          email: user?.email,
          password: user?.password,
        })
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response?.data));
          navigate("/");
        });
    } catch (error) {
      console.error(error);
    }
  };

  console.log(user, "user data");

  return (
    <>
      <div className=" login-Page w-full h-screen bg-gray-300 flex justify-center items-center home-bg">
        <div className="w-auto h-auto bg-white rounded-lg px-8 pt-8">
          <div className="flex justify-center items-center flex-col">
            <div className="flex font-bold text-3xl p-1">
              <img src={logo} alt="React Image " className=" w-10 h-10" />
            </div>
            <div className="flex font-bold text-3xl text-gray-700 p-2">
              <p>WelCome Back</p>
            </div>
            <div className="flex text-xs py-2 px-2 mb-4  text-gray-600 w-48">
              <p>Glad to see you again login to your account below</p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col text-gray-400">
            <div className=" flex justify-center items-center flex-col">
              <p className="mr-56 text-xs mb-1 font-bold">Email ID</p>
              <input
                value={user?.email}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
                type="text"
                className=" input text-black bg-white rounded-md text-sm text-gray-600 w-72 p-2 py-2 mb-4
                         "
                placeholder="email@useremail"
              />
              <p className=" text-xs mb-1 font-bold mr-52">Password</p>
              <input
                value={user?.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
                className=" input text-black bg-white rounded-md text-sm text-gray-600 w-72 p-2 py-2 mb-4"
                placeholder="Password....."
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-800 text-white rounded-md text-xs  font-600 w-72 py-2 mb-4
                         border-2 border-solid "
              >
                Log in
              </button>
              <div className="lol mb-4 text-xs ">
                <p>
                  Don't have an account ?
                  <a className="text-blue-600" href="#">
                    Sign up
                  </a>{" "}
                </p>
              </div>
            </div>
            ``{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
