import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: '',
  token: '',
  msg: '',
  error: '',
  isLoggedIn: false,
  isLoading: false
};

export const signUpUser = createAsyncThunk('signup', async (body) => {
  const res = await fetch('', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  });
  const json = await res.json();
  return json;
});

const AuthSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled]: (state) => {
      state.isLoading = true;
    },
    [signUpUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUpUser.pending]: (state) => {
      state.isLoading = true;
    }
  }
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
