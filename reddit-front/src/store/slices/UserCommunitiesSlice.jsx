import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/requests/api';
import getCookie from '../../services/requests/getCookie';

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  fulfilled: false,
  myCommunities: [],
  moderatedCommunities: []
};

export const getMyCommunities = createAsyncThunk(
  'communities/getMyCommunities',
  async (_, thunkAPI) => {
    const token = getCookie('Authorization');
    console.log('in get communities', token);
    const { rejectWithValue } = thunkAPI;

    try {
      const response = api.get('/api/subreddit/join/me', {
        headers: { Authorization: token }
      });
      const { data } = response;
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getModeratedCommunities = createAsyncThunk(
  'communities/getModeratedCommunities',
  async (_, thunkAPI) => {
    const token = getCookie('Authorization');

    const { rejectWithValue } = thunkAPI;

    try {
      const response = api.get('/api/subreddit/moderation/me', {
        headers: { Authorization: token }
      });
      const { data } = response;

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const UserCommunitiesSlice = createSlice({
  name: 'communities',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    /* get joined communities */
    [getMyCommunities.fulfilled]: (state, action) => {
      state.fulfilled = true;
      state.isLoading = false;
      state.error = null;
      state.myCommunities = action.payload;
    },
    [getMyCommunities.rejected]: (state, action) => {
      state.fulfilled = false;
      state.isLoading = false;
      state.error = true;
      state.error = action.payload;
    },
    [getMyCommunities.pending]: (state) => {
      state.fulfilled = false;
      state.isLoading = true;
      state.error = null;
    },

    /* get moderated communities */
    [getModeratedCommunities.fulfilled]: (state, action) => {
      state.fulfilled = true;
      state.isLoading = false;
      state.error = null;
      state.moderatedCommunities = action.payload;
    },
    [getModeratedCommunities.rejected]: (state, action) => {
      state.fulfilled = false;
      state.isLoading = false;
      state.error = action.payload;
    },
    [getModeratedCommunities.pending]: (state) => {
      state.fulfilled = false;
      state.isLoading = true;
      state.error = null;
    }
  }
});

export const UserCommunitiesActions = UserCommunitiesSlice.actions;

export default UserCommunitiesSlice.reducer;
