import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../api";
import { axiosAuth, axiosCertification } from "../api/auth";

export const getCertification = createAsyncThunk(
  "auth/getCertification",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosCertification("post", "/api/sendSMS", data);
      console.log(result);
      return result.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(err.response.data);
    }
  },
);

export const authorize = createAsyncThunk(
  "auth/authorize",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosAuth("post", "/login", data);
      return result.data;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (id, { rejectWithValue }) => {
    try {
      const result = await auth.fetchData(id);
      return result.data;
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
  fetchUserDataLoading: false,
  fetchUserDataError: false,
  fetchUserDataDone: null,
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
    [fetchUserData.pending.type]: (state, action) => {
      state.fetchUserDataLoading = true;
      state.fetchUserDataDone = false;
      state.fetchUserDataError = null;
    },
    [fetchUserData.fulfilled.type]: (state, action) => {
      state.fetchUserDataLoading = false;
      state.fetchUserDataDone = true;
    },
    [fetchUserData.rejected.type]: (state, action) => {
      state.fetchUserDataLoading = false;
      state.fetchUserDataError = action.payload;
    },
  },
});

export const { inputPhoneNumber } = authSlice.actions;
export default authSlice.reducer;
