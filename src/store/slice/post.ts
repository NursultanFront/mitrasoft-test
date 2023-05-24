import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../api/user-rest/type";

export interface PostsState {
  post: Post[];
  loading: boolean;
  error: boolean;
}

const initialState: PostsState = {
  post: [],
  loading: false,
  error: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.post = action.payload;
    },
    setPostDownload: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = false;
    },
    setPostError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setPosts, setPostDownload, setPostError } = postsSlice.actions;
export default postsSlice.reducer;
