import React from 'react';

import ContactListItem from './ContactListItem';
import './ContactList.scss';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        id={id}
        name={name}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default ContactList;
