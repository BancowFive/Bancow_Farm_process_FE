import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conditionOfUse: false,
  trustOfInformation: false,
  collectionOfInformation: false,
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
});

export const {
  checkConditionOfUse,
  checkTrustOfInformation,
  checkCollectionOfInformation,
  selectAll,
} = termsSlice.actions;
export default termsSlice.reducer;
