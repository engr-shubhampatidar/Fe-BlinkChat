import React from "react";
import profile from "./../../assets/images/profile.jpg";
import logo from "./../../assets/images/logo-pencil.png";
import chat from "./../../assets/images/conversation.png";
import person from "./../../assets/images/person.png";
import fav from "./../../assets/images/love.png";
import bell from "./../../assets/images/logo-bell.png";
import logOut from "./../../assets/images/logout.png";
import { NavLink } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userList, setUserList] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [recipientUser, setRecipientUser] = useState(null);

  const chatbox = useRef(null);
  // useEffect(() => chatbox.current.scrollIntoView(false), [messages]);

  const scrollBottom = () => {
    if (chatbox?.current) {
      chatbox.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const sendMessage = () => {
    if (!recipientUser) return; // Ensure recipient is selected
    const message = {
      sender: currentUser.id,
      receiver: recipientUser._id,
      content: newMessage,
    };
    socket.emit("message", message);
    saveMessage(message);
    setNewMessage("");
  };

  const saveMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    scrollBottom();
  };

  useEffect(() => {
    console.log("Socket connected");
    socket.emit("joinRoom", currentUser.id);

    // Add message event listener only once
    const handleNewMessage = (message) => {
      console.log("Message received:", message);
      saveMessage(message);
    };

    socket.on("message", handleNewMessage);

    // Clean up event listener when component unmounts
    return () => {
      socket.off("message", handleNewMessage);
    };
  }, [currentUser.id]);

  const getAllUsers = async () => {
    await axios
      .get("http://localhost:4000/api/user/all")
      .then((res) => {
        console.log(res?.data);
        const { user } = res?.data;
        if (user) {
          setUserList(user);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getImage = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const timestamp = Date.now(); // Get the current timestamp
        const url = `https://source.unsplash.com/random/200x200`;
        resolve(url);
      }, 1000); // Wait for 1 second (1000 milliseconds)
    });
  };

  const getRandomImage = async () => {
    const imageUrl = await getImage();
    console.log(imageUrl);
    return imageUrl;
  };

  return (
    <>
      <div className="flex flex-r w-full h-screen bg-gray-300 justify-center p-10">
        {/* searchbox */}
        <div className="bg-white rounded-l-2xl">
          <div className="  w-80 h-5/6 pl-1 pr-1">
            <div className=" h-20 flex flex-start p-4 items-center">
              <img
                className="rounded-full w-16 h-16"
                src={"https://source.unsplash.com/random/200x200"}
              ></img>
              <div className=" pl-5 text-blue-600 text-xl w-48">
                <p className="text-sm w-5 font-bold">{currentUser.name}</p>
                <p className="text-xs w-5 ">
                  {currentUser.email?.split("@")[0]}
                </p>
              </div>
              <div className="ml-2 ">
                <img className="coursor-pointer h-5 w-5" src={logo} />
              </div>
            </div>
            <div className="flex w-full  p-5">
              <input
                className=" rounded-md text-sm text-gray-600 w-72 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)]  pl-2"
                placeholder="Find Friends..."
              ></input>
            </div>
            <div className="overflow-y-auto h-5/6 no-scrollbar">
              {userList.map((user) => (
                <div
                  key={user}
                  className=" babu flex w-full border rounded-lg border-solid border-gray-300] 
                  hover:bg-gray-200 active:bg-gray-200 "
                >
                  <div className=" h-auto flex flex-start p-3 items-center">
                    <img
                      className="rounded-full w-10 h-10"
                      src={"https://source.unsplash.com/random/200x200"}
                    ></img>
                    <div className=" pl-1 text-blue-600 text-sm">
                      <div className="space-y-2 ">
                        <div
                          key={user._id}
                          onClick={() => setRecipientUser(user)}
                          className={`cursor-pointer p-3 rounded-md w-48 text-left ${
                            recipientUser && recipientUser._id === user._id
                              ? ""
                              : ""
                          }`}
                        >
                          {user.name}
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <p className="text-xs pb-2">10:00am</p>
                      <p className="bg-green-700 ml-8 rounded-full text-xs  text-white">
                        0
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* chatbox */}
        <div className="w-3/5 h-auto bg-gray-100 rounded-r-xl">
          <div className=" w-full">
            <div className="flex w-full  border-b border-gray-300">
              <div className=" h-auto flex flex-start p-4 items-center">
                <img
                  className="rounded-full w-12 h-12"
                  src={"https://source.unsplash.com/random/200x200"}
                ></img>
                <div className=" pl-5 text-blue-600 flex flex-row items-center">
                  <p className="font-bold text-xl w-96  text-left">
                    {recipientUser?.name || "Select a user"}
                  </p>
                  <img className="h-6 w-6 ml-96" src={fav} />
                  <img className="h-6 w-6 ml-4" src={bell} />
                </div>
              </div>
            </div>
          </div>
          {/* main chat */}
          <div className="h-4/5 flex flex-col bg-gray-100 p-4 overflow-y-auto no-scrollbar ">
            {messages.map((message, index) => (
              <div
                key={message._id}
                className={`rounded-lg h-auto block p-2 max-w-lg mt-2 ${
                  message.sender === currentUser.id
                    ? "bg-blue-200 self-end"
                    : "bg-gray-200 self-start"
                }
                ${messages?.length - 1 === index ? "mb-10" : ""}`}
                ref={messages?.length - 1 === index ? chatbox : null}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
          {/* send box */}
          <div className="flex px-2 bg-gray-100">
            <input
              className="flex-grow border rounded-l-md p-2"
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-blue-600"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
        {/* chat person profile */}
        {/* <div className="bg-white w-80">
          <div className="flex flex-col items-center w-full">
            <img
              className="h-36 w-36 rounded-full mt-16 border-2 border-solid border-stone-500"
              src={"https://source.unsplash.com/random/200x200"}
            />
            <p className="text-2xl text-blue-600 font-bold pt-5">
              {recipientUser?.name || "Select a user"}
            </p>
            <p className="text-sm text-blue-600">
              {recipientUser?.email?.split("@")[0]}
            </p>
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
              <p className="text-xs pl-1">
                {recipientUser?.email?.split("@")[0]}
              </p>
            </div>
            <div className=" flex flex-row items-center pl-10">
              <img className="h-4 w-4" src={fav} />
              <p className="text-xs pl-1">Add to favriote</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Dashboard;
