import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Function to send a message
  const sendMessage = () => {
    const message = {
      sender: currentUser.id,
      receiver: recipientUser.id,
      content: newMessage,
    };
    // socket.emit("message", message);
    socket.emit("send_message", { message: newMessage });

    setNewMessage("");
  };

  const currentUser = {
    id: "6607c70783f054a7b844e6f8",
    name: "Shubham",
    email: "shubham@mailinator.com",
  };

  const recipientUser = {
    id: "660900b65db4e459e92a6cdc",
    name: "Raj",
    email: "raj@mailinator.com",
  };

  useEffect(() => {
    console.log("Socket connected");
    // socket.on("disconnect", () => {
    //   console.log("Socket disconnected");
    // });

    // Join a room based on current user's ID
    socket.emit("joinRoom", currentUser.id);

    // Listen for incoming messages
    // socket.on("message", (message) => {
    //   setMessages((prevMessages) => [...prevMessages, message]);
    // });

    // Error handling
    socket.on("error", (error) => {
      console.error("Socket error:", error);
    });

    socket.on("receive_message", (data) => {
      alert("Received message");
      console.log(data);
      setMessages((prevMessages) => [...prevMessages, data?.message]);
    });

    // Clean up socket connection when component unmounts
    // return () => {
    //   socket.disconnect();
    // };
  }, [currentUser.id]);

  console.log(messages, "all messages");
  return (
    <div className="App">
      {messages?.map((message) => (
        <h1> {message}</h1>
      ))}

      <div>
        <h1>Chat Room</h1>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
