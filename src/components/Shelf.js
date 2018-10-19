import React, {Component} from "react";
import Book from './Book';

export default class Shelf extends Component {
    render() {
      console.log(this.props.books);
        return ( <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.map((data) => <li><Book book={data} key={data.id}/> </li> )}
          </ol>
        </div>
      </div>
       )
    }
}
