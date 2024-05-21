import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    counterStore: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
