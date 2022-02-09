import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { terms } from "../api";

export const saveServiceTerms = createAsyncThunk(
  "terms/saveServiceTerms",
  async ({ serviceTerms, id, pageNum }, { rejectWithValue }) => {
    try {
      console.log(serviceTerms, id);
      await terms.saveServiceTerms(serviceTerms, id, pageNum);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  id: "",
  status: "",
  conditionOfUse: false,
  trustOfInformation: false,
  collectionOfInformation: false,
  saveServiceTermsLoading: false,
  saveServiceTermsDone: false,
  saveServiceTermsError: null,
};

const termsSlice = createSlice({
  name: "terms",
  initialState,
  reducers: {
    checkConditionOfUse: state => {
      state.conditionOfUse = !state.conditionOfUse;
    },
    checkTrustOfInformation: state => {
      state.trustOfInformation = !state.trustOfInformation;
    },
    checkCollectionOfInformation: state => {
      state.collectionOfInformation = !state.collectionOfInformation;
    },
    selectAll: state => {
      const all =
        state.conditionOfUse &&
        state.trustOfInformation &&
        state.collectionOfInformation;
      const zero =
        !state.conditionOfUse &&
        !state.trustOfInformation &&
        !state.collectionOfInformation;
      if (all || zero) {
        state.conditionOfUse = !state.conditionOfUse;
        state.trustOfInformation = !state.trustOfInformation;
        state.collectionOfInformation = !state.collectionOfInformation;
      } else {
        state.conditionOfUse = true;
        state.trustOfInformation = true;
        state.collectionOfInformation = true;
      }
    },
  },
  extraReducers: {
    [saveServiceTerms.pending.type]: (state, action) => {
      state.saveServiceTermsLoading = true;
      state.saveServiceTermsDone = false;
      state.saveServiceTermsError = null;
    },
    [saveServiceTerms.fulfilled.type]: (state, action) => {
      state.saveServiceTermsLoading = false;
      state.saveServiceTermsDone = true;
    },
    [saveServiceTerms.rejected.type]: (state, action) => {
      state.saveServiceTermsLoading = false;
      state.saveServiceTermsError = action.payload;
    },
  },
});

export const {
  checkConditionOfUse,
  checkTrustOfInformation,
  checkCollectionOfInformation,
  selectAll,
} = termsSlice.actions;
export default termsSlice.reducer;
