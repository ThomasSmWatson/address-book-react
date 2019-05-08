import React, { Component } from "react"
import "../styles/update_contact.css"

class ContactInfo extends Component {
  state = {
    name: this.props.contact.name,
    email: this.props.contact.email,
    phone: this.props.contact.phone
  }
  render() {
    return (
      <div id="contactinfo">
        <h1 align="center">Contact Information</h1>
        <button onClick={this.props.onCloseContactInfo}>
          Close contact information view
        </button>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone number">Phone Number</label>
          <br />
          <input
            name="phone number"
            type="text"
            value={this.state.phone}
            onChange={e => this.setState({ phone: e.target.value })}
          />
        </div>
        <button
          onClick={e =>
            this.props.updateContactDetails(this.props.contact.id, this.state)
          }
        >
          Update Contact
        </button>
      </div>
    )
  }
}
export default ContactInfo
