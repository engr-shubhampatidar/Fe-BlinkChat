import React from "react";
import bell from "./../../assets/images/logo-bell.png";

import back from "./../../assets/images/left.png";
import fav from "./../../assets/images/love.png";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chat } from "./Chat";
import ChatHub from "./ChatHub";
import Input from "./Input";
import { openChatHub } from "../../services/redux/chatHubReducer";


const ActiveChat = ({ recipientUser }) => {
  const dispatch = useDispatch();

  return (
    <div className="h-16 w-full flex justify-between bg-white  rounded-t-xl border-b border-gray-300 topBar-bg
    max-sm:static z-0">
      <div
        className="flex
            items-center justify-center
            cursor-pointer"
        onClick={() => dispatch(openChatHub())}
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
      </div>
      <div className=" h-auto flex p-4 items-center ">
        <div className=" pl-5 text-blue-600">
          <div className="flex flex-row justify-end">
            <img className="h-6 w-6 " src={fav} />
            <img className="h-6 w-6 ml-4" src={bell} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  // const [recipientUser, setRecipientUser] = useState(null);
  const { isOpen } = useSelector((state) => state?.chatHub);

  const dispatch = useDispatch();

  const [isKeyboard, setIsKeyboard] = useState(false);

  const { recipientUser } = useSelector((state) => state?.user);

  return (
    <>
      <ChatHub side="left" />
      <div className="flex flex-col items-center w-full h-screen bg-red-300 chat-home-bg p-10 max-sm:p-0">
        <div className="w-3/6 max-sm:w-full h-full bg-white rounded-xl">
          <ActiveChat recipientUser={recipientUser} />
          <Chat />
          {/* <div className="w-3/5 h-auto bg-gray-100 rounded-xl max-sm:rounded max-sm:w-full">
        </div> */}
          <Input setIsKeyboard={setIsKeyboard} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
