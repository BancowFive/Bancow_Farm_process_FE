import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import auth from "./auth";
import terms from "./terms";
import step1 from "./step1";
import step2 from "./step2";
import step3 from "./step3";

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
        step2,
        step3,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
