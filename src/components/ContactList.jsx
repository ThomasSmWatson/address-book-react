import React, { Component } from "react"
import Contact from "./Contact.jsx"
class ContactTable extends Component {
  render() {
    const { contacts, onClickContactName } = this.props
    return (
      <table>
        <tbody>
          <tr>
            <th>name</th>
          </tr>
          {contacts
            ? contacts.map(c => (
                <Contact
                  contact={c}
                  onClickContactName={() => onClickContactName(c)}
                />
              ))
            : "Loading..."}
        </tbody>
      </table>
    )
  }
}
export default ContactTable
