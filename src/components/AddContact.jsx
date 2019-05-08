import React, { Component } from "react"
import "../styles/add_contact.css"
class AddContact extends Component {
  state = {
    name: null,
    email: null,
    phone: null
  }
  render() {
    const { addContact } = this.props
    return (
      <div id="addcontact">
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            name="name"
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            name="email"
            type="text"
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone number">Phone Number</label>
          <br />
          <input
            name="phone number"
            type="text"
            onChange={e => this.setState({ phone: e.target.value })}
          />
        </div>
        <button onClick={e => addContact(this.state)}>Add Contact</button>
      </div>
    )
  }
}
export default AddContact
