import { createSlice } from '@reduxjs/toolkit';
import { registers,logIn } from './authOperetions';

const isPending = state => {
  state.isLoading = true;
};


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLogIn: false,
    isRefreshing: false,
    isLoading: false,
    isError:false,
  },
  extraReducers: {
    [registers.pending]: isPending,
    [registers.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
      state.isLoading = false;
    },

     [logIn.pending]: isPending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
      state.isLoading = false;
      state.isError = null;
    },
   
  },
});
