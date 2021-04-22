import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, {payload}) => payload,
  [actions.addContactSuccess]: (state, { payload }) => {
    if (
      state.find(contact =>
        contact.name.toLowerCase().includes(payload.name.toLowerCase()),
      )
    ) {
      alert(`${payload.name} is already in contacts`);
    } else {
      return [payload, ...state];
    }
  },

  [actions.deleteContactSuccess]: (state, { payload }) => {
    return state.filter(contact => payload !== contact.id);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
  [actions.deleteContactSuccess]: (state, { payload }) => '',
});

const error = createReducer('', {
  [actions.fetchContactsError]: (state, { payload }) => payload.message,
  [actions.addContactError]: (state, { payload }) => payload.message,
  [actions.deleteContactError]: (state, { payload }) => payload.message,
})

export default combineReducers({
  items,
  filter,
  error
});
