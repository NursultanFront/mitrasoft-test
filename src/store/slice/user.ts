import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../api/user-rest/type";

interface UserState {
  user: User;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  user: {} as User,
  loading: false,
  error: "",
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
      state.error = "";
    },
    setUserError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, setUserError, setUserLoading } = user.actions;
export default user.reducer;
