import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { schedule, moveStep } from "../api";
import { router } from "next/router";

export const submitAvailableDate = createAsyncThunk(
  "step3/submitAvailableDate",
  async ({ date, PageNum, userId }, { rejectWithValue }) => {
    try {
      const result = await schedule.submitAvailableDate(date, PageNum, userId);
      return result;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const changeStep3 = createAsyncThunk(
  "step3/changeStep3",
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
    fetchStep3Data: (state, action) => {
      //id값 받기
      state.id = action.payload.id;
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

    //changeStep3
    builder.addCase(changeStep3.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(changeStep3.fulfilled, (state, action) => {
      state.status = "fulfilled";
      //페이지 이동
      router.replace("/done/step3");
    });
    builder.addCase(changeStep3.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default step3Slice.reducer;
