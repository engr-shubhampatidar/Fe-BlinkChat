import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const socket = io.connect(process.env.REACT_APP_BASE_URL);

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [recipientUser, setRecipientUser] = useState(null);
  const [userList, setUserList] = useState([]);

  const navigate = useNavigate();

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

  const getAllUsers = () => {
    api
      .get("/api/user/all")
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

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  console.log(recipientUser);

  return (
    <div className="bg-slate-200 h-screen">
      <div className="bg-gray-100 h-screen flex">
        <div className="w-auto bg-gray-200 p-4">
          <h1 className="text-xl font-semibold mb-4">Users</h1>
          <button
            onClick={logOut}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-r-md"
          >
            log out
          </button>
          <div className="space-y-2 ">
            {userList.map((user) => (
              <div
                key={user._id}
                onClick={() => setRecipientUser(user)}
                className={`cursor-pointer p-3 rounded-md ${
                  recipientUser && recipientUser._id === user._id
                    ? "bg-gray-300"
                    : ""
                }`}
              >
                {user.name}
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 bg-white p-4 flex flex-col">
          <h1 className="text-xl font-semibold mb-4">
            {recipientUser?.name || "Select a user"}
          </h1>
          <div className="flex flex-col">
            {messages.map((message) => (
              <div
                key={message._id}
                className={`p-2 rounded-lg w-auto mt-2 ${
                  message.sender === currentUser.id
                    ? "bg-blue-200 self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
          <div className="flex">
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
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-r-md hover:bg-blue-700"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
