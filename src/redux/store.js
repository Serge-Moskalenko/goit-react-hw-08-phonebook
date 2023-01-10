import { contactsApi } from './contactSlice';
import { filterSlise } from './filterSlise';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';

console.log(contactsApi.reducerPath)


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter:filterSlise.reducer,
      
    },

    middleware: getDefaultMiddleware => [ ...getDefaultMiddleware(), contactsApi.middleware,],
})


// setupListeners(store.dispatch);