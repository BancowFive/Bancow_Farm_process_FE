import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../api";
import { axiosAuth, axiosCertification } from "../api/auth";
import { fetchStep1Data, inputName } from "./step1";
import { fetchStep2Data } from "./step2";

export const getCertification = createAsyncThunk(
  "auth/getCertification",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axiosCertification("post", "/api/sendSMS", data);
      return result.data.data;
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
  async (id, thunkApi) => {
    try {
      const result = await auth.fetchData(id);
      thunkApi.dispatch(fetchStep1Data(result.data.data));
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  id: "",
  status: "",
  phoneNumber: "",
  password: "",
  certificationLoading: false,
  certificationDone: false,
  certificationError: null,
  authorizationLoading: false,
  authorizationDone: false,
  authorizationError: null,
  fetchUserDataLoading: false,
  fetchUserDataDone: false,
  fetchUserDataError: null,
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
      state.password = action.payload.password;
    },
    [getCertification.rejected.type]: (state, action) => {
      state.certificationLoading = false;
      state.certificationError = action.payload;
    },
    [authorize.pending.type]: (state, action) => {
      state.authorizationLoading = true;
      state.authorizationDone = false;
      state.authorizationError = null;
    },
    [authorize.fulfilled.type]: (state, action) => {
      state.authorizationLoading = false;
      state.authorizationDone = true;
    },
    [authorize.rejected.type]: (state, action) => {
      state.authorizationLoading = false;
      state.authorizationError = action.payload;
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
