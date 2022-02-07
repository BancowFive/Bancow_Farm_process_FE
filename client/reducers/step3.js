import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { schedule, moveStep } from "../api";

export const submitAvailableDate = createAsyncThunk(
  "step3/submitAvailableDate",
  async (data, { rejectWithValue }) => {
    try {
      console.log("실행됨");
      const result = await schedule.submitAvailableDate(
        data.fulldate,
        data.userId,
      );
      return result;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const changeStep = createAsyncThunk(
  "step3/changeStep",
  async (data, { rejectWithValue }) => {
    try {
      console.log("실행됨");
      const result = await moveStep(data.PageNum, data.inProgress, data.userId);
      return result;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  id: "",
  submitStatus: "",
  moveStatus: "",
};

const step3Slice = createSlice({
  name: "step3",
  initialState,
  reducers: {
    getUserScheduleInfo: (state, action) => {
      //id값 받기
      state.id = action.payload.data.id;
    },
  },
  extraReducers: builder => {
    //submitAvailableDate
    builder.addCase(submitAvailableDate.pending, (state, action) => {
      state.submitStatus = "pending";
    });
    builder.addCase(submitAvailableDate.fulfilled, (state, action) => {
      state.submitStatus = "fulfilled";
      alert("신청되었습니다.");
    });
    builder.addCase(submitAvailableDate.rejected, (state, action) => {
      state.submitStatus = "rejected";
      alert("신청 중간에 오류가 발생했습니다. 다시 신청해주세요.");
      return;
    });

    //moveStep
    builder.addCase(changeStep.pending, (state, action) => {
      state.moveStatus = "pending";
    });
    builder.addCase(changeStep.fulfilled, (state, action) => {
      state.moveStatus = "fulfilled";
    });
    builder.addCase(changeStep.rejected, (state, action) => {
      state.moveStatus = "rejected";
      return;
    });
  },
});

export default step3Slice.reducer;
