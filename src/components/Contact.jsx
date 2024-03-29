import React, { Component } from "react"
import "../styles/contact.css"

class Contact extends Component {
  render() {
    const {
      contact: { name, phone, email, id },
      onClickContactName
    } = this.props
    const emailHref = `mailto:${email}`
    return (
      <tr key={id}>
        <td onClick={onClickContactName}>{name}</td>
        <td>{phone}</td>
        <td>
          <a href={emailHref}>Email</a>
        </td>
      </tr>
    )
  }
}
export default Contact
