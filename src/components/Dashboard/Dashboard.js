import React from "react";
import profile from "./../../assets/images/profile.jpg";
import logo from "./../../assets/images/logo-pencil.png";
import chat from "./../../assets/images/conversation.png";
import person from "./../../assets/images/person.png";
import fav from "./../../assets/images/love.png";
import hihi from "./../../assets/images/hihi.png";

function Dashboard() {
  return (
    <>
      <div className="flex flex-r w-full h-screen bg-red-300">
        {/* searchbox */}
        <div className="bg-white ">
          <div className=" bg-white w-80">
            <div className="bg-white h-20 flex flex-start p-4 items-center">
              <img className="rounded-full w-16 h-16" src={profile}></img>
              <div className=" pl-5 text-blue-600 text-xl">
                <p className="font-900">UserName</p>
                <div className="text-xs text-black text-left font-400">
                  <p>FullName</p>
                </div>
              </div>
              <div className="ml-20">
                <img className="coursor-pointer" src={logo} />
              </div>
            </div>
            <div className="flex w-full bg-white p-5">
              <input
                className="bg-white rounded-md text-sm text-gray-600 w-72 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)]  pl-2"
                placeholder="Find Friends..."
              ></input>
            </div>
            <div className="flex w-full bg-white border border-solid border-[rgb(214, 206, 206)]">
              <div className="bg-white h-auto flex flex-start p-4 items-center">
                <img className="rounded-full w-12 h-12" src={profile}></img>
                <div className=" pl-5 text-blue-600 text-sm">
                  <p className="font-600">UserName</p>
                  <div className="text-xs text-black  font-400 text-left">
                    <p>hey..kaise ho aap</p>
                  </div>
                </div>
                <div className=" ml-24">
                  <p className="text-xs pb-2">10:00am</p>
                  <p className="bg-green-700 ml-8 rounded-full text-xs  text-white">
                    1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chatbox */}
        <div className="w-3/5 bg-white border-2 p-2">
          <div className=" w-full">
            <div className="flex w-full bg-white border border-solid border-[rgb(214, 206, 206)]">
              <div className="bg-white h-auto flex flex-start p-4 items-center">
                <img className="rounded-full w-12 h-12" src={profile}></img>
                <div className=" pl-5 text-blue-600 flex flex-row items-center">
                  <p className="font-bold text-xl w-96  text-left">FullName</p>
                  <img className="h-6 w-6 ml-96" src={fav} />
                </div>
              </div>
            </div>
          </div>
          {/* main chat */}
          <div className="h-5/6 bg-slate-500">
            <img className="h-full" src={hihi} />
          </div>
          {/* send box */}
          <input
            className="bg-gray-300 rounded-md text-sm text-gray-600 w-full p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)]  pl-2"
            placeholder="Find Friends..."
          ></input>
        </div>
        {/* chat person profile */}
        <div className="bg-white w-80">
          <div className="flex flex-col items-center w-full">
            <img
              className="h-36 w-36 rounded-full mt-16 border-2 border-solid border-stone-500"
              src={profile}
            />
            <p className="text-2xl font-bold pt-5">FullName</p>
            <p className="text-sm ">UserName</p>
          </div>
          <div className=" grid grid-cols-2 mt-10">
            <div className="border-r border-gray-400 flex  flex-col items-center">
              <div className="image">
                <img className="h-16 w-16" src={chat} />
              </div>
              <p>Messages</p>
            </div>
            <div>
              <div className="border-r flex  flex-col items-center">
                <div className="image">
                  <img className="h-16 w-16" src={chat} />
                </div>
                <p>Messages</p>
              </div>
            </div>
          </div>
          <div className="border-gray-400 flex  flex-col mt-5">
            <div className=" flex flex-row items-center py-2 pl-10">
              <img className="h-4 w-4" src={person} />
              <p className="text-xs pl-1">UserName</p>
            </div>
            <div className=" flex flex-row items-center pl-10">
              <img className="h-4 w-4" src={fav} />
              <p className="text-xs pl-1">Add to favriote</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
