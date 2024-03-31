import React from "react";
import logo from "../../assets/images/logo.png";

function LoginPage() {
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
            <form className=" flex justify-center items-center flex-col">
              <p className="mr-56 text-xs mb-1 font-bold">Email ID</p>
              <input
                type="text"
                className=" input text-black bg-white rounded-md text-sm text-gray-600 w-72 p-2 py-2 mb-4
                         "
                placeholder="email@useremail"
              />
              <p className=" text-xs mb-1 font-bold mr-52">Password</p>
              <input
                type="password"
                className=" input text-black bg-white rounded-md text-sm text-gray-600 w-72 p-2 py-2 mb-4"
                placeholder="Password....."
              />
              <button
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
            </form>
      ``    </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
