import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../api/user-rest/type";

interface UserState {
  user: User;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  user: {} as User,
  loading: false,
  error: false,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUserError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setUserError, setUserLoading } = user.actions;
export default user.reducer;
