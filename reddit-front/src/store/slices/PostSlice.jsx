/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('posts/all', async (_, thunkAPI) => {
  const { rejectedWithValue } = thunkAPI;

  try {
    const response = await fetch('http://localhost:3005/posts');
    const data = await response.json();
    return data;
  } catch (exception) {
    return rejectedWithValue(exception.message);
  }
});

export const getPostRelatedCommunityInfo = createAsyncThunk(
  'community/get',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const response = await fetch(
        `http://localhost:3005/communities/${postId}`
      );
      const data = await response.json();
      return data;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const getPostRelatedUserInfo = createAsyncThunk(
  'user/get',
  async (userId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const response = await fetch(`http://localhost:3005/users/${userId}`);
      const data = await response.json();
      return data;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

const PostSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postRelatedCommunityData: [],
    postRelatedUserData: [],
    isPostsLoading: false,
    isCommunityLoading: false,
    requestIsRejected: false
  },
  extraReducers: {
    // Getting the posts data
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.requestIsRejected = true;
    },

    // Getting the post's related community data
    [getPostRelatedCommunityInfo.pending]: (state) => {
      state.isCommunityLoading = true;
    },
    [getPostRelatedCommunityInfo.fulfilled]: (state, action) => {
      state.isCommunityLoading = false;
      state.postRelatedCommunityData = action.payload;
    },
    [getPostRelatedCommunityInfo.rejected]: (state) => {
      state.requestIsRejected = true;
    },

    // Getting the post's related user data
    [getPostRelatedUserInfo.pending]: (state) => {
      state.isUserLoading = true;
    },
    [getPostRelatedUserInfo.fulfilled]: (state, action) => {
      state.isUserLoading = false;
      state.postRelatedUserData = action.payload;
    },
    [getPostRelatedUserInfo.rejected]: (state) => {
      state.requestIsRejected = true;
    }
  }
});

export default PostSlice.reducer;
