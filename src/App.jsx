import React, { Component } from "react"
import axios from "axios"
import logo from "./logo.svg"
import "./App.css"

import ContactList from "./components/ContactList.jsx"
import ContactHeader from "./components/ContactHeader.jsx"
import AddContact from "./components/AddContact.jsx"
import ContactInfo from "./components/ContactInfo.jsx"
const baseUrl = "http://localhost:8080" // for ease of use in this case

class App extends Component {
  state = {
    contacts: null,
    displayAddContactForm: false,
    selectedContactInformation: null
  }
  getContacts = async queryString => {
    this.setState({ contacts: null })
    const result = await axios.get(
      `${baseUrl}/contact${queryString ? queryString : ""}` // if theres a query string, add it to the url
    )
    const contacts = result.data.contacts
    this.setState({ contacts })
  }
  displayAddContactContainer = () => {
    this.setState({ displayAddContactForm: true })
  }
  addContact = async contact => {
    await axios.post(`${baseUrl}/contact`, contact)
    await this.getContacts()
    this.setState({ displayAddContactForm: false })
  }
  updateContactDetails = async (id, { name, email, phone }) => {
    const contact = { name, email, phone }
    await axios.update(`${baseUrl}/contact/${id}`, contact)
  }
  componentDidMount() {
    this.getContacts()
  }
  render() {
    return (
      <div className="App">
        <ContactHeader
          getContacts={this.getContacts}
          displayAddContactContainer={this.displayAddContactContainer}
        />
        <ContactList contacts={this.state.contacts} />
        {this.state.displayAddContactForm && (
          <AddContact addContact={this.addContact} />
        )}
        {this.state.selectedContactInformation && (
          <ContactInfo updateContactDetails={this.updateContactDetails} />
        )}
      </div>
    )
  }
}

export default App
