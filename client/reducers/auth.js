import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../api";

export const getCertification = createAsyncThunk(
  "auth/getCertification",
  async ({ telNumber }, { rejectWithValue }) => {
    try {
      const result = await auth.getCertification(telNumber);
      return result;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const authorize = createAsyncThunk(
  "auth/authorize",
  async ({ telNumber, password }, { rejectWithValue }) => {
    try {
      const result = await auth.authorize(telNumber, password);
      return result;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  telNumber: "",
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
    inputTelNumber: (state, action) => {
      state.telNumber = action.payload;
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
      autorizationLoading = true;
      autorizationDone = false;
      autorizationError = null;
    },
    [authorize.fulfilled.type]: (state, action) => {
      autorizationLoading = false;
      autorizationDone = true;
    },
    [authorize.rejected.type]: (state, action) => {
      autorizationLoading = false;
      autorizationError = action.payload;
    },
  },
});

export const { inputTelNumber } = authSlice.actions;
export default authSlice.reducer;
