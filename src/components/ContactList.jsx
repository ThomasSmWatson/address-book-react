import React, { Component } from "react"
import Contact from "./Contact.jsx"
class ContactTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>name</th>
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
