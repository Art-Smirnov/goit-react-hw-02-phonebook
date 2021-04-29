import React from 'react';
import PropTypes from 'prop-types';

import './ContactListItem.scss';

const ContactListItem = ({ id, name, number, onDelete }) => (
  <>
    <span className="ContactListItem__data">
      {name}: {number}
    </span>

    <button className="delete__btn" onClick={() => onDelete(id)} type="button">
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
