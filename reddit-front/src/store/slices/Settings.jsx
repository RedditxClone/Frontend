/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/requests/api';

const INITIAL_STATE = {
  settings: {},
  updatedSettings: {},
  isLoading: false,
  error: null,
  fullfilled: false
};

export const getSettings = createAsyncThunk(
  'settings/GetSettings',
  async (_, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const response = await api.get('/api/user/me/prefs', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE0Mzg2NWUwYjU4M2Y0YTc5ZTcwYSIsImlhdCI6MTY3MDAwNTYzOCwiZXhwIjoxNjcwODY5NjM4fQ.uAnSxbNt6M0XeERa4ODtlX4LxXq3FoeaTK8ck59-DEg'
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.message);
    }
  }
);

export const UpdateSettings = createAsyncThunk(
  'settings/UpdateSettings',
  async (updatedObject, thunkAPI) => {
    const { rejectedWithValue } = thunkAPI;
    try {
      const response = await api.patch('/api/user/me/prefs', updatedObject, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGE0Mzg2NWUwYjU4M2Y0YTc5ZTcwYSIsImlhdCI6MTY3MDAwNTYzOCwiZXhwIjoxNjcwODY5NjM4fQ.uAnSxbNt6M0XeERa4ODtlX4LxXq3FoeaTK8ck59-DEg'
        }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectedWithValue(error.response.message);
    }
  }
);

const SettingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  extraReducers: {
    [getSettings.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.fullfilled = false;
    },
    [getSettings.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.fullfilled = false;
    },
    [getSettings.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.fullfilled = true;
      state.settings = action.payload;
    },
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

export default SettingsSlice.reducer;
