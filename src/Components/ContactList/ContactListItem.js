import React from 'react';
import PropTypes from 'prop-types';
const ContactListItem = ({ id, name, number, onDelete }) => (
  <>
    <span>{name}: </span>
    <span>{number}</span>
    <button onClick={() => onDelete(id)} type="button">
      Delete
    </button>
  </>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
