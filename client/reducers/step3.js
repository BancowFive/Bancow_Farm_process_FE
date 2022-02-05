import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { schedule, moveStep } from "../api";
import { router } from "next/router";

export const submitAvailableDate = createAsyncThunk(
  "step3/submitAvailableDate",
  async ({ date, userId }, { rejectWithValue }) => {
    try {
      const result = await schedule.submitAvailableDate(date, userId);
      return result;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const changeStep = createAsyncThunk(
  "step3/changeStep",
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
      state.status = "pending";
    });
    builder.addCase(submitAvailableDate.fulfilled, (state, action) => {
      state.status = "fulfilled";
    });
    builder.addCase(submitAvailableDate.rejected, (state, action) => {
      state.status = "rejected";
    });

    //moveStep
    builder.addCase(changeStep.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changeStep.fulfilled, (state, action) => {
      state.status = "fulfilled";
      //페이지 이동
      router.replace("/done/step3");
    });
    builder.addCase(changeStep.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default step3Slice.reducer;
