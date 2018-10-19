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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">The Adventures of Tom Sawyer</div>
                          <div className="book-authors">Mark Twain</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              
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
