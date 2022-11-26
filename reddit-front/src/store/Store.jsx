import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';

export const Store = configureStore({
  reducer: {
    auth: AuthSlice
  }
});

export default Store;
