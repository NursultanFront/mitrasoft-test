import { api } from "../../../api";
import { put, takeEvery, delay } from "redux-saga/effects";

import { setPostDownload, setPostError, setPosts } from "../../slice/post";
import { setComments, setCommentsError } from "../../slice/comments";
import { setUser, setUserError, setUserLoading } from "../../slice/user";
import { Post, User, Comment } from "../../../api/user-rest/type";

export function* fetchPosts() {
  yield put(setPostDownload(true));
  try {
    const res: Post[] = yield api.user.getPosts();
    const post: Post[] = yield res.slice(0, 30);
    yield put(setPosts(post));
    yield delay(500);
    yield put(setPostDownload(false));
  } catch (error) {
    yield put(setPostError(true));
  } finally {
    yield put(setPostDownload(false));
  }
}

export function* fetchCommentary(action) {
  try {
    const res: Comment[] = yield api.user.getComments(action.id);
    yield put(setComments(res));
  } catch (error) {
    yield put(setCommentsError(true));
  }
}

export function* fetchUserById(action) {
  yield put(setPostDownload(true));
  yield put(setUserLoading(true));
  try {
    const user: User = yield api.user.getUser(action.id);
    const res: Post[] = yield api.user.getUserPosts(action.id);
    yield put(setUser(user));
    yield put(setPosts(res));
    yield delay(500);
  } catch (error) {
    yield put(setUserError(true));
    yield put(setPostError(true));
  } finally {
    yield put(setPostDownload(false));
    yield put(setUserLoading(false));
  }
}
