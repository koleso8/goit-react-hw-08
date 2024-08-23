import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFavoriteFilter = state => state.filters.isFavorite;
export const selectNameFilter = state => state.filters.name;

export const selectContactsFilteredMemo = createSelector(
  [selectContacts, selectNameFilter, selectFavoriteFilter],
  (contacts, filter, isFavorite) => {
    let filtered;
    if (isFavorite) {
      filtered = contacts.filter(item => item.favorite === isFavorite);
    } else {
      filtered = contacts;
    }

    return filtered.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
