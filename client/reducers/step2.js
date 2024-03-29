import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submit, moveStep } from "../api";
import { uploadToS3 } from "../utils/S3";

export const submitFiles = createAsyncThunk(
  "step2/submitFiles",
  async ({ file, targetId, userId }, { rejectWithValue }) => {
    try {
      const s3 = await uploadToS3(file, targetId, userId);

      const fileInfo = {
        originalFileName: file.name,
        changedFileName: s3.Key,
        fileUrl: s3.Location,
        fileType: targetId,
      };

      const result = await submit.submitFiles(fileInfo, userId);

      return targetId; //result 불필요
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const startStep2 = createAsyncThunk(
  "step2/startStep2",
  async ({ PageNum, inProgress, userId }, { rejectWithValue }) => {
    try {
      const result = await moveStep(PageNum, inProgress, userId);
      return result.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const changeStep2 = createAsyncThunk(
  "step2/changeStep2",
  async ({ PageNum, inProgress, userId }, { rejectWithValue }) => {
    try {
      const result = await moveStep(PageNum, inProgress, userId);
      return result.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  startStatus: "",
  submitStatus: "",
  changeStatus: "",
  fileType: {
    LIVESTOCK_REGISTRATION: null,
    STRUCTURAL_DIAGRAM: null,
    FEED_STATEMENT: null,
    SHIPPING_REPORT: null,
    BUSINESS_REGISTRATION: null,
    ID_CARD: null,
  },
};

const step2Slice = createSlice({
  name: "step2",
  initialState,
  reducers: {
    fetchStep2Data: (state, action) => {
      if (action.payload.farmFile.length === 0) {
        return;
      } else {
        action.payload.farmFile.forEach(file => {
          let name = file.fileType;
          state.fileType = { ...state.fileType, [name]: name };
        });
      }
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

    //startStep2
    builder.addCase(startStep2.pending, (state, action) => {
      state.startStatus = "pending";
    });
    builder.addCase(startStep2.fulfilled, (state, action) => {
      state.startStatus = "fulfilled";
    });
    builder.addCase(startStep2.rejected, (state, action) => {
      state.startStatus = "rejected";
    });

    //changeStep2
    builder.addCase(changeStep2.pending, (state, action) => {
      state.changeStatus = "pending";
    });
    builder.addCase(changeStep2.fulfilled, (state, action) => {
      state.changeStatus = "fulfilled";
    });
    builder.addCase(changeStep2.rejected, (state, action) => {
      state.changeStatus = "rejected";
    });
  },
});

export const { fetchStep2Data } = step2Slice.actions;
export default step2Slice.reducer;
