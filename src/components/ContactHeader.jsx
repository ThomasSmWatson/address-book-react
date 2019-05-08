import React, { Component } from "react"
import "../styles/contact_header.css"
class ContactHeader extends Component {
  render() {
    const { getContacts, displayAddContactContainer } = this.props
    return (
      <div>
        <label htlmfor="contacts">Search</label>
        <input
          name="contacts"
          type="text"
          onChange={e => getContacts(`?name=${e.target.value}`)}
        />
        <button onClick={displayAddContactContainer}>Add Contact</button>
      </div>
    )
  }
}
export default ContactHeader
