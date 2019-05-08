import React, { Component } from "react"
import "../styles/contact.css"

class Contact extends Component {
  render() {
    const {
      contact: { name, phone, email, id }
    } = this.props
    console.log(name, phone)
    return (
      <div>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{id}</td>
      </div>
    )
  }
}
export default Contact
