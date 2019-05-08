import React, { Component } from "react"
import axios from "axios"
import logo from "./logo.svg"
import "./App.css"

import Contact from "./components/Contact.jsx"
const baseUrl = "http://localhost:8080" // for ease of use in this case

class App extends Component {
  state = {
    contacts: null
  }
  getContacts = async () => {
    const result = await axios.get(`${baseUrl}/contact`)
    const contacts = result.data.contacts
    this.setState({ contacts })
  }
  componentDidMount() {
    this.getContacts()
  }
  render() {
    const contacts = (
      <table>
        <th>name</th>
        <th>number</th>
        <th>email</th>
        <tbody>
          {this.state.contacts &&
            this.state.contacts.map(c => <Contact contact={c} />)}
        </tbody>
      </table>
    )
    return <div className="App">{contacts}</div>
  }
}

export default App
