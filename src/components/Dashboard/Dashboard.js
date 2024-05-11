import React from "react";
import bell from "./../../assets/images/logo-bell.png";

import fav from "./../../assets/images/love.png";
import back from "./../../assets/images/left.png";
import Drawer from "./OpenDrawer";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSocket } from "../../services/sockets";
import { useSelector } from "react-redux";
import api from "../../services/api";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userList, setUserList] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  // const [recipientUser, setRecipientUser] = useState(null);
  const [openLeft, setOpenLeft] = useState(true);

  const { reciepentUser: recipientUser } = useSelector((state) => state?.user);

  console.log("store", recipientUser);

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
    await axios
      .get("http://localhost:4000/api/user/all")
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

  const getMessages = async () => {
    await api
      .get(`/api/messages/${currentUser?.id}/${recipientUser?._id}`)
      .then((response) => {
        console.log(response?.data);
        setMessages(response?.data);
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };

  useEffect(() => {
    getMessages();
  }, [recipientUser]);

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
    return imageUrl;
  };

  

  return (
    <>
      <div className="flex flex-r w-full h-screen bg-gray-300 justify-center p-10 max-sm:p-0">
        {/* searchbox */}

        {/* chatbox */}
        <div className="w-3/5 h-auto bg-gray-100 rounded-xl max-sm:rounded max-sm:w-full">
          <div className=" w-full">
            <div className="flex w-full  border-b border-gray-300  items-center">
              <div
                className=" flex
    items-center justify-center "
              >
                <div
                  className="
        flex
        items-center justify-center
        cursor-pointer"
                  onClick={() => setOpenLeft(!openLeft)}
                >
                  <img className="h-5 w-5 ml-2" src={back}></img>
                </div>

                <Drawer open={openLeft} side="left" setOpen={setOpenLeft} />
              </div>

              <div className=" h-auto flex flex-start p-4 items-center">
                {/* <img
                  className="rounded-full w-12 h-12"
                  src={"https://source.unsplash.com/random/200x200"}
                ></img> */}
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#014efe] rounded-full ">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    {recipientUser?.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className=" pl-5 text-blue-600 flex flex-row items-center">
                  <p className="font-bold text-xl w-96  text-left max-sm:w-36 ">
                    {recipientUser?.name || "Select a user"}
                  </p>
                  <div className="flex flex-row w-96 max-sm:w-40">
                    <img className="h-6 w-6 ml-auto max-sm:ml-auto" src={fav} />
                    <img className="h-6 w-6 ml-4" src={bell} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main chat */}
          <div className="h-4/5 flex flex-col bg-gray-100 p-4 overflow-y-auto no-scrollbar ">
            {messages.map((message, index) => (
              <div
                key={message._id}
                className={`rounded-lg h-auto block p-2 w-auto  mt-2 ${
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
