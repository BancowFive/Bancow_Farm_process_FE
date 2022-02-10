import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movePage, moveStep } from "../api";

export const changeStep = createAsyncThunk(
  "move/changeStep",
  async ({ pageNum, inProgress, id }, thunkApi) => {
    try {
      await moveStep(pageNum, inProgress, id);
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data);
    }
  },
);

export const changePage = createAsyncThunk(
  "move/changePage",
  async ({ pageNum, id }, thunkApi) => {
    try {
      await movePage(pageNum, id);
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  changeStepLoading: false,
  changeStepDone: false,
  changeStepError: null,
  changePageLoading: false,
  changePageDone: false,
  changePageError: null,
};

const step1Slice = createSlice({
  name: "move",
  initialState,
  reducers: {},
  extraReducers: {
    [changeStep.pending.type]: (state, action) => {
      state.changeStepLoading = true;
      state.changeStepDone = false;
      state.changeStepError = null;
    },
    [changeStep.fulfilled.type]: (state, action) => {
      state.changeStepLoading = false;
      state.changeStepDone = true;
    },
    [changeStep.rejected.type]: (state, action) => {
      state.changeStepLoading = false;
      state.changeStepError = action.payload;
    },
    [changePage.pending.type]: (state, action) => {
      state.changePageLoading = true;
      state.changePageDone = false;
      state.changePageError = null;
    },
    [changePage.fulfilled.type]: (state, action) => {
      state.changePageLoading = false;
      state.changePageDone = true;
    },
    [changePage.rejected.type]: (state, action) => {
      state.changePageLoading = false;
      state.changePageError = action.payload;
    },
  },
});

export default step1Slice.reducer;
