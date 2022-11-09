/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// actions
export const getPostInsights = createAsyncThunk(
  'posts/insights_count',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .get(`api/post/${postId}/insights_count`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const removePost = createAsyncThunk(
  'posts/remove',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .delete(`api/post/${postId}`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const hidePost = createAsyncThunk(
  'post/hide',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .patch(`api/post/${postId}/hide`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const unHidePost = createAsyncThunk(
  'post/unhide',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .patch(`api/post/${postId}/unhide`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const savePost = createAsyncThunk(
  'post/save',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/save`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const unSavePost = createAsyncThunk(
  'post/unsave',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/unsave`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const lockPost = createAsyncThunk(
  'post/lock',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .patch(`api/post/${postId}/lock`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const unlockPost = createAsyncThunk(
  'post/unlock',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .patch(`api/post/${postId}/unlock`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const unMarkPostAsNSFW = createAsyncThunk(
  'post/unmark_nsfw',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/unmark_nsfw`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const markPostAsNSFW = createAsyncThunk(
  'post/unmark_nsfw',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/unmark_nsfw`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const spamPost = createAsyncThunk(
  'post/spam',
  async (info, thunkAPI) => {
    const { postId, message } = info;
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/spam`, message)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const sendPostReplies = createAsyncThunk(
  'post/send_replies',
  async (info, thunkAPI) => {
    const { postId, state } = info;
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/send_replies`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const votePost = createAsyncThunk(
  'post/vote',
  async (info, thunkAPI) => {
    const { postId, cotesCount } = info;
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/vote`, body)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const setSuggestedSort = createAsyncThunk(
  'post/set_suggested_sort',
  async (info, thunkAPI) => {
    const { postId, sortType } = info;
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .post(`api/post/${postId}/set_suggested_sort`, body)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const spoilPost = createAsyncThunk(
  'post/spoiler',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .patch(`api/post/${postId}/spoiler`)
        .then(async (result) => {
          resultData = await result.data;
        });
      return resultData;
    } catch (exception) {
      return rejectedWithValue(exception.message);
    }
  }
);

export const unSpoilPost = createAsyncThunk(
  'post/unspoiler',
  async (postId, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;

    try {
      const request = await axios
        .patch(`api/post/${postId}/unspoiler`)
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
  initialState: {},
  extraReducers: {
    // removing the post
    [removePost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [removePost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [removePost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // getting the post insights
    [getPostInsights.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [getPostInsights.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [getPostInsights.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // hiding the post
    [hidePost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [hidePost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [hidePost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // unhiding the post
    [unHidePost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [unHidePost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [unHidePost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // save the post
    [savePost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [savePost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [savePost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // unsave the post
    [unSavePost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [unSavePost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [unSavePost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // lock the post
    [lockPost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [lockPost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [lockPost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // unlock the post
    [unlockPost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [unlockPost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [unlockPost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // unmark the post as NSFW
    [unMarkPostAsNSFW.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [unMarkPostAsNSFW.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [unMarkPostAsNSFW.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // mark the post as NSFW
    [markPostAsNSFW.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [markPostAsNSFW.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [markPostAsNSFW.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // spam the post
    [spamPost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [spamPost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [spamPost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // send replies
    [sendPostReplies.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [sendPostReplies.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [sendPostReplies.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // voting the post
    [votePost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [votePost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [votePost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // setSort of the post
    [setSuggestedSort.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [setSuggestedSort.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [setSuggestedSort.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // spoiling the post
    [spoilPost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [spoilPost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [spoilPost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    },

    // unspoiling the post
    [unSpoilPost.pending]: (state) => {
      // for testing
      console.log('pending');
    },
    [unSpoilPost.fulfilled]: (state, action) => {
      // for testing
      console.log('fulfilled');
    },
    [unSpoilPost.rejected]: (state) => {
      // for testing
      console.log('rejected');
    }
  }
});

export default PostSlice.reducer;
