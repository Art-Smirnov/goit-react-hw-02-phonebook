import React from 'react';

import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactListItem
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;
