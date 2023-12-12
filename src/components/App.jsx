import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './form/Form';
// import Contacts from './contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state);
  //   const { contacts, name, number } = this.state;
  //   contacts.push({ name, number, id: nanoid() });
  //   this.reset();
  // };

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <div
          style={{
            height: '30vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework template
        </div>
        <p>Phonebook</p>
        <div>
          <Form propsOnSubmit={this.formSubmitHandler} />
        </div>

        <p>Contacts</p>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilter}
        />
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name} {contact.number}
              </li>
            );
          })}
        </ul>

        {/* <Contacts contacts={contacts} /> */}
      </>
    );
  }
}

export default App;
