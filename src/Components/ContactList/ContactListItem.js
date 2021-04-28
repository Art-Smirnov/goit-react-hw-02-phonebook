import React from 'react';
import PropTypes from 'prop-types';

import './ContactListItem.scss';

const ContactListItem = ({ id, name, number, onDelete }) => (
  <li className="ContactListItem" key={id}>
    <span>
      {name}: {number}
    </span>

    <button className="btn" onClick={() => onDelete(id)} type="button">
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
