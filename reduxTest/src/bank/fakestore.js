// store.js

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import fakestoreReducer from './fakestoreSlice';

const store = configureStore({
  reducer: {
    fakeApi: fakestoreReducer,
  },
  middleware: [thunk],
});

export default store;
