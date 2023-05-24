import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import post from "./slice/post";
import comments from "./slice/comments";
import user from "./slice/user";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    posts: post,
    comments: comments,
    user: user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
