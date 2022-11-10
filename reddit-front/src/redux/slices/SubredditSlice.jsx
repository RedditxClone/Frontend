/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// actions
export const getSubredditInfo = createAsyncThunk(
  'subreddit/about',
  async (subredditId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      let resultData = [];
      const request = await axios
        .get(`api/subreddit/${subredditId}/about`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const getSubredditFlairs = createAsyncThunk(
  'subreddit/flairs',
  async (subredditId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      let resultData = [];
      const request = await axios
        .get(`api/subreddit/${subredditId}/flairlist`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const getSubredditRules = createAsyncThunk(
  'subreddit/rules',
  async (subredditId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      let resultData = [];
      const request = await axios
        .get(`api/subreddit/${subredditId}/rules`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const getSubredditModerators = createAsyncThunk(
  'subreddit/moderators',
  async (subredditId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      let resultData = [];
      const request = await axios
        .get(`api/subreddit/${subredditId}/moderators`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

const SubredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    flairs: []
  },
  extraReducers: {
    // Getting the subreddit info
    [getSubredditInfo.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [getSubredditInfo.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [getSubredditInfo.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // Getting the subreddit flairs
    [getSubredditFlairs.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [getSubredditFlairs.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [getSubredditFlairs.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // Getting the subreddit rules
    [getSubredditRules.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [getSubredditRules.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [getSubredditRules.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // Getting the subreddit moderators
    [getSubredditModerators.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [getSubredditModerators.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [getSubredditModerators.rejected]: (state) => {
      // for testing
      console.log('rejected');
    }
  }
});

export default SubredditSlice.reducer;
