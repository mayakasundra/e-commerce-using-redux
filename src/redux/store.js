import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/Slices/authSlice';
// import dashboardSlice from "./dashboard/slices/dashboardSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    // register: registerSlice,
    // dashboard: dashboardSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
