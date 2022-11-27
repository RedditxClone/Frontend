import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import SettingsSlice from './slices/Settings';
import UpdateSettingsSlice from './slices/UpdateSettings';

export const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    settings: SettingsSlice,
    updatedSettings: UpdateSettingsSlice
  }
});

export default Store;
