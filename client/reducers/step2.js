import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submit, moveStep } from "../api";
import { uploadToS3 } from "../utils";

export const submitFiles = createAsyncThunk(
  "step2/submitFiles",
  async (data, { rejectWithValue }) => {
    try {
      const s3 = await uploadToS3(data.file, data.targetId, data.userId);

      const fileInfo = {
        originalFileName: data.file.name,
        changedFileName: s3.Key,
        fileUrl: s3.Location,
        fileType: data.targetId,
      };

      const result = await submit.submitFiles(fileInfo, data.userId);
      return data.targetId; //result 불필요
    } catch (error) {
      rejectWithValue(error.response.data);
      console.log(error);
    }
  },
);

export const changeStep2 = createAsyncThunk(
  "step2/changeStep2",
  async (data, { rejectWithValue }) => {
    try {
      const result = await moveStep(data.PageNum, data.inProgress, data.userId);
      return result;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  id: "",
  fileType: {
    LIVESTOCK_REGISTRATION: null,
    STRUCTURAL_DIAGRAM: null,
    FEED_STATEMENT: null,
    SHIPPING_REPORT: null,
    BUSINESS_REGISTRATION: null,
    ID_CARD: null,
  },
  submitStatus: "",
  moveStatus: "",
};

const step2Slice = createSlice({
  name: "step2",
  initialState,
  reducers: {
    getUserFileInfo: (state, action) => {
      //id값 받기
      state.id = action.payload.id;

      //fileType 정보 받기
      if (action.payload.farmFile.length === 0) {
        return;
      } else {
        action.payload.farmFile.forEach(file => {
          let name = file.fileType;
          state.fileType = { ...state.fileType, [name]: name };
        });
      }
    },
    fetchStep2Data: (state, action) => {
      //id값 받기
      state.id = action.payload.id;

      //fileType 정보 받기
      state.fileType = {
        ...state.fileType,
        ...action.payload.farmFile.reduce((acc, cur) => {
          acc[cur.fileType] = cur.fileType;
          return acc;
        }, state.fileType),
      };
    },
  },
  extraReducers: builder => {
    //submitFiles
    builder.addCase(submitFiles.pending, (state, action) => {
      state.submitStatus = "pending";
    });
    builder.addCase(submitFiles.fulfilled, (state, action) => {
      state.submitStatus = "fulfilled";
      state.fileType = { ...state.fileType, [action.payload]: action.payload };
    });
    builder.addCase(submitFiles.rejected, (state, action) => {
      state.submitStatus = "rejected";
    });

    //changeStep2
    builder.addCase(changeStep2.pending, (state, action) => {
      state.moveStatus = "pending";
    });
    builder.addCase(changeStep2.fulfilled, (state, action) => {
      state.moveStatus = "fulfilled";
    });
    builder.addCase(changeStep2.rejected, (state, action) => {
      state.moveStatus = "rejected";
    });
  },
});

export const { fetchStep2Data } = step2Slice.actions;
export default step2Slice.reducer;
