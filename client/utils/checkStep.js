import { movePage } from "../api";
import { fetchUserData } from "../reducers/auth";
import { fetchStep1Data } from "../reducers/step1";
import { fetchStep2Data } from "../reducers/step2";

export const checkProgressStep = (inProgress, id, thunkApi) => {
  if (inProgress === "STEP1_IN_PROGRESS") {
    thunkApi.dispatch(fetchUserData({ step: 1, id, inProgress }));
  } else if (inProgress === "STEP1_COMPLETED") {
    thunkApi.dispatch(movePage(8, id));
  } else if (inProgress === "STEP2_IN_PROGRESS") {
    thunkApi.dispatch(fetchUserData({ step: 2, id, inProgress }));
  } else if (inProgress === "STEP2_COMPLETED") {
    thunkApi.dispatch(movePage(11, id));
  } else if (inProgress === "INVESTIGATION_REQUEST") {
    thunkApi.dispatch(movePage(12, id));
  } else if (inProgress === "INVESTIGATION_CONFIRM") {
    thunkApi.dispatch(movePage(13, id));
  } else if (inProgress === "PROCESS_DONE") {
    thunkApi.dispatch(movePage(14, id));
  }
};

export const checkProcessStep = (step, data, thunkApi) => {
  if (step === 1) {
    thunkApi.dispatch(fetchStep1Data(data));
  } else if (step === 2) {
    thunkApi.dispatch(fetchStep2Data(data));
  }
};
