import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submit, moveStep } from "../api";
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

export const moveStep = createAsyncThunk(
  "submit/moveStep",
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
      //id값 받기
      state.id = action.payload.data.id;

      //fileType 정보 받기
      if (action.payload.data.farmFile.length === 0) {
        return;
      } else {
        action.payload.data.farmFile.forEach(file => {
          let name = file.fileType;
          state.fileType = { ...state.fileType, name };
        });
      }
    },
  },
  extraReducers: builder => {
    //getUserFileInfo (임시보관용/작업 완료 후 삭제예정)
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
      //payload 값 확인필요
      console.log(action.payload);
    });
    builder.addCase(submitFiles.rejected, (state, action) => {
      state.status = "rejected";
    });

    //moveStep
    builder.addCase(moveStep.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(moveStep.fulfilled, (state, action) => {
      state.status = "fulfilled";
      //페이지 이동
      router.replace("/done/step2");
    });
    builder.addCase(moveStep.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default submitSlice.reducer;