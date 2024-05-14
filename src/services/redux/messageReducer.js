import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "user",
    initialState: {
        totalMessages: [],
        previousMessages: null,
    },
    reducers: {
        setTotalMessages: (state, action) => {
            state.totalMessages = action.payload.totalMessages;
        },
        clearMessages: (state, action) => {
            state.totalMessages = [];
            state.previousMessages = null;
        },
        setPreviousMessages: (state, action) => {
            state.previousMessages = action.payload.previousMessages;
        },
    },
});

export const { setTotalMessages, setPreviousMessages, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;
