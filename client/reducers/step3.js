import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { schedule, moveStep } from "../api";

export const submitAvailableDate = createAsyncThunk(
  "step3/submitAvailableDate",
  async ({ date, PageNum, userId }, { rejectWithValue }) => {
    try {
      const result = await schedule.submitAvailableDate(date, PageNum, userId);
      return result.data;
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
      return result.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  submitStatus: "",
  changeStatus: "",
};

const step3Slice = createSlice({
  name: "step3",
  initialState,
  reducers: {},
  extraReducers: builder => {
    //submitAvailableDate
    builder.addCase(submitAvailableDate.pending, (state, action) => {
      state.submitStatus = "pending";
    });
    builder.addCase(submitAvailableDate.fulfilled, (state, action) => {
      state.submitStatus = "fulfilled";
    });
    builder.addCase(submitAvailableDate.rejected, (state, action) => {
      state.submitStatus = "rejected";
    });

    //changeStep3
    builder.addCase(changeStep3.pending, (state, action) => {
      state.changeStatus = "pending";
    });
    builder.addCase(changeStep3.fulfilled, (state, action) => {
      state.changeStatus = "fulfilled";
    });
    builder.addCase(changeStep3.rejected, (state, action) => {
      state.changeStatus = "rejected";
    });
  },
});

export default step3Slice.reducer;
