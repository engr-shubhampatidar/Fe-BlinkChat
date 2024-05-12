import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { useSocket } from "../../services/sockets";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [previousMessages, setPreviousMessages] = useState([]);
  const [pollingInterval, setPollingInterval] = useState(1000); // Start with 1 second
  const [consecutiveSameCount, setConsecutiveSameCount] = useState(0); // Track consecutive same messages
  const timeoutRef = useRef(null); // Ref to store the timeout

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const { recipientUser } = useSelector((state) => state?.user);

  const socket = useSocket();

  const chatBox = useRef(null);
  // useEffect(() => chatBox.current.scrollIntoView(false), [messages]);

  const scrollBottom = () => {
    if (chatBox?.current) {
      chatBox.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const sendMessage = async () => {
    if (!recipientUser) return; // Ensure recipient is selected
    const message = {
      sender: currentUser._id,
      receiver: recipientUser._id,
      content: newMessage,
    };
    socket.emit("message", message);
    await api.post("/api/messages", message);
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

  useEffect(() => {
    console.log(pollingInterval, consecutiveSameCount, "polling interval");
    let isFetching = false; // Flag to track ongoing API call
    let intervalId; // Declare outside the if block
    const fetchData = async () => {
      if (isFetching) return; // Prevent multiple concurrent API calls
      isFetching = true;

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
          clearTimeout(timeoutRef.current); // Clear timeout if message changes
          timeoutRef.current = null;
        } else {
          setConsecutiveSameCount(consecutiveSameCount + 1);
          if (consecutiveSameCount >= 5) {
            if (pollingInterval <= 20000) {
              setPollingInterval(pollingInterval + 5000); // Increase interval by 5 seconds
            } else {
              setPollingInterval(1000);
            }
          }
          // Check for 2 minutes of inactivity
          if (consecutiveSameCount >= 25) {
            // Assuming 120 calls = 2 minutes (1000ms/call * 120 calls = 120 seconds)
            clearInterval(intervalId);
            setMessages([]); // Clear messages if inactive for 2 minutes
            console.log("Stopped fetching messages due to inactivity.");
          }
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        isFetching = false; // Reset flag after API call finishes
      }
    };

    if (recipientUser) {
      intervalId = setInterval(fetchData, pollingInterval);
    }

    // Cleanup function to clear the interval on unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        clearTimeout(timeoutRef.current); // Clear timeout on unmount as well
      }
    };
  }, [recipientUser, consecutiveSameCount, previousMessages, pollingInterval]);

  return (
    <>
      <div className="h-4/5 flex flex-col bg-gray-100 p-4 overflow-y-auto no-scrollbar ">
        {messages.map((message, index) => (
          <div
            key={message._id}
            className={`rounded-lg h-auto block p-2 w-auto  mt-2 ${
              message.sender === currentUser._id
                ? "bg-blue-200 self-end"
                : "bg-gray-200 self-start"
            }
                ${messages?.length - 1 === index ? "mb-10" : ""}`}
            ref={messages?.length - 1 === index ? chatBox : null}
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
    </>
  );
};
