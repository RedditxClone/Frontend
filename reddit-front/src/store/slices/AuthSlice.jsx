import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {},
  isAuth: false,
  isLoading: false,
  error: null,
  mess: ''
};

export const SignUp = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('/auth/api/signup', {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const LogIn = createAsyncThunk('user/login', async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await fetch('/auth/api/login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return rejectWithValue(err.message);
  }
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
    [SignUp.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [SignUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [SignUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
    },
    [LogIn.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [LogIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [LogIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
    }
  }
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
