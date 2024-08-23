import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';
import { editingReducer } from './editSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    editing: editingReducer,
  },
});
