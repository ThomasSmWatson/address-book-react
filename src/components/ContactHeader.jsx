import React, { Component } from "react"
import "../styles/contact_header.css"
class ContactHeader extends Component {
  render() {
    return (
      <div>
        <label htlmfor="contacts">Search</label>
        <input
          name="contacts"
          type="text"
          onChange={e => this.props.getContacts(`?name=${e.target.value}`)}
        />
        <button onClick={this.props.displayAddContactContainer}>
          Add Contact
        </button>
      </div>
    )
  }
}
export default ContactHeader
