import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './userSlice'
import  modalSlice  from './modalSlice'

export const store = configureStore({
  reducer: {
    counterSlice,
    modalSlice
  },
})