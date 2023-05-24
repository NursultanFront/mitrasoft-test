import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../api/user-rest/type";

export interface CommentsState {
  comments: Comment[];
  error: boolean;
}

const initialState: CommentsState = {
  comments: [],
  error: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = state.comments.concat(action.payload);
    },
    setCommentsError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { setComments, setCommentsError } = commentsSlice.actions;
export default commentsSlice.reducer;
