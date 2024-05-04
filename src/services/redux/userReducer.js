import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    reciepentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.currentUser;
    },
    setReciepentUser: (state, action) => {
      console.log(action, "setReciepentUser");
      state.reciepentUser = action.payload.reciepentUser;
    },
  },
});

export const { setCurrentUser, setReciepentUser } = userSlice.actions;

export default userSlice.reducer;
