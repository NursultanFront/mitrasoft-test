import { createSlice } from "@reduxjs/toolkit";

const posts = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setPosts } = posts.actions;
export default posts.reducer;
