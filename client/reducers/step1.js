import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  personalInfo,
  farmInfo,
  farmCheck,
  docsCheck,
  uploadPicture,
} from "../api";

export const saveFarmOwnerInfo = createAsyncThunk(
  "step1/info/saveFarmOwnerInfo",
  async ({ data, id, pageNum }, { rejectWithValue }) => {
    try {
      await personalInfo.savePersonalInfo(data, id, pageNum);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveFarmInfo = createAsyncThunk(
  "step1/info/saveFarmInfo",
  async ({ data, id, pageNum }, { rejectWithValue }) => {
    try {
      await farmInfo.saveFarmInfo(data, id, pageNum);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveFarmCheck = createAsyncThunk(
  "step1/info/check/saveFarmCheck",
  async (data, { rejectWithValue }) => {
    try {
      console.log("데이터 : ", data);
      const result = await farmCheck.saveFarmCheck(
        data.data,
        data.pageNum,
        data.id,
      );
      // return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveDocsCheck = createAsyncThunk(
  "step1/info/check/saveDocsCheck",
  async (data, { rejectWithValue }) => {
    try {
      console.log("데이터 : ", data);
      const result = await docsCheck.saveDocsCheck(
        data.data,
        data.pageNum,
        data.id,
      );
      // return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveFarmPicture = createAsyncThunk(
  "step1/info/check/saveDocsCheck",
  async (data, { rejectWithValue }) => {
    try {
      console.log("데이터 : ", data);
      const result = await uploadPicture.saveFarmPicture(data.data, data.id);
      // return result;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
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
    // farm-check
    identification: "",
    ownFarm: "",
    breedingType: "",
    population: "",
    cctv: "",
    // docs-check
    livestockFarmingBusinessRegistration: "",
    facilitiesStructure: "",
    annualFodderCostSpecification: "",
    annualInspectionReport: "",
    businessLicense: "",
    //upload pictures
    farmImageUrl: [],
  },
  saveFarmInfoLoading: false,
  saveFarmInfoDone: false,
  saveFarmInfoError: null,
  saveFarmOwnerInfoLoading: false,
  saveFarmOwnerInfoDone: false,
  saveFarmOwnerInfoError: null,
  saveFarmCheckLoading: false,
  saveFarmCheckDone: false,
  saveFarmCheckError: null,
  saveDocsCheckLoading: false,
  saveDocsCheckDone: false,
  saveDocsCheckError: null,
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
    inputCheckFarm: (state, action) => {
      state.data.identification = action.payload.identification;
      state.data.ownFarm = action.payload.ownFarm;
      state.data.breedingType = action.payload.breedingType;
      state.data.population = action.payload.population;
      state.data.cctv = action.payload.cctv;
    },
    inputCheckDocs: (state, action) => {
      state.data.livestockFarmingBusinessRegistration =
        action.payload.livestockFarmingBusinessRegistration;
      state.data.facilitiesStructure = action.payload.facilitiesStructure;
      state.data.annualFodderCostSpecification =
        action.payload.annualFodderCostSpecification;
      state.data.annualInspectionReport = action.payload.annualInspectionReport;
      state.data.businessLicense = action.payload.businessLicense;
    },
    inputPicture: (state, action) => {
      state.data.farmImageUrl = [
        {
          originalImageName: action.payload.originalImageName,
          changedImageName: action.payload.changedImageName,
          imageUrl: action.payload.imageUrl,
          imageType: action.payload.imageType,
        },
        ...state.data.farmImageUrl,
      ];
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
    [saveFarmCheck.pending.type]: (state, action) => {
      state.saveFarmCheckLoading = true;
      state.saveFarmCheckDone = false;
      state.saveFarmCheckError = null;
    },
    [saveFarmCheck.fulfilled.type]: (state, action) => {
      state.saveFarmCheckLoading = false;
      state.saveFarmCheckDone = true;
    },
    [saveFarmCheck.rejected.type]: (state, action) => {
      state.saveFarmCheckLoading = false;
      state.saveFarmCheckError = action.payload;
    },
    [saveDocsCheck.pending.type]: (state, action) => {
      state.saveDocsCheckLoading = true;
      state.saveDocsCheckDone = false;
      state.saveDocsCheckError = null;
    },
    [saveDocsCheck.fulfilled.type]: (state, action) => {
      state.saveDocsCheckLoading = false;
      state.saveDocsCheckDone = true;
    },
    [saveDocsCheck.rejected.type]: (state, action) => {
      state.saveDocsCheckLoading = false;
      state.saveDocsCheckError = action.payload;
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
  inputPicture,
  inputCheckFarm,
  inputCheckDocs,
} = step1Slice.actions;
export default step1Slice.reducer;
