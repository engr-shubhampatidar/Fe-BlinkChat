import { clsx } from "clsx";
import React from "react";
import logo from "./../../assets/images/logo-pencil.png";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSocket } from "../../services/sockets";
import { useDispatch } from "react-redux";
import { setReciepentUser } from "../../services/redux/userReducer";
import { useNavigate } from "react-router-dom";

const openClassNames = {
  right: "translate-x-0",
  left: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0",
};

const closeClassNames = {
  right: "translate-x-full",
  left: "-translate-x-full",
  top: "-translate-y-full",
  bottom: "translate-y-full",
};

const classNames = {
  right: "inset-y-0 right-0",
  left: "inset-y-0 left-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

const Drawer = ({ open, setOpen, side = "right" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [userList, setUserList] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [recipientUser, setRecipientUser] = useState(null);
  const [openLeft, setOpenLeft] = useState(false);

  const socket = useSocket();

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

  // Add message event listener only once
  const handleNewMessage = (message) => {
    saveMessage(message);
  };

  useEffect(() => {
    socket.on("message", handleNewMessage);

    return () => {
      socket.off("message", handleNewMessage);
    };
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.id) socket.emit("joinRoom", currentUser.id);
  }, [currentUser.id]);

  const getAllUsers = async () => {
    await api
      .get("/api/user/all")
      .then((res) => {
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

  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      <div
        className={clsx(
          "fixed inset-0 bg-gray-500 bg-opacity-75 transition-all",
          {
            "opacity-100 duration-500 ease-in-out visible": open,
          },
          { "opacity-0 duration-500 ease-in-out invisible": !open }
        )}
      ></div>
      <div className={clsx({ "fixed inset-0 overflow-hidden": open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              "pointer-events-none fixed max-w-full",
              classNames[side]
            )}
          >
            <div
              className={clsx(
                "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
                { [closeClassNames[side]]: !open },
                { [openClassNames[side]]: open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className={clsx(
                  "flex flex-col  overflow-y-scroll shadow-xl bg-white rounded-2xl no-scrollbar"
                )}
              >
                <div className="bg-white  from-block rounded-2xl ">
                  <div className="  w-80  h-screen pl-1 pr-1">
                    <div className=" h-20 flex flex-start p-4 items-cente">
                      <img
                        className="rounded-full w-16 h-16"
                        src={"https://source.unsplash.com/random/200x200"}
                      ></img>
                      <div className=" pl-5 text-blue-600 text-xl w-48">
                        <p className="text-sm w-5 font-bold">
                          {currentUser.name}
                        </p>
                        <p className="text-xs w-5 ">
                          {currentUser.email?.split("@")[0]}
                        </p>
                      </div>
                      <div className="ml-2 ">
                        {/* <img className="coursor-pointer h-5 w-5" src={logo} /> */}
                        <button
                          onClick={() => {
                            localStorage.clear();
                            navigate("/login");
                          }}
                          className="bg-blue-800 text-white rounded-md text-xs  font-600 w-16 py-2 mb-4
                          border-2 border-solid"
                        >
                          log Out
                        </button>
                      </div>
                    </div>
                    <div className="flex w-full  p-5">
                      <input
                        className=" rounded-md text-sm text-gray-600 w-72 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)]  pl-2 "
                        placeholder="Find Friends..."
                      ></input>
                    </div>
                    <div className="overflow-y-auto h-4/5 no-scrollbar">
                      {userList.map((user) => (
                        <div
                          key={user?._id}
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
                                  onClick={() => {
                                    setRecipientUser(user);
                                    setOpen(false);
                                    dispatch(
                                      setReciepentUser({
                                        reciepentUser: user,
                                      })
                                    );
                                  }}
                                  className={`cursor-pointer p-3 rounded-md w-48 text-left ${
                                    recipientUser &&
                                    recipientUser._id === user._id
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
