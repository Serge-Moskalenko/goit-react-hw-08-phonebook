import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlise } from './filterSlise';


export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer,
        filter:filterSlise.reducer,
    } 
})