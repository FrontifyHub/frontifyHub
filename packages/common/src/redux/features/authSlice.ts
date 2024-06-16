import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  value: User;
  loading?: boolean;
  error?: any;
}

interface User {
  username: string;
  password?: string;
}

const initialState: AuthState = {
  value: {
    username: "",
    password: "",
  },
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk("getUser", async () => {
  try {
    const response = await axios.get("");
    const result = { data: { username: "man_nhi" } };
    return result;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logIn: (state) => {
      state.value.username = "nhinbm";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        console.log(action);
        state.value = action.payload!.data;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logIn } = authSlice.actions;
export default authSlice.reducer;
