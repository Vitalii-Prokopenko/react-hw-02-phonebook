import Item from 'components/item/Item';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => (
  <>
    <p>Contacts</p>
    <ul>
      {contacts.map(contact => {
        return <Item key={contact.id} contact={contact} />;
      })}
    </ul>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
