import React from 'react'
import PropTypes from 'prop-types'
import SelectShelf from './SelectShelf'
  
                     
const Book = (props) => {
    const bgImage = (props.book.imageLinks && props.book.imageLinks.thumbnail) ? `url(${props.book.imageLinks.thumbnail})` : '';
    const  style = {width: 128, 
                    height: 193,
                    backgroundImage: bgImage,
                   }
    const selector = <SelectShelf book={props.book} shelf={props.shelf} onSubmit={props.onNewShelf} />
      
    const authors = (props.book.authors && props.book.authors.map((a)=><div key={a} className="book-authors">{a}</div>))

    return (
      <div>
        <div className="book">
          <div className="book-top">
             <div className="book-cover" 
                  style={style}>
             </div>
             {selector}
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        {authors}
      </div>
    )
}

Book.propTypes = {
  shelf: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired,
  onNewShelf: PropTypes.func.isRequired,
}

export default Book
