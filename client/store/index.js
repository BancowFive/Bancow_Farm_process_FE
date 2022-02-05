import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers/index";
import rootSaga from "../sagas";

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware, logger],
    devTools: process.env.NODE_ENV !== "production",
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
