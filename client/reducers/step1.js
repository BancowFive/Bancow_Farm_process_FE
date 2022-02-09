import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { personalInfo, farmInfo, farmCheck } from "../api/info";

export const saveFarmOwnerInfo = createAsyncThunk(
  "step1/info/saveFarmOwnerInfo",
  async ({ data, id, pageNum }, { rejectWithValue }) => {
    try {
      const result = await personalInfo.savePersonalInfo(data, id, pageNum);
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const saveFarmInfo = createAsyncThunk(
  "step1/info/saveFarmInfo",
  async ({ data, id, pageNum }, { rejectWithValue }) => {
    try {
      const result = await farmInfo.saveFarmInfo(data, id, pageNum);
      return result;
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
      return rejectWithValue(error.data.error);
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
    farmImage: [
      {
        originalImageName: "",
        changedImageName: "",
        imageUrl: "",
        imageType: "",
      },
      {
        originalImageName: "",
        changedImageName: "",
        imageUrl: "",
        imageType: "",
      },
      {
        originalImageName: "",
        changedImageName: "",
        imageUrl: "",
        imageType: "",
      },
      {
        originalImageName: "",
        changedImageName: "",
        imageUrl: "",
        imageType: "",
      },
      {
        originalImageName: "",
        changedImageName: "",
        imageUrl: "",
        imageType: "",
      },
      {
        originalImageName: "",
        changedImageName: "",
        imageUrl: "",
        imageType: "",
      },
      {
        originalImageName: "",
        changedImageName: "",
        imageUrl: "",
        imageType: "",
      },
    ],
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
      const imageIndex = action.payload.imageIndex;
      state.data.farmImage[imageIndex].originalImageName =
        action.payload.originalImageName;
      state.data.farmImage[imageIndex].changedImageName =
        action.payload.changedImageName;
      state.data.farmImage[imageIndex].imageUrl = action.payload.imageUrl;
      state.data.farmImage[imageIndex].imageType = action.payload.imageType;
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
