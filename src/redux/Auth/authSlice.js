import { createSlice } from '@reduxjs/toolkit';
import { registers} from './authOperetions';



export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,

  },
  extraReducers: {
    [registers.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
 
    },
   
  },
});
