import { createSelector } from '@reduxjs/toolkit';
    
const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normolizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normolizedFilter),
        );
    }
);

export default {getAllContacts, getFilter, getVisibleContacts};