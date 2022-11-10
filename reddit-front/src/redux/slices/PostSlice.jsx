/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// fetching actions
export const getPosts = createAsyncThunk('posts/all', async (_, thunkAPI) => {
  const { rejectedWithValue } = thunkAPI;

  try {
    let resultData = [];
    const request = await axios
      .get('http://localhost:3005/posts')
      .then(async (result) => {
        resultData = await result.data;
      });
    return resultData;
  } catch (exception) {
    return rejectedWithValue(exception.message);
  }
});

export const getPostFlairs = createAsyncThunk(
  'post/flairs',
  async (info, thunkAPI) => {
    const { subredditId, postId } = info;
    const { rejectedWithValue } = thunkAPI;

    try {
      let resultData = [];
      const request = await axios
        .get(`api/subreddit/${subredditId}/post/${postId}/flair`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const getPostRelatedCommunityInfo = createAsyncThunk(
  'community/get',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      let resultData = [];
      const request = await axios
        .get(`http://localhost:3005/communities/${postId}`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
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
      let resultData = [];
      const request = await axios
        .get(`http://localhost:3005/users/${userId}`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
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
      state.isPostsLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isPostsLoading = false;
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
