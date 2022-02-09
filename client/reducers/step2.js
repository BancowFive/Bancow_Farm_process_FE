import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submit, moveStep } from "../api";
import { uploadToS3 } from "../utils/S3";
import { router } from "next/router";

export const submitFiles = createAsyncThunk(
  "step2/submitFiles",
  async ({ file, targetId, userId }, { rejectWithValue }) => {
    try {
      const s3 = await uploadToS3(file, targetId);

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

export const changeStep = createAsyncThunk(
  "step2/changeStep",
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
      state.status = "pending";
    });
    builder.addCase(submitFiles.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.fileType = { ...state.fileType, [action.payload]: action.payload };
      //payload 값 확인필요
      console.log(action.payload);
    });
    builder.addCase(submitFiles.rejected, (state, action) => {
      state.status = "rejected";
    });

    //moveStep
    builder.addCase(changeStep.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changeStep.fulfilled, (state, action) => {
      state.status = "fulfilled";
      //페이지 이동
      router.replace("/done/step2");
    });
    builder.addCase(changeStep.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export const { fetchStep2Data } = step2Slice.actions;
export default step2Slice.reducer;
