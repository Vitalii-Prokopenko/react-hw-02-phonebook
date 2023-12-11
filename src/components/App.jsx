import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import Contacts from './contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    id: '',
  };

  reset = () => {
    this.setState({ name: '', id: '' });
  };

  handleInputChange = event => {
    this.setState({
      name: event.currentTarget.value,
      id: nanoid(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const { contacts, name, id } = this.state;
    contacts.push({ name, id });
    this.reset();
  };

  render() {
    const { contacts, name } = this.state;
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
          <label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <p>Contacts</p>
        <ul>
          {contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>

        {/* <Contacts contacts={contacts} /> */}
      </>
    );
  }
}

export default App;
