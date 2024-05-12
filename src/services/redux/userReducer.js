import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    recipientUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.currentUser;
    },
    setRecipientUser: (state, action) => {
      console.log(action, "setRecipientUser");
      state.recipientUser = action.payload.recipientUser;
    },
  },
});

export const { setCurrentUser, setRecipientUser } = userSlice.actions;

export default userSlice.reducer;
