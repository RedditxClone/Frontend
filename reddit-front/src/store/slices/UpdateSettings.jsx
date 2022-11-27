/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const SERVER_NAME = process.env.REACT_APP_BASE_URL;

const INITIAL_STATE = {
  updatedSettings: {},
  isLoading: false,
  error: null,
  fullfilled: false
};

export const UpdateSettings = createAsyncThunk(
  'settings',
  async (updatedObject, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const response = await axios.patch(
        'http://localhost:3005/settings',
        updatedObject
      );
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.message);
    }
  }
);

const UpdateSettingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  extraReducers: {
    [UpdateSettings.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.fullfilled = false;
    },
    [UpdateSettings.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.fullfilled = false;
    },
    [UpdateSettings.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.fullfilled = true;
      state.updatedSettings = action.payload;
    }
  }
});

export default UpdateSettingsSlice.reducer;
