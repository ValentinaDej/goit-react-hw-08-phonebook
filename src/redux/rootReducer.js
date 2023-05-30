import { combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import shopsReducer from './shops/shopsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  shops: shopsReducer,
});

export default rootReducer;
