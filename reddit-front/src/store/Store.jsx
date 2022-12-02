import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import SettingsSlice from './slices/Settings';

export const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    settings: SettingsSlice
  }
});

export default Store;
