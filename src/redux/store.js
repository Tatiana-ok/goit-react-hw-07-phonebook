import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import phonebookReducer from './phonebook-reducer';

const middleware = [
  ...getDefaultMiddleware(),
];

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware,
});


export default store;
