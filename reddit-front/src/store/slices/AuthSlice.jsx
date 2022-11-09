import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const INITIAL_STATE = {
  user: {},
  isAuth: false,
  isLoaisLoadingding: false,
  error: null,
  msg: ''
};

export const signUp = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post('http://localhost:3033/api/auth/signup', {
        email: user.email,
        username: user.username,
        password: user.password
      });

      const { data } = res;
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await axios.post('http://localhost:3033/api/auth/login', {
      username: user.username,
      password: user.password
    });

    const { data } = res;

    return data;
  } catch (err) {
    return rejectWithValue(err.response.data.message);
  }
});

export const forgetUserName = createAsyncThunk(
  'user/forgetusername',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        'http://localhost:3033/api/auth/forget-username',
        {
          emai: user.email
        }
      );

      const { data } = res;

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  'user/forgetpassword',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        'http://localhost:3033/api/auth/forget-password',
        {
          emai: user.email,
          username: user.username
        }
      );

      const { data } = res;

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'user/resetpassword',
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        'http://localhost:3033/api/auth/change-forgetten-password',
        {
          password: user.password
        }
      );

      const { data } = res;

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const AuthSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    /** Sign up */
    [signUp.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
    },
    /** Login */
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = null;
    },
    /** Forget username */
    [forgetUserName.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [forgetUserName.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [forgetUserName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.msg = action.payload;
      state.error = null;
    },
    /** Forget Password */
    [forgetPassword.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [forgetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [forgetPassword.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.msg = action.payload;
      state.error = null;
    },
    /** Change forgetten password */
    [resetPassword.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [resetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.msg = action.payload;
      state.error = null;
    }
  }
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice.reducer;
