import React from 'react';
// import PropTypes from 'prop-types';
const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(el => (
      <li key={el.id}>
        <span>{el.name}: </span>
        <span>{el.number}</span>
      </li>
    ))}
  </ul>
);

export default ContactList;
