import React, { Component } from 'react';

import ContactForm from './Components/ContactForm';
class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onFormSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <ul></ul>
      </>
    );
  }
}

export default App;
