import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import auth from "./auth";
import terms from "./terms";
import step1 from "./step1";
import submit from "./submit";
import schedule from "./schedule";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        auth,
        terms,
        step1,
        submit,
        schedule,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
