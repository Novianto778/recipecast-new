import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { app } from "../services/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = createAsyncThunk(
  "recipes/getRandom",
  async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    const { displayName, email, uid } = response.user;
    return { displayName, email, uid };
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    pending: true,
    error: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [signInWithGoogle.pending]: (state) => {
      state.pending = true;
    },
    [signInWithGoogle.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.pending = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
