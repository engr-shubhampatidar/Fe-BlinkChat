import React from "react";

function LoginPage() {
    return (
        <>
           <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
            <div className="w-auto h-auto bg-white rounded-lg px-8 pt-8">
               <div className="flex justify-center items-center flex-col">
                <div className="flex font-bold text-3xl p-1">
                    <h1>01</h1>
                </div>
                <div className="flex font-800 text-3xl text-gray-800 p-2">
                    <p>WelCome Back</p>
                </div>
                <div className="flex text-xs py-2 px-2 mb-4  text-gray-600 w-48">
                    <p>Glad to see you again
                        login to your account below
                    </p>
                </div>
               </div>
               <div className="flex justify-center items-center flex-col text-gray-400">
                    <form className=" flex justify-center items-center flex-col">
                        <p className="mr-64 text-xs mb-1 font-bold">Email</p>
                        <input type="text"
                        className="text-black bg-white rounded-md text-xs text-gray-600 w-72 p-0.5 py-1 mb-4
                         border-2 border-solid border-gray-700 "
                        placeholder="email@useremail"/>
                         <p className="mr-52 text-xs mb-1 font-bold"> Your Password</p>
                        <input type="password"
                        className="text-black bg-white rounded-md text-xs text-gray-600 w-72 p-0.5 py-1 mb-4
                         border-2 border-solid border-gray-700"
                        placeholder="Password........"/>
                        <button className="bg-blue-800 text-white rounded-md text-xs  font-600 w-72 p-0.5 py-1 mb-4
                         border-2 border-solid ">Log in</button>
                         <div className="lol mb-4 text-xs ">
                            <p>Don't have an account ?<a className="text-blue-600" href="#">Sign up</a> </p>
                         </div>
                    </form>
               </div>
            </div>
           </div>
        
        </>

    )
}
export default LoginPage;