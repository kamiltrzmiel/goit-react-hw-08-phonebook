import { createSlice } from '@reduxjs/toolkit';
import { register, userLogin, userLogout, refreshUser } from './authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.error = null;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled]: handleFulfilled,
    [register.rejected]: handleRejected,
    [userLogin.pending]: handlePending,
    [userLogin.fulfilled]: handleFulfilled,
    [userLogin.rejected]: handleRejected,
    [userLogout.pending]: handlePending,
    [userLogout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [userLogout.rejected]: handleRejected,
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
