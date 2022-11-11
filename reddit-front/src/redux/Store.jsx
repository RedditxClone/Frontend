import { configureStore } from '@reduxjs/toolkit';
import PostInteractionsSlice from './slices/PostInteractionsSlice';
import PostSlice from './slices/PostSlice';

export const Store = configureStore({
  reducer: {
    post: PostSlice,
    postInteraction: PostInteractionsSlice,
    subreddit: SubredditSlice
  }
});

export default Store;
