import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to login
export const loginReducer = createAsyncThunk(
  "login/login",
  async (loginData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/login`,
        loginData,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginData: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginReducer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginReducer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loginData = action.payload;
        state.error = null;
      })
      .addCase(loginReducer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
