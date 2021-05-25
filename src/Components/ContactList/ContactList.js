import React from 'react';
import './ContactList.scss';

const ContactList = ({ children }) => (
  <ul className="ContactList">{children}</ul>
);

export default ContactList;
