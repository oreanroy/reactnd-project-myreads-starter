import React from 'react'
import './App.css'
import Book from './components/Book';
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom"


class Search extends React.Component {
  state = {
    searchBooks: []
  }
  updateBook = () =>{
    this.props.changeShelf()
  }
  searchBook = (query) =>{
    if(query !=='' &&  isNaN(query)){
      BooksAPI.search(query).then((books) => {
        this.setState({searchBooks: books})
      });
   }
  }

  render() {
    return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input onChange={event => this.searchBook(event.target.value)} type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {
          this.state.searchBooks.map((data) => <li><Book book={data} key={data.id} changeShelf={this.updateBook}/> </li> )
        }
        </ol>
      </div>
    </div>)
  }
}
export default Search