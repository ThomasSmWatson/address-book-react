import React, { Component } from "react"
import "../styles/search_contacts.css"
import Contact from "./Contact.jsx"
class ContactTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>number</th>
            <th>email</th>
          </tr>
          {this.props.contacts
            ? this.props.contacts.map(c => <Contact contact={c} />)
            : "Loading..."}
        </tbody>
      </table>
    )
  }
}
export default ContactTable
