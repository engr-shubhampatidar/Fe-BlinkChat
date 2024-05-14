import { createSlice } from "@reduxjs/toolkit";

export const chatHubSlice = createSlice({
    name: "chatHub",
    initialState: {
        isOpen: false,
        userList: [],
    },
    reducers: {
        openChatHub: (state, action) => {
            state.isOpen = true;
        },
        closeChatHub: (state, action) => {
            state.isOpen = false;
        },
        toggleChatHub: (state, action) => {
            state.isOpen = !state.isOpen;
        },
        setUserList: (state, action) => {
            state.userList = action.payload.userList;
        },
    },
});

export const { openChatHub, closeChatHub, toggleChatHub, setUserList } = chatHubSlice.actions;

export default chatHubSlice.reducer;
