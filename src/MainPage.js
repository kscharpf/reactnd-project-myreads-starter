import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

const SHELVES = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read',
}

const MainPage = (props) => {  
    let shelves = []
    for (const k in SHELVES) {
      shelves.push(<Shelf key={k} 
                          onNewShelf={props.onNewShelf} 
                          name={SHELVES[k]} 
                          books={props.books.filter((b) => b.shelf === k)} />)
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
}

MainPage.propTypes = {
  books: PropTypes.array,
  onNewShelf: PropTypes.func.isRequired,
}
export default MainPage
