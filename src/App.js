import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import { Route, Switch } from 'react-router-dom'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  constructor(props) {
    super(props)
    this.onNewShelf = this.onNewShelf.bind(this)
  }

componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books})
      });
  }

  onNewShelf(book, newShelf) {
    this.setState( prevState => {
        const books = prevState.books
        let found = false
        for(const idx in books) {
          if(books[idx].id === book.id) {
            books[idx].shelf = newShelf
            found = true
            break
          }
        }
        if(! found) {
          book.shelf = newShelf
          books.push(book)
        }
        return {books: books}
    });
    BooksAPI.update(book, newShelf)
  }

  render() {
    // Borrowed from https://tylermcginnis.com/react-router-handling-404-pages/
    const NotFoundPath = ({ location }) => (
      <div>
        <h3>404 not found <code>{location.pathname}</code></h3>
      </div>
    )
    return (
      <div className="app">
       <Switch>
        <Route 
          path="/search"
          render={(props) =>
            <Search {...props} books={this.state.books} onNewShelf={this.onNewShelf} />
          } />
        <Route 
          exact path="/" 
          render={(props) => 
            <MainPage {...props} books={this.state.books} onNewShelf={this.onNewShelf} />
          } />
        <Route component={NotFoundPath} />
       </Switch>
      </div>
    );
}
}

export default BooksApp

