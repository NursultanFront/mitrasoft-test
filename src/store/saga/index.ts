import { takeEvery } from "redux-saga/effects";

import { GET_COMMENTS, GET_POSTS, GET_USER_BY_ID } from "./action";
import { fetchCommentary, fetchPosts, fetchUserById } from "./sagas";

function* watchFunc() {
  yield takeEvery(GET_POSTS, fetchPosts);
  yield takeEvery(GET_COMMENTS, fetchCommentary);
  yield takeEvery(GET_USER_BY_ID, fetchUserById);
}

export function* rootSaga() {
  yield watchFunc();
}
