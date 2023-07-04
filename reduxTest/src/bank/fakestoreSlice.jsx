// fakestoreSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fakestoreSlice = createSlice({
  name: 'fakeApi',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  fakestoreSlice.actions;

export const fetchFakestoreData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export default fakestoreSlice.reducer;
