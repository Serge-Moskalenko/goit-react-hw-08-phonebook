import { contactsApi } from './contactSlice';
import { filterSlise } from './filterSlise';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';
import {authSlice} from './Auth/authSlice'


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlise.reducer,
        auth:authSlice.reducer,
      
    },

    middleware: getDefaultMiddleware => [ ...getDefaultMiddleware(), contactsApi.middleware,],
});



// setupListeners(store.dispatch);