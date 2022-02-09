import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, checkInProgress, fetchData } from "../api";
import { checkProgressStep, checkProcessStep } from "../utils/checkStep";

export const getCertification = createAsyncThunk(
  "auth/getCertification",
  async (data, { rejectWithValue }) => {
    try {
      const result = await auth.getCertification(data);
      return result.data.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const authorize = createAsyncThunk(
  "auth/authorize",
  async (data, { rejectWithValue }) => {
    try {
      const result = await auth.authorize(data);
      console.log(result);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const checkUserInProgress = createAsyncThunk(
  "auth/checkInProgress",
  async (phoneNumber, thunkApi) => {
    try {
      const result = await checkInProgress(phoneNumber);
      const { inProgress, id } = result.data.data;
      checkProgressStep(inProgress, id, thunkApi);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (data, thunkApi) => {
    try {
      const { step, id, inProgress } = data;
      const result = await fetchData(step, { id, inProgress });
      checkProcessStep(step, result.data.data, thunkApi);
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
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
  checkUserInProgressLoading: false,
  checkUserInProgressDone: false,
  checkUserInProgressError: null,
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
    [checkUserInProgress.pending.type]: (state, action) => {
      state.checkUserInProgressLoading = true;
      state.checkUserInProgressDone = false;
      state.checkUserInProgressError = null;
    },
    [checkUserInProgress.fulfilled.type]: (state, action) => {
      state.checkUserInProgressLoading = false;
      state.checkUserInProgressDone = true;
    },
    [checkUserInProgress.rejected.type]: (state, action) => {
      state.checkUserInProgressLoading = false;
      state.checkUserInProgressError = action.payload;
    },
  },
});

export const { inputPhoneNumber } = authSlice.actions;
export default authSlice.reducer;
