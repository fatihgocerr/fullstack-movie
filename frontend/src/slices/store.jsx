import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import userSlice from './userSlice'
import { apiSlice } from './apiSlice'

export const store = configureStore({
  reducer: {
    modalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,

    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})
