import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  telNumber: "",
};

const authSlice = createSlice({
  name: "terms",
  initialState,
  reducers: {
    inputTelNumber: (state, action) => {
      state.telNumber = action.payload;
    },
  },
});

export const { inputTelNumber } = authSlice.actions;
export default authSlice.reducer;
