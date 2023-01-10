import { createSlice } from "@reduxjs/toolkit";

export const filterSlise = createSlice({
    name: 'filter',
    initialState:'',
    reducers: {
        makeFilter(state, action) {
            return state = action.payload;
        }
    }    
});

export const { makeFilter } = filterSlise.actions;