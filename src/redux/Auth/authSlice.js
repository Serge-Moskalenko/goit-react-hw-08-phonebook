import { createSlice } from '@reduxjs/toolkit';
import { registers,logIn,logOut,refreshUser} from './authOperetions';

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
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogIn = false;
      state.isLoading = false;
    },
     [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLogIn = true;
      state.isLoading = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.isLoading = false;
    },
  },
});
