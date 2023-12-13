import PropTypes from 'prop-types';

const Item = ({ contact }) => (
  <>
    <ul>
      <li key={contact.id}>
        {contact.name} {contact.number}
      </li>
    </ul>
  </>
);

Item.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Item;
