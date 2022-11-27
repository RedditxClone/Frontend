import { configureStore } from '@reduxjs/toolkit';
import PostSlice from './slices/PostSlice';
import AuthSlice from './slices/AuthSlice';
import SettingsSlice from './slices/Settings';
import UpdateSettingsSlice from './slices/UpdateSettings';

export const Store = configureStore({
  reducer: {
    post: PostSlice,
    auth: AuthSlice,
    settings: SettingsSlice,
    updatedSettings: UpdateSettingsSlice
  }
});

export default Store;
