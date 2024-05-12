import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setRecipientUser } from "../../services/redux/userReducer";

export const UserList = () => {
  const [userList, setUserList] = useState([]);
  const { recipientUser } = useSelector((state) => state?.user);

  const dispatch = useDispatch();

  const getAllUsers = async () => {
    await api
      .get("/api/user/all")
      .then((res) => {
        const { users } = res?.data;
        if (users) {
          setUserList(users);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="overflow-y-auto h-4/5 no-scrollbar">
      {userList.map((user) => (
        <div
          key={user?._id}
          className=" babu flex w-full border rounded-lg border-solid border-gray-300] 
                   hover:bg-gray-200 active:bg-gray-200 "
        >
          <div className=" h-auto flex flex-start p-3 items-center">
            {user?.url ? (
              <img
                className="rounded-full object-cover w-10 h-10"
                src={user?.url}
              ></img>
            ) : (
              <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-[#014efe] rounded-full ">
                <span class="font-medium text-gray-600 dark:text-gray-300">
                  {user.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}

            <div className=" pl-1 text-blue-600 text-sm">
              <div className="space-y-2 ">
                <div
                  key={user._id}
                  onClick={() => {
                    // setOpen(false);
                    dispatch(
                      setRecipientUser({
                        recipientUser: user,
                      })
                    );
                  }}
                  className={`cursor-pointer p-3 rounded-md w-48 text-left ${
                    recipientUser && recipientUser._id === user._id ? "" : ""
                  }`}
                >
                  {user.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
