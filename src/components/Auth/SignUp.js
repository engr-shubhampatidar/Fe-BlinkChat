import React from "react";
import { Route, Routes } from "react-router-dom";
function SignUp() {
    return (
        <>
            <div className="SignUp-page" >
                <div className=" flex h-screen justify-center items-center ">
                    <div className="w-auto h-auto  p-8 rounded-xl
                  bg-white  text-gray-600">
                        <div className="flex justify-start text-3xl text-black font-bold px-1 p-2"><h1>01</h1></div>
                        <div className="flex justify-start text-xl px-2 p-2"><h1>SignUp</h1></div>
                        <div className="flex justify-start text-sm px-2 p-2"><p>Utilities for setting the width of an element</p></div>

                        <div className="forms-container flex flex-r grid-cols-2">
                            <div className="  w-auto h-auto ">
                                <form className="p-2">
                                    <p className="text-xs mr-40 w-auto font-bold">Username</p>
                                    <input
                                        type="text"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="Username" />
                                    <p className="text-xs mr-48 w-auto font-bold">date</p>
                                    <input type="date"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="date" />
                                    <p className="text-xs mr-44 w-auto font-bold">nation</p>
                                    <input
                                        type="text"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="desh" />
                                    <p className="text-xs mr-40 w-auto font-bold">password</p>
                                    <input
                                        type="password"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="Password " />

                                </form>
                            </div>
                            <div className=" w-auto h-auto  ">
                                <form className="p-2">
                                    <p className="text-xs mr-40 w-auto font-bold ">Email ID</p>
                                    <input
                                        type="text"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="email@username" />
                                    <p className="text-xs mr-32 w-auto font-bold">Phone Number</p>
                                    <input type="number"
                                        className="input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="+91 12345 67891" />
                                    <p className="text-xs mr-44 w-auto font-bold">ID type</p>
                                    <input
                                        type="text"
                                        className=" input-area bg-white rounded-md text-sm text-gray-600 w-56 p-0.5 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="Select" />
                                    <p className="text-xs mr-28 w-auto font-bold">Confrim password</p>
                                    <input
                                        type="password"
                                        className=" input-area bg-white rounded-md text-xs text-gray-600 w-56 p-0.5 py-2
                                    border-2 border-solid border-gray-700 mb-4"
                                        placeholder="Re-enter Password" />

                                </form>
                            </div>
                        </div>
                        <div className="flex flex-r justify-center items-center gap-4" >
                            <div className="flex justify-center items-center">
                                <button className=" input-area 
                                 text-white w-40 px-4 py-1.5 rounded-md w-56 text-black mb-4 ">Cancel</button>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="
                                bg-blue-500 text-white w-56 px-4 py-2 rounded-md w-48 mb-4 ">Confrim</button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <p>raj patida rfrom abdi churaly</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;