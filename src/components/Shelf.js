import React, {Component} from "react";
import Book from './Book';
import {PropTypes} from 'prop-types';

export default class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  } 
    updateBook = () =>{
      this.props.changeShelf()
    }
    render() {
      //console.log("shelf");
        return ( <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.map((data) => <li key={data.id}><Book book={data} changeShelf={this.updateBook}/> </li> )}
          </ol>
        </div>
      </div>
       )
    }
}
