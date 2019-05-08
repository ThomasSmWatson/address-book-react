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
        <button onClick={() => console.log("hi")}>Add Contact</button>
      </div>
    )
  }
}
export default ContactHeader
