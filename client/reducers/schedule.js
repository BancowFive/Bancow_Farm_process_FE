import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { schedule, moveStep } from "../api";
import { useRouter } from "next/router";

const router = useRouter();

export const submitAvailableDate = createAsyncThunk(
  "schedule/submitAvailableDate",
  async ({ date, userId }, { rejectWithValue }) => {
    try {
      const result = await schedule.submitAvailableDate(date, userId);
      return result;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  },
);

export const moveStep = createAsyncThunk(
  "schedule/moveStep",
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
};

const scheduleSlice = createSlice({
  name: "schedule",
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
    builder.addCase(moveStep.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(moveStep.fulfilled, (state, action) => {
      state.status = "fulfilled";
      //페이지 이동
      router.replace("/done/step3");
    });
    builder.addCase(moveStep.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default scheduleSlice.reducer;
