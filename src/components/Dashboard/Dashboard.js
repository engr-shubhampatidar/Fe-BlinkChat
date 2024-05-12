import React from "react";
import bell from "./../../assets/images/logo-bell.png";

import back from "./../../assets/images/left.png";
import fav from "./../../assets/images/love.png";
import Drawer from "./OpenDrawer";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { useSocket } from "../../services/sockets";
import send from "./../../assets/images/send-icon.png";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [previousMessages, setPreviousMessages] = useState([]);
  const [pollingInterval, setPollingInterval] = useState(1000); // Start with 1 second
  const [consecutiveSameCount, setConsecutiveSameCount] = useState(0); // Track consecutive same messages

  const [userList, setUserList] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  // const [recipientUser, setRecipientUser] = useState(null);
  const [openLeft, setOpenLeft] = useState(true);

  const { reciepentUser: recipientUser } = useSelector((state) => state?.user);

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
      sender: currentUser._id,
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
    if (currentUser && currentUser._id)
      socket.emit("joinRoom", currentUser._id);
  }, [currentUser._id]);

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
    console.log(pollingInterval, "polling interval");
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/api/messages/${currentUser?._id}/${recipientUser?._id}`
        );
        const newMessages = response?.data; // Assuming your API response has a "messages" property

        if (JSON.stringify(newMessages) !== JSON.stringify(previousMessages)) {
          setMessages(newMessages);
          setPreviousMessages(newMessages);
          setConsecutiveSameCount(0); // Reset consecutive count on message change
          setPollingInterval(1000); // Reset interval to 1 second
        } else {
          setConsecutiveSameCount(consecutiveSameCount + 1);
          if (consecutiveSameCount >= 5 && pollingInterval === 1000) {
            if (pollingInterval <= 20000) {
              setPollingInterval(pollingInterval + 5000); // Increase interval by 5 seconds
            }
          }
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    let intervalId; // Declare outside the if block

    if (recipientUser) {
      intervalId = setInterval(fetchData, pollingInterval);
    }

    // Cleanup function to clear the interval on unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [recipientUser, consecutiveSameCount, previousMessages, pollingInterval]);

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
      <div className="flex flex-r w-full h-screen bg-gray-300 chat-home-bg justify-center p-10 max-sm:p-0">
        {/* searchbox */}

        {/* chatbox */}
        <div className="w-3/5 h-auto bg-gray-100 rounded-xl max-sm:rounded max-sm:w-full">
          <div className=" w-full flex justify-between  rounded-t-xl border-b border-gray-300 topBar-bg">
            {/* <div className="flex w-full  border-b border-gray-300  items-center"> */}
            {/* <div
              className=" flex
               items-center justify-center "
            > */}
            <div
              className="
                  flex
                  items-center justify-center
                  cursor-pointer"
              onClick={() => setOpenLeft(!openLeft)}
            >
              <img className="h-5 w-5 ml-2" src={back}></img>
              {recipientUser?.url ? (
                <img
                  className="rounded-full object-cover w-10 h-10"
                  src={recipientUser?.url}
                ></img>
              ) : (
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#014efe] rounded-full ml-2">
                  <span class="font-medium text-gray-600 dark:text-gray-300 ">
                    {recipientUser?.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}

              <div>
                <p className="font-bold text-xl w-auto  text-left ml-2 ">
                  {recipientUser?.name || "Select a user"}
                </p>
              </div>
              <Drawer open={openLeft} side="left" setOpen={setOpenLeft} />
            </div>
            <div className=" h-auto flex p-4 items-center ">
              <div className=" pl-5 text-blue-600">
                <div className="flex flex-row justify-end">
                  <img className="h-6 w-6 " src={fav} />
                  <img className="h-6 w-6 ml-4" src={bell} />
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
          {/* main chat */}
          <div className="h-4/5 flex flex-col p-4 overflow-y-auto no-scrollbar ">
            {messages.map((message, index) => (
              <div
                key={message._id}
                className={`rounded-lg h-auto  p-2 w-auto max-sm:max-w-52  text-pretty break-words mt-2 ${
                  message.sender === currentUser._id
                    ? "bg-blue-200 self-end text-left"
                    : "bg-gray-200 self-start text-left "
                }
                ${messages?.length - 1 === index ? "mb-8" : ""}`}
                ref={messages?.length - 1 === index ? chatbox : null}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
          {/* send box */}
          <div className="flex px-2 bg-gray-100">
            <input
              className="flex-grow border rounded-xl p-2 pl-4 mt-4 bg-gray-300"
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
              className="bg-blue-500 text-white rounded-xl ml-1 mt-4 font-semibold px-4 py-2  hover:bg-blue-600"
              onClick={sendMessage}
            >
              <img className="h-4 w-4 hover:rotate-45" src={send} />
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
