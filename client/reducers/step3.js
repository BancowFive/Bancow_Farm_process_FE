import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { schedule, moveStep } from "../api";

export const submitAvailableDate = createAsyncThunk(
  "step3/submitAvailableDate",
  async ({ date, PageNum, userId }, { rejectWithValue }) => {
    try {
      const result = await schedule.submitAvailableDate(date, PageNum, userId);
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const startStep3 = createAsyncThunk(
  "step3/startStep3",
  async ({ PageNum, inProgress, userId }, { rejectWithValue }) => {
    try {
      const result = await moveStep(PageNum, inProgress, userId);
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
  startStatus: "",
  submitStatus: "",
  changeStatus: "",
  noReservationDate: [],
};

const step3Slice = createSlice({
  name: "step3",
  initialState,
  reducers: {
    fetchStep3Data: (state, action) => {
      const days = [];
      console.log("fetchStpe3실행됨", action.payload);
      action.payload.noReservationDate.forEach(day => {
        days.push(day.date);
      });
      state.noReservationDate = days;
    },
  },
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

    //startStep3
    builder.addCase(startStep3.pending, (state, action) => {
      state.startStatus = "pending";
    });
    builder.addCase(startStep3.fulfilled, (state, action) => {
      state.startStatus = "fulfilled";
    });
    builder.addCase(startStep3.rejected, (state, action) => {
      state.startStatus = "rejected";
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

export const { fetchStep3Data } = step3Slice.actions;
export default step3Slice.reducer;
