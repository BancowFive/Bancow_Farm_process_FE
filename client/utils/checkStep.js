import { changePage } from "../reducers/move";
import { fetchUserData } from "../reducers/auth";
import { fetchStep1Data } from "../reducers/step1";
import { fetchStep2Data } from "../reducers/step2";
import { fetchStep3Data } from "../reducers/step3";

export const checkProgressStep = (inProgress, id, thunkApi) => {
  if (inProgress === "STEP1_IN_PROGRESS") {
    thunkApi.dispatch(fetchUserData({ step: 1, id }));
  } else if (
    inProgress === "STEP2_IN_PROGRESS" ||
    inProgress === "STEP2_START"
  ) {
    thunkApi.dispatch(fetchUserData({ step: 2, id }));
  } else if (
    inProgress === "STEP3_IN_PROGRESS" ||
    inProgress === "STEP3_START"
  ) {
    thunkApi.dispatch(fetchUserData({ step: 3, id }));
  }
};

export const checkProcessStep = (step, data, thunkApi) => {
  if (step === 1) {
    thunkApi.dispatch(fetchStep1Data(data));
  } else if (step === 2) {
    thunkApi.dispatch(fetchStep2Data(data));
  } else if (step === 3) {
    thunkApi.dispatch(fetchStep3Data(data));
  }
};
