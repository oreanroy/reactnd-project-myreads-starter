import React from 'react'
import './App.css'
import BookSearch from './components/BookSearch';
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom"
import {PropTypes} from 'prop-types';


class Search extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired

}
  state = {
    searchBooks: [],
    query: ''
  }
  upadateQuery = (query) => {
    this.setState({query: query})
    this.searchBook(query)
  }
  updateBook = () =>{
    this.props.changeShelf()
  }
  searchBook = (query) =>{
    if(query ===''){
      this.setState({searchBooks: []})
    }
    if(query !=='' &&  isNaN(query)){
      try {
      BooksAPI.search(query).then((books) => {
        if(!books.error){
          this.setState({searchBooks: books})
        }
        else
        this.setState({query: "not found"})
      }); }catch(err){
        this.setState({query: "not found"})
      }
   }
  }
  render() {
    if(this.state.query.length === 0){
      return(
        <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input onChange={event => this.upadateQuery(event.target.value)} type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        <h1>Search Something</h1>
        </ol>
      </div>
    </div>
      )
    }
    if(this.state.query.length !== 0){
      if(this.state.query === "not found"){
        return(
          <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input onChange={event => this.upadateQuery(event.target.value)} type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        <h1>No resuts found</h1>
        </ol>
      </div>
    </div>
        )
      }
      else{
        return(
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
              this.state.searchBooks.map((data) => <li key={data.id}><BookSearch book={data} changeShelf={this.updateBook} books={this.props.books}/> </li> )
            }
            </ol>
          </div>
        </div>
        )
      }
    }
  } 
}
export default Search