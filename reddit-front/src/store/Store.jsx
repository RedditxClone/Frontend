import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import SettingsSlice from './slices/Settings';
import UserCommunitiesSlice from './slices/UserCommunitiesSlice';

export const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    settings: SettingsSlice,
    communities: UserCommunitiesSlice
  }
});

export default Store;
