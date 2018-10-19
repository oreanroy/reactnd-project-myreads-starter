import React, {Component} from "react";
import * as BooksAPI from '../BooksAPI'
export default class Book extends Component {
    change = (event) =>{
        BooksAPI.update(this.props.book, event.target.value);
        console.log(this.props.changeShelf)
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.change} value={this.props.book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                   </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors[0]}</div>
            </div>
         )
    }
}
