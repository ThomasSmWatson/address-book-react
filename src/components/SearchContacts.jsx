import React, { Component } from "react"
import "../styles/search_contacts.css"
class SearchContacts extends Component {
  render() {
    return (
      <div>
        <label htlmfor="contacts">Search</label>
        <input
          name="contacts"
          type="text"
          onChange={e => this.props.getContacts(`?name=${e.target.value}`)}
        />
      </div>
    )
  }
}
export default SearchContacts
