import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function Register() {
    return (
        <>
            <div className="SignUp-page bg-[#014efe] h-screen " >
                <div className=" flex h-screen justify-center items-center ">
                    <div className="w-auto h-auto z-50 p-8 rounded-xl
                  bg-white  text-gray-600">
                        <div className="flex justify-start text-3xl font-bold px-2  p-2">
                            <img src={logo} alt="blinkchat-logo" className="h-10" /></div>
                        <div className="flex justify-start text-xl px-2 p-2 font-bold text-gray-800">
                            <h1>SignUp</h1></div>
                        <div className="flex justify-start text-sm px-2 p-2">
                            <p>Enter your details below to create your account and get started.</p>
                        </div>

                        <div className="forms-container flex flex-r grid-cols-2">
                            <div className="  w-auto h-auto ">
                                <form className="p-2">
                                    
                                    <p className="text-xs mr-40 w-auto font-bold pb-1">Full name</p>
                                    <input
                                        type="text"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                           border-2 border-solid border-gray-700 mb-4 pl-2"
                                        placeholder="Ex. John Martin" />

                                    <p className="text-xs mr-44 w-auto font-bold pb-1">Gender</p>
                                    <input
                                        type="text"
                                        className=" input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                            border-2 border-solid border-gray-700 mb-4 pl-2"
                                        placeholder="Select" />
                                   
                                    <p className="text-xs mr-40 w-auto font-bold pb-1">password</p>
                                    <input
                                        type="password"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                            border-2 border-solid border-gray-700 mb-4 pl-2"
                                        placeholder="Password " />

                                    <p className="text-xs mr-28 w-auto font-bold pb-1">Confrim password</p>
                                    <input
                                        type="password"
                                        className=" input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                            border-2 border-solid border-gray-700 mb-4 pl-2"
                                        placeholder="Re-enter Password" />

                                </form>
                            </div>
                            <div className=" w-auto h-auto  ">
                                <form className="p-2">
                                    
                                    <p className="text-xs mr-40 w-auto font-bold pb-1">Email ID</p>
                                    <input
                                        type="text"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                            border-2 border-solid border-gray-700 mb-4 pl-2"
                                        placeholder="example@gmail.com" />
                                   
                                    <p className="text-xs mr-32 w-auto font-bold pb-1">Phone Number</p>
                                    <input type="number"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                             border-2 border-solid border-gray-700 mb-4 pl-2"
                                        placeholder="+91 18813 31881" />
                                    
                                    <p className="text-xs mr-32 w-auto font-bold pb-1">Select Country</p>
                                    <input
                                        type="text"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                             border-2 border-solid border-gray-700 mb-4 pl-2"
                                        placeholder="Select" />
                                    
                                    <p className="text-xs mr-48 w-auto font-bold pb-1">date</p>
                                    <input type="date"
                                        className="input-area bg-white rounded-md text-xs text-gray-600 w-56 py-2 mb-4 
                                             pl-2"
                                        placeholder="date" />

                                </form>
                            </div>
                        </div>
                        <div className="flex flex-r justify-center items-center gap-4" >
                            <div className="flex justify-center items-center">
                                <button className=" input-area 
                                 text-gray-600 w-40 px-4 py-1.5 rounded-md w-56 text-black mb-4 ">Cancel</button>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="
                                bg-[#014efe] text-white w-56 px-4 py-1.5 rounded-md w-48 mb-4 ">Confrim</button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center text-xs pt-2">
                            <p>Already have an Account ? 
                            <NavLink className={"text-[#014efe]"} to={'/login'}>Login</NavLink>  </p>                 
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;