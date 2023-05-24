import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../api/user-rest/type";

const user = createSlice({
  name: "posts",
  initialState: {} as User,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setUser } = user.actions;
export default user.reducer;
