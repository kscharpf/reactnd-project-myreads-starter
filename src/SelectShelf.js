import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectShelf extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    e.preventDefault()
    this.props.onSubmit(this.props.book, e.target.value)

  }

  render() {
    return (
        <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.onChange} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
        </div>
    )
  }
}

SelectShelf.propTypes = {
  shelf: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
export default SelectShelf
