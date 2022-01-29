import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
};

const step1Slice = createSlice({
  name: "step1",
  initialState,
  reducers: {
    inputUsername: (state, action) => {
      state.username = action.payload;
    },
    inputEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { inputUsername, inputEmail } = step1Slice.actions;
export default step1Slice.reducer;
