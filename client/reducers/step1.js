import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { personalInfo, farmInfo, moveStep } from "../api";

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

export const changeStep1 = createAsyncThunk(
  "step1/changeStep",
  async ({ PageNum, inProgress, userId }, { rejectWithValue }) => {
    try {
      const result = await moveStep(PageNum, inProgress, userId);
      return result;
    } catch (error) {
      rejectWithValue(error.response.data);
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
  savePersonalInfoLoading: false,
  savePersonalInfoDone: false,
  savePersonalInfoError: null,
  changeStep1Loading: false,
  changeStep1Done: false,
  changeStep1Error: null,
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
    [changeStep1.pending.type]: (state, action) => {
      state.changeStep1Loading = true;
      state.changeStep1Done = false;
      state.changeStep1Error = null;
    },
    [changeStep1.fulfilled.type]: (state, action) => {
      state.changeStep1Loading = false;
      state.changeStep1Done = true;
    },
    [changeStep1.rejected.type]: (state, action) => {
      state.changeStep1Loading = false;
      state.changeStep1Error = action.payload;
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
