import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { customMiddleware1, customMiddleware2 } from "./middlewares";
import reducer from "../reducers/index";

const createStore = () => {
  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== "production",
  });

  return store;
};

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
