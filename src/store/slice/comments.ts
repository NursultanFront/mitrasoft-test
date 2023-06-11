import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../api/user-rest/type";

export interface CommentsState {
  comments: CommentObj[];
  error?: boolean;
}

interface CommentObj {
  postId: number;
  comments: Comment[];
  loading: boolean;
}

const initialState: CommentsState = {
  comments: [],
  error: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<CommentObj>) => {
      // state.comments = state.comments.concat(action.payload);
      const newComment: CommentObj = {
        postId: action.payload.postId,
        comments: action.payload.comments,
        loading: action.payload.loading,
      };
      state.comments.push(newComment);
    },
    setCommentsError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { setComments, setCommentsError } = commentsSlice.actions;
export default commentsSlice.reducer;
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Comment } from "../../api/user-rest/type";

// export interface CommentState extends Comment {
//   loading: boolean;
//   error: boolean;
// }

// export interface CommentsState {
//   comments: CommentState[];
// }

// const initialState: CommentsState = {
//   comments: [],
// };

// const commentsSlice = createSlice({
//   name: "comments",
//   initialState,
//   reducers: {
//     addComment: (state, action: PayloadAction<Comment>) => {
//       const newComment: CommentState = {
//         ...action.payload,
//         loading: false,
//         error: false,
//       };
//       state.comments.push(newComment);
//     },
//     updateCommentLoading: (
//       state,
//       action: PayloadAction<{ id: number; loading: boolean }>
//     ) => {
//       const comment = state.comments.find((c) => c.id === action.payload.id);
//       if (comment) {
//         comment.loading = action.payload.loading;
//       }
//     },
//     updateCommentError: (
//       state,
//       action: PayloadAction<{ id: number; error: boolean }>
//     ) => {
//       const comment = state.comments.find((c) => c.id === action.payload.id);
//       if (comment) {
//         comment.error = action.payload.error;
//       }
//     },
//   },
// });

// export const { addComment, updateCommentLoading, updateCommentError } =
//   commentsSlice.actions;
// export default commentsSlice.reducer;
