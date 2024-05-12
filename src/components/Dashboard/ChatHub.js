import { clsx } from "clsx";
import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import editLogo from "./../../assets/images/image-.png";
import logOut from "./../../assets/images/logout1.png";
import { UserList } from "./UserList";

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

const ChatHub = ({ open, setOpen, side = "right" }) => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

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
                  "flex flex-col  overflow-y-scroll shadow-xl bg-white rounded-r-2xl no-scrollbar"
                )}
              >
                <div className="bg-white  from-block rounded-2xl ">
                  <div className="  w-80  h-screen pl-1 pr-1">
                    <div className=" h-20 flex flex-start p-4 items-cente items-center">
                      {currentUser?.url ? (
                        <div className="relative">
                          <img
                            className="rounded-full object-cover w-16 h-16"
                            src={currentUser?.url}
                          ></img>
                          <div className="absolute-icon rounded-full w-6 h-6 flex items-center justify-center bg-gray-600">
                            <NavLink to={"/upload/profile"}>
                              <img className="h-3 w-3" src={editLogo} />
                            </NavLink>
                          </div>
                        </div>
                      ) : (
                          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#014efe] rounded-full">
                          <span class="font-medium text-gray-600 dark:text-gray-300">
                            {currentUser.name?.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      )}
                      <div className=" pl-3 text-blue-600 text-xl w-48">
                        <p className="text-sm w-5 font-bold">
                          {currentUser.name}
                        </p>
                        <p className="text-xs w-5 ">
                          {currentUser.email?.split("@")[0]}
                        </p>
                      </div>
                      <div className="flex flex-row ">
                        <button
                          onClick={() => {
                            localStorage.clear();
                            navigate("/login");
                          }}
                          className="w-9 h-8 flex items-center justify-center rounded-md bg-red-500"
                        >
                          <img className="h-4 w-4" src={logOut} />
                        </button>
                      </div>
                    </div>
                    <div className="flex w-full  p-5">
                      <input
                        className="rounded-md text-sm text-gray-600 w-72 p-0.5 py-2
                    border border-solid border-[rgb(214, 206, 206)] pl-2 "
                        placeholder="Find Friends..."
                      ></input>
                    </div>
                    <UserList />
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

export default ChatHub;
