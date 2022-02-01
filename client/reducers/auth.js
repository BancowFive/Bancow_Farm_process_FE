import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../api";

export const getCertification = createAsyncThunk(
  "auth/getCertification",
  async ({ phoneNumber }, { rejectWithValue }) => {
    try {
      const result = await auth.getCertification(phoneNumber);
      return result;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const authorize = createAsyncThunk(
  "auth/authorize",
  async ({ phoneNumber, password }, { rejectWithValue }) => {
    try {
      const result = await auth.authorize(phoneNumber, password);
      return result;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  phoneNumber: "",
  password: "",
  certificationLoading: false,
  certificationDone: false,
  certificationError: null,
  autorizationLoading: false,
  autorizationDone: false,
  autorizationError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    inputPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
  extraReducers: {
    [getCertification.pending.type]: (state, action) => {
      state.certificationLoading = true;
      state.certificationDone = false;
      state.certificationError = null;
    },
    [getCertification.fulfilled.type]: (state, action) => {
      state.certificationLoading = false;
      state.certificationDone = true;
      state.password = action.payload;
    },
    [getCertification.rejected.type]: (state, action) => {
      state.certificationLoading = false;
      state.certificationError = action.payload;
    },
    [authorize.pending.type]: (state, action) => {
      state.autorizationLoading = true;
      state.autorizationDone = false;
      state.autorizationError = null;
    },
    [authorize.fulfilled.type]: (state, action) => {
      state.autorizationLoading = false;
      state.autorizationDone = true;
    },
    [authorize.rejected.type]: (state, action) => {
      state.autorizationLoading = false;
      state.autorizationError = action.payload;
    },
  },
});

export const { inputPhoneNumber } = authSlice.actions;
export default authSlice.reducer;
