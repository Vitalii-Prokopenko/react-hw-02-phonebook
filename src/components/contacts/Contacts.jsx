import PropTypes from 'prop-types';
import css from '../contacts/contacts.module.css';

const Contacts = ({ contacts }) => (
  <>
    <p>Contacts</p>
    <ul>
      {contacts.map(contact => {
        return <li>{contact}</li>;
      })}
    </ul>
  </>
);

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Contacts
