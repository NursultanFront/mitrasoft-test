import { createSlice } from "@reduxjs/toolkit";

const comments = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    setComments: (state, action) => {
      console.log("slice");
      state = action.payload;
      return state;
    },
  },
});
export const { setComments } = comments.actions;
export default comments.reducer;
