import { api } from "../../api";
import { put, takeEvery, delay } from "redux-saga/effects";

import {
  GET_COMMENTS,
  GET_POSTS,
  GET_USER_BY_ID,
  GET_USER_POSTS,
} from "./action";
import { setPostDownload, setPostError, setPosts } from "../slice/post";
import { setComments, setCommentsError } from "../slice/comments";
import { setUser } from "../slice/user";
import { Post, User, Comment } from "../../api/user-rest/type";

function* fetchPosts() {
  yield put(setPostDownload(true));
  try {
    const res: Post[] = yield api.user.getPosts();
    const post: Post[] = yield res.slice(0, 30);
    yield put(setPosts(post));
    yield delay(500);
    yield put(setPostDownload(false));
  } catch (error) {
    yield put(setPostError(error));
  } finally {
    yield put(setPostDownload(false));
  }
}

function* fetchCommentary(action) {
  try {
    const res: Comment[] = yield api.user.getComments(action.id);
    yield put(setComments(res));
  } catch (error) {
    yield put(setCommentsError(error.message));
  }
}

function* fetchUserById(action) {
  try {
    const user: User = yield api.user.getUser(action.id);
    yield put(setUser(user));
    const res: Post[] = yield api.user.getUserPosts(action.id);
    yield put(setPosts(res));
  } catch (error) {
    console.log(error);
  }
}

function* watchFunc() {
  yield takeEvery(GET_POSTS, fetchPosts);
  yield takeEvery(GET_COMMENTS, fetchCommentary);
  yield takeEvery(GET_USER_BY_ID, fetchUserById);
}

export function* rootSaga() {
  yield watchFunc();
}
