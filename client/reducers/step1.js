import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { personalInfo, farmInfo } from "../api";

export const saveFarmOwnerInfo = createAsyncThunk(
  "step1/info/saveFarmOwnerInfo",
  async ({ data, pageNum }, { rejectWithValue }) => {
    try {
      const result = await personalInfo.savePersonalInfo(data, pageNum);
      return result;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const saveFarmInfo = createAsyncThunk(
  "step1/info/saveFarmInfo",
  async ({ data, pageNum }, { rejectWithValue }) => {
    try {
      const result = await farmInfo.saveFarmInfo(data, pageNum);
      return result;
    } catch (error) {
      return rejectWithValue(err.response.data);
    }
  },
);

const initialState = {
  id: "",
  status: "",
  data: {
    name: "",
    email: "",
    farmName: "",
    farmPostCode: "",
    farmAddress: "",
    fodder: "",
  },
  saveFarmInfoLoading: false,
  saveFarmInfoDone: false,
  saveFarmInfoError: null,
  saveFarmOwnerInfoLoading: false,
  saveFarmOwnerInfoDone: false,
  saveFarmOwnerInfoError: null,
};

const step1Slice = createSlice({
  name: "step1",
  initialState,
  reducers: {
    inputName: (state, action) => {
      state.data.name = action.payload;
    },
    inputEmail: (state, action) => {
      state.data.email = action.payload;
    },
    inputFarmName: (state, action) => {
      state.data.farmName = action.payload;
    },
    inputFarmAddress: (state, action) => {
      state.data.farmAddress = action.payload.address;
      state.data.farmPostCode = action.payload.postCode;
    },
    inputFarmFodder: (state, action) => {
      state.data.fodder = action.payload;
    },
    fetchStep1Data: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [saveFarmOwnerInfo.pending.type]: (state, action) => {
      state.saveFarmOwnerInfoLoading = true;
      state.saveFarmOwnerInfoDone = false;
      state.saveFarmOwnerInfoError = null;
    },
    [saveFarmOwnerInfo.fulfilled.type]: (state, action) => {
      state.saveFarmOwnerInfoLoading = false;
      state.saveFarmOwnerInfoDone = true;
    },
    [saveFarmOwnerInfo.rejected.type]: (state, action) => {
      state.saveFarmOwnerInfoLoading = false;
      state.saveFarmOwnerInfoError = action.payload;
    },
    [saveFarmInfo.pending.type]: (state, action) => {
      state.saveFarmInfoLoading = true;
      state.saveFarmInfoDone = false;
      state.saveFarmInfoError = null;
    },
    [saveFarmInfo.fulfilled.type]: (state, action) => {
      state.saveFarmInfoLoading = false;
      state.saveFarmInfoDone = true;
    },
    [saveFarmInfo.rejected.type]: (state, action) => {
      state.saveFarmInfoLoading = false;
      state.saveFarmInfoError = action.payload;
    },
  },
});

export const {
  inputName,
  inputEmail,
  inputFarmName,
  inputFarmAddress,
  inputFarmFodder,
  fetchStep1Data,
} = step1Slice.actions;
export default step1Slice.reducer;
