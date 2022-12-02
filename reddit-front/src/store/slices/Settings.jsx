/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/requests/api';

const INITIAL_STATE = {
  settings: {},
  isLoading: false,
  error: null,
  fullfilled: false
};

export const getSettings = createAsyncThunk('settings', async (_, thunkAPI) => {
  const { rejectedWithValue } = thunkAPI;
  try {
    const response = await api.get('http://localhost:3005/settings');
    // const response = await axios.get(`${SERVER_NAME}`);
    return response.data;
  } catch (error) {
    return rejectedWithValue(error.response.message);
  }
});

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
    }
  }
});

export default SettingsSlice.reducer;
