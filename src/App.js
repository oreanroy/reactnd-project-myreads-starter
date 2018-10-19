import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Shelf from "./components/Shelf";
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((book) => {
      this.setState({books: book})
    })
  }

  render() {
    
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              { <Shelf title='Currently Reading' books={this.state.books.filter(book => book.shelf === 'currentlyReading')} key='curentlyReading' /> }
              { <Shelf title='Want to Read' books={this.state.books.filter(book => book.shelf === 'wantToRead')} key='wantToRead' /> }
              { <Shelf title='Read' books={this.state.books.filter(book => book.shelf === 'read')} key='read' /> }
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default BooksApp
