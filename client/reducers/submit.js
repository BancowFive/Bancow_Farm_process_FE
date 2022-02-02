import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submit, user } from "../api";
import { uploadToS3 } from "../modules/S3";
import { useRouter } from "next/router";

const router = useRouter();

// 'user' API 호출 진행 + state 저장하기 함수 (임시보관용/작업 완료 후 삭제예정)
// export const getUserFileInfo = createAsyncThunk(
//   "submit/getUserInfo",
//   async ({ result }, { rejectWithValue }) => {
//     try {
//       const result = await user();

//       const userFileInfo = {};

//       result.data.farmFile.forEach(file => {
//         let name = file.fileType;
//         userFileInfo = { ...userFileInfo, name };
//       });

//       return userFileInfo;
//     } catch (error) {
//       rejectWithValue(error.response.data);
//     }
//   },
// );

export const submitFiles = createAsyncThunk(
  "submit/submitFiles",
  async ({ file, targetId }, { rejectWithValue }) => {
    try {
      const s3 = await uploadToS3(file, targetId);

      const fileInfo = {
        originalFileName: file.name,
        changedFileName: s3.Key,
        fileUrl: s3.Location,
        fileType: targetId,
      };

      const result = await submit.submitFiles(fileInfo);

      return targetId;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  status: "",
  fileType: {
    LIVESTOCK_REGISTRATION: null,
    STRUCTURAL_DIAGRAM: null,
    FEED_STATEMENT: null,
    SHIPPING_REPORT: null,
    BUSINESS_REGISTRATION: null,
    ID_CARD: null,
  },
};

const submitSlice = createSlice({
  name: "submit",
  initialState,
  reducers: {
    getUserFileInfo: (state, action) => {
      const userFileInfo = async action => {
        const checkFile = {};
        action.payload.data.farmFile.forEach(file => {
          let name = file.fileType;
          checkFile = { ...checkFile, name };
        });
        return checkFile;
      };

      state.fileType = await userFileInfo(action);
    },
  },
  extraReducers: builder => {
    //getUserFileInfo(임시보관용/작업 완료 후 삭제예정)
    // builder.addCase(getUserFileInfo.pending, (state, action) => {
    //   state.status = "pending";
    // });
    // builder.addCase(getUserFileInfo.fulfilled, (state, action) => {
    //   state.status = "fulfilled";
    //   state.fileType = action.payload;
    // });
    // builder.addCase(getUserFileInfo.rejected, (state, action) => {
    //   state.status = "rejected";
    // });

    //submitFiles
    builder.addCase(submitFiles.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(submitFiles.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.fileType = { ...state.fileType, ...action.payload };
      router.replace("/done/step2");

      //payload 값 확인필요
      console.log(action.payload);
    });
    builder.addCase(submitFiles.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default submitSlice.reducer;
