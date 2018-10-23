import React from 'react'
import Shelf from "./components/Shelf";
import Search from "./Search.js"
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.getBooks()
  }
  getBooks = () => {
    BooksAPI.getAll().then((book) => {
      this.setState({books: book})
    })
  }

  changeShelf = () => {
    //BooksAPI.update(book, shelf)
   // this.setState({books: book})
   console.log("i ran")
    this.getBooks()
  }
  render() {
    return (
    <BrowserRouter>
      <div className="app">
          <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              { <Shelf title='Currently Reading' books={this.state.books.filter(book => book.shelf === 'currentlyReading')} key='curentlyReading' changeShelf={this.changeShelf}/> }
              { <Shelf title='Want to Read' books={this.state.books.filter(book => book.shelf === 'wantToRead')} key='wantToRead' changeShelf={this.changeShelf} /> }
              { <Shelf title='Read' books={this.state.books.filter(book => book.shelf === 'read')} key='read' changeShelf={this.changeShelf} /> }
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div> 
          )} />
          <Route path="/search" render={() => (
            <Search key="search" changeShelf={this.changeShelf} books={this.state.books}/>
          )} />
      </div>  
    </BrowserRouter> 
    )
  }
}

export default BooksApp
