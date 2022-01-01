import React, { Component } from "react";
import { nanoid } from "nanoid";
import Container from "./components/container";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";
import Title from "./components/title";
import Filter from "./components/filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const newContacts = this.state.contacts;
    const oldContacts = prevState.contacts;

    if (newContacts !== oldContacts) {
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    }
  }

  addContact = (info) => {
    const contact = {
      id: nanoid(),
      name: info.name,
      number: info.tel,
    };
    const isOnList = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === info.name.toLowerCase()
    );

    isOnList
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };
  checkFoDoubles = ({ name }) => {
    return this.state.contacts.find((contact) => contact.name === name);
  };
  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    return (
      <Container title="Phonebook">
        <ContactForm onSubmit={this.addContact} />
        <Title title="Contacts" />
        <Filter value={this.state.filter} onSearch={this.handleFilter} />
        <ContactList
          items={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
