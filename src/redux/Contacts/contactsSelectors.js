import { createSelector } from '@reduxjs/toolkit';
import { selectorFilter } from 'redux/selectors'

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectorFilter, selectContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
  }
);