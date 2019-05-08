import React, { Component } from "react"
import axios from "axios"
import logo from "./logo.svg"
import "./App.css"

import Contact from "./components/Contact.jsx"
import SearchContacts from "./components/SearchContacts.jsx"
const baseUrl = "http://localhost:8080" // for ease of use in this case

class App extends Component {
  state = {
    contacts: null
  }
  getContacts = async queryString => {
    this.setState({ contacts: null })
    const result = await axios.get(
      `${baseUrl}/contact${queryString ? queryString : ""}` // if theres a query string, add it to the url
    )
    const contacts = result.data.contacts
    this.setState({ contacts })
  }
  componentDidMount() {
    this.getContacts()
  }
  render() {
    const contacts = (
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>number</th>
            <th>email</th>
          </tr>
          {this.state.contacts
            ? this.state.contacts.map(c => <Contact contact={c} />)
            : "Loading..."}
        </tbody>
      </table>
    )
    return (
      <div className="App">
        <SearchContacts getContacts={this.getContacts} />
        {contacts}
      </div>
    )
  }
}

export default App
