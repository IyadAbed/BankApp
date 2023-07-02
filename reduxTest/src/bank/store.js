import { configureStore } from '@reduxjs/toolkit'
import bankSlice from './bankSlice'


export default configureStore({
  reducer: {
    bank: bankSlice,
  },
})