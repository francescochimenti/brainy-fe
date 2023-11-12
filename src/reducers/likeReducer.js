import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to get all likes
export const postLikes = createAsyncThunk(
  "likes/postLikes",
  async ({ postId, userId }) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/${postId}/like/${userId}`,
      );
    } catch (err) {
      console.log(err);
    }
  },
);

// Thunk to delete a like
export const deleteLikes = createAsyncThunk(
  "likes/deleteLikes",
  async ({ postId, userId }) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/posts/${postId}/delete-like/${userId}`,
      );
    } catch (err) {
      console.log(err);
    }
  },
);

const likeSlice = createSlice({
  name: "likes",
  initialState: {
    likes: [],
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(postLikes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postLikes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.likes = action.payload;
        state.error = null;
      })
      .addCase(postLikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteLikes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteLikes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.likes = action.payload;
        state.error = null;
      })
      .addCase(deleteLikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default likeSlice.reducer;
