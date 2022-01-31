import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  farmName: "",
  farmPostCode: "",
  farmAddress: "",
  fodder: "",
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
    inputFarmName: (state, action) => {
      state.farmName = action.payload;
    },
    inputFarmAddress: (state, action) => {
      state.farmAddress = action.payload.address;
      state.farmPostCode = action.payload.postCode;
    },
  },
});

export const { inputUsername, inputEmail, inputFarmName, inputFarmAddress } =
  step1Slice.actions;
export default step1Slice.reducer;
