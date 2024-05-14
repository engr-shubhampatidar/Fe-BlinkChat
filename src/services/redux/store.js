import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import messageReducer from "./messageReducer";
import chatHubReducer from "./chatHubReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    chatHub: chatHubReducer
  },
});
