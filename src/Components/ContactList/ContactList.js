import React from 'react';

import ContactListItem from './ContactListItem';
import './ContactList.scss';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      //чомусь якщо помістити тег лі в компонент ContactListItem, то реакт перестає бачить присвоєння атрибуту key
      <li className="ContactListItem" key={id}>
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
