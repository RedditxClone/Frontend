import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {},
  isAuth: false,
  isLoading: false,
  error: '',
  mess: ''
};

export const signUp = createAsyncThunk('user/signup', async (body) => {
  const res = await fetch('/auth/api/signup', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  });
  const json = await res.json();
  return json;
});

export const signIn = createAsyncThunk('user/signin', async (body) => {
  const res = await fetch('/auth/api/signin', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  });
  const json = await res.json();
  return json;
});

export const forgetUserName = createAsyncThunk(
  'user/forgetusername',
  async (body) => {
    const res = await fetch('/api/auth/forget-username', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    });
    const json = await res.json();
    return json;
  }
);

export const forgetPassword = createAsyncThunk(
  'user/forgetpassword',
  async (body) => {
    const res = await fetch('/api/auth/forget-password', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    });
    const json = await res.json();
    return json;
  }
);

export const changePassword = createAsyncThunk(
  'user/changepassword',
  async (body) => {
    const res = await fetch('/api/auth/change-password', {
      method: 'patch',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    });
    const json = await res.json();
    return json;
  }
);

const AuthSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    },
    [signUpUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload.error.message;
    },
    [signUpUser.pending]: (state) => {
      state.isLoading = true;
    }
  }
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
