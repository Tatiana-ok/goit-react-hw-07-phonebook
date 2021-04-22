import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import phonebookOperations from '../../redux/phonebook-operations';
import contactsSelectors from '../../redux/phonebook-selectors';

function ContactList({ contacts = [], onDeleteContact }) {
  return (
    <>
      <ul className={s.listOfContact}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.itemOfListContact}>
            <p className={s.itemNameContact}>{contact.name} </p>
            <p className={s.itemNumberContact}>{contact.number}</p>
            <button
              className={s.btnOfListContact}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(phonebookOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
