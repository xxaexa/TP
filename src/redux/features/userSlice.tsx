import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../types";

export interface IUserState {
  user: AuthResponse | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: (state) => {
      state = initialState;
      return state;
    },
    setUser: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
