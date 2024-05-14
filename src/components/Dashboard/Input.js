// react templates functional components
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalMessages } from '../../services/redux/messageReducer';
import { useSocket } from '../../services/sockets';
import api from '../../services/api';
import send from "./../../assets/images/send-icon.png";
import { set } from 'firebase/database';


const Input = ({ setIsKeyboard }) => {
    const [newMessage, setNewMessage] = useState("");
    const { totalMessages } = useSelector((state) => state?.message);
    const { recipientUser } = useSelector((state) => state?.user);

    const currentUser = JSON.parse(localStorage.getItem("user"));

    const socket = useSocket();


    const dispatch = useDispatch();

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
        const updatedTotalMessages = [...totalMessages, message];
        dispatch(setTotalMessages({ totalMessages: updatedTotalMessages }));
        // setMessages((prevMessages) => [...prevMessages, message]);
        // scrollBottom();
    };

    {/* send box */ }
    return (
        < div className="flex px-2 mt-4  max-sm:static" >
            <input
                className="flex-grow border rounded-xl p-2 pl-4 bg-gray-300"
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        sendMessage();
                    }
                }}
                
                onFocus={() => setIsKeyboard(true)}
                onBeforeInput={() => console.log("Enter key pressed")}
            />
            <button
                className="bg-blue-500 text-white rounded-xl ml-1 font-semibold px-4 py-2  hover:bg-blue-600"
                onClick={sendMessage}
            >
                <img className="h-4 w-4 hover:rotate-45" src={send} />
            </button>
        </div >
    )
}

export default Input;