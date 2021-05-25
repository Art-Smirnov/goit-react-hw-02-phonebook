import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ children }) => (
  <ul className="ContactList">{children}</ul>
);

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactList;
