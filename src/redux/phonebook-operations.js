import Axios from 'axios';
import shortid from 'shortid';

import actions from './phonebook-actions';

Axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactsRequest());
    try {
        const { data } = await Axios.get('/contacts');
        dispatch(actions.fetchContactsSuccess(data))
    } catch (error) {
        dispatch(actions.fetchContactsError(error))
    }
};

const addContact = text => dispatch => {
    dispatch(actions.addContactRequest());
    const contact = {
        id: shortid.generate(),
        name: text.name,
        number: text.number,
    };
    
    Axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch(({ error }) => dispatch(actions.addContactError(error)));
};

const deleteContact = contactId => dispatch => {
    dispatch(actions.deleteContactRequest());
    
    Axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(actions.deleteContactSuccess(contactId)))
        .catch(({ error }) => dispatch(actions.deleteContactError(error)));
};

export default {fetchContacts, addContact, deleteContact};