import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import post from "./slice/post";
import comments from "./slice/comments";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts: post,
    comments: comments,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
