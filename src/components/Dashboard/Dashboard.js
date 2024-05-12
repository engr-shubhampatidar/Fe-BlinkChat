import React from "react";
import bell from "./../../assets/images/logo-bell.png";

import back from "./../../assets/images/left.png";
import fav from "./../../assets/images/love.png";

import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { useSocket } from "../../services/sockets";
import ChatHub from "./ChatHub";
import { Chat } from "./Chat";

function Dashboard() {
  // const [recipientUser, setRecipientUser] = useState(null);
  const [openLeft, setOpenLeft] = useState(true);

  const { recipientUser } = useSelector((state) => state?.user);

  return (
    <>
      <div className="flex flex-r w-full h-screen bg-gray-300 justify-center p-10 max-sm:p-0">
        <div className="w-3/5 h-auto bg-gray-100 rounded-xl max-sm:rounded max-sm:w-full">
          <div className=" w-full flex justify-between border-b border-gray-300">
            <div
              className="flex
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
              <ChatHub open={openLeft} side="left" setOpen={setOpenLeft} />
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
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
