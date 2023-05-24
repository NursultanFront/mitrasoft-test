import { api } from "../../api";
import { put, takeEvery } from "redux-saga/effects";

import {
  GET_COMMENTS,
  GET_POSTS,
  GET_USER_BY_ID,
  GET_USER_POSTS,
} from "./action";
import { setPosts } from "../slice/post";
import { setComments } from "../slice/comments";
import { setUser } from "../slice/user";

function* fetchPosts() {
  try {
    const res = yield api.user.getPosts();
    yield put(setPosts(res));
  } catch (error) {
    console.log(error);
  }
}

function* fetchCommentary(action) {
  try {
    const res = yield api.user.getComments(action.id);
    yield put(setComments(res));
  } catch (error) {
    console.log(error);
  }
}

function* fetchUserById(action) {
  try {
    const res = yield api.user.getUser(action.id);
    yield put(setUser(res));
  } catch (error) {
    console.log(error);
  }
}

function* fetchPostById(action) {
  try {
    const res = yield api.user.getUserPosts(action.id);
    yield put(setPosts(res));
  } catch (error) {
    console.log(error);
  }
}

function* watchFunc() {
  yield takeEvery(GET_POSTS, fetchPosts);
  yield takeEvery(GET_COMMENTS, fetchCommentary);
  yield takeEvery(GET_USER_BY_ID, fetchUserById);
  yield takeEvery(GET_USER_POSTS, fetchPostById);
}

export function* rootSaga() {
  yield watchFunc();
}
