import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { personalInfo, farmInfo } from "../api";

export const savePersonalInfo = createAsyncThunk(
  "step1/info/savePersonalInfo",
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
  savePersonalInfoLoading: false,
  savePersonalInfoDone: false,
  savePersonalInfoError: null,
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
  },
  extraReducers: {
    [savePersonalInfo.pending.type]: (state, action) => {
      state.savePersonalInfoLoading = true;
      state.savePersonalInfoDone = false;
      state.savePersonalInfoError = null;
    },
    [savePersonalInfo.fulfilled.type]: (state, action) => {
      state.savePersonalInfoLoading = false;
      state.savePersonalInfoDone = true;
    },
    [savePersonalInfo.rejected.type]: (state, action) => {
      state.savePersonalInfoLoading = false;
      state.savePersonalInfoError = action.payload;
    },
    [savePersonalInfo.pending.type]: (state, action) => {
      state.savePersonalInfoLoading = true;
      state.savePersonalInfoDone = false;
      state.savePersonalInfoError = null;
    },
    [savePersonalInfo.fulfilled.type]: (state, action) => {
      state.savePersonalInfoLoading = false;
      state.savePersonalInfoDone = true;
    },
    [savePersonalInfo.rejected.type]: (state, action) => {
      state.savePersonalInfoLoading = false;
      state.savePersonalInfoError = action.payload;
    },
  },
});

export const { inputName, inputEmail, inputFarmName, inputFarmAddress } =
  step1Slice.actions;
export default step1Slice.reducer;
