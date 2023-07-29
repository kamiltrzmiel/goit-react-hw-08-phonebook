import { createSlice } from '@reduxjs/toolkit';
import { userLogout } from 'redux/authentication/authOperations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: {
    [userLogout.fulfilled]: state => {
      return (state = '');
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
