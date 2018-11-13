import React, { Component }  from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    value: '',
    books: [],
    illegalSearchTerm: true, // empty search is illegal
  }

  constructor(props) {
    super(props)
    
    this.onChange = this.onChange.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  onChange(e) {
    if(e.target.value === '') {
      this.setState({books: [],
                     value: ''})
    } else {
      
      BooksAPI.search(e.target.value, 100)
		  .then(
            (books) => {
              // workaround for typeof array is object
              const isArr = Object.prototype.toString.call(books) === '[object Array]';
              if(isArr) {
			    this.setState(() => ({
				    books: books,
                    illegalSearchTerm: false,
			    }))
              } else {
                this.setState({books: [], illegalSearchTerm: true,})
              }
		    })
       this.setState({value: e.target.value})
    }
  }

  onClose(e) {
    this.props.history.push('/')
  }

  render() {
    const books = this.state.books.map((book) => {
      let shelf="none"
      for(const b of this.props.books) {
        if(b.id === book.id) {
          shelf = b.shelf
        }
      }
      return (
        
        <Book key={book.id} book={book} onNewShelf={this.props.onNewShelf} shelf={shelf} />
      );      
    });
    return( 
      <div className="search-books">
        <div className="search-bar">
          <a className="close-search" onClick={this.onClose}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.onChange} value={this.state.value}  />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.illegalSearchTerm && <p>No Results Found - Consult SEARCH_TERMS.md for assistance</p>}

          <ol className="books-grid">
            {!this.state.illegalSearchTerm && books}
          </ol>
        </div>
      </div>);
  }
}

Search.propTypes = {
  onNewShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
}

export default Search
