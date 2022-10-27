import { configureStore } from '@reduxjs/toolkit';
import PostSlice from './slices/PostSlice';

export const Store = configureStore({
  reducer: {
    post: PostSlice
  }
});

export default Store;
