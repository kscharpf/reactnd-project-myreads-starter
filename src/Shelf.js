import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Shelf = (props) => {
  const books = props.books.map((b) => 
    <li key={b.id} ><Book book={b} onNewShelf={props.onNewShelf} shelf={b.shelf} /></li>
  )
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books}
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  name: PropTypes.string,
  books: PropTypes.array,
  onNewShelf: PropTypes.func.isRequired,
}

export default Shelf
