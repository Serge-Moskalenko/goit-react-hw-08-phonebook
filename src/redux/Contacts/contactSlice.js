
import { createSlice } from '@reduxjs/toolkit';
import { addContact ,deleteContact,fetchContacts,updateContact} from './contactsOperetions';

const handlePending = state => {
  state.isLoading = true;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items = [...state.items, action.payload];
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, action) {
      state.items.map(item => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
          item.number = action.payload.number;
        }
        return item;
      });
      state.isLoading = false;
    },
  },
});