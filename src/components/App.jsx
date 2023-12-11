import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import Contacts from './contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const { contacts, name, number } = this.state;
    contacts.push({ name, number, id: nanoid() });
    this.reset();
  };

  render() {
    const { contacts, name, number } = this.state;
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
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>Number
            <input
              type="tel"
              name="number"
              value={number}
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <p>Contacts</p>
        <ul>
          {contacts.map(contact => {
            return <li key={contact.id}>{contact.name} {contact.number}</li>;
          })}
        </ul>

        {/* <Contacts contacts={contacts} /> */}
      </>
    );
  }
}

export default App;
