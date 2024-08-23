import { createSelector } from '@reduxjs/toolkit';

export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;
export const selectContacts = state => state.contacts.items;

export const selectCurrent = state => state.editing.current;

export const selectCountFavoriteMemo = createSelector(
  [selectContacts],
  contact => {
    return contact.reduce((acc, curr) => (curr.favorite ? acc + 1 : acc), 0);
  }
);
