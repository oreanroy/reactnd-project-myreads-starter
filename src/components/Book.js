import React, {Component} from "react";
import * as BooksAPI from '../BooksAPI';
import {PropTypes} from 'prop-types';

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired

    } 
    change = (event) =>{
        BooksAPI.update(this.props.book, event.target.value);
        this.props.changeShelf()
    }
    render() {
        //console.log(this.props);
        return (
            <div className="book" key={this.props.book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail? this.props.book.imageLinks.smallThumbnail: ""}")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.change} value={this.props.book.shelf? this.props.book.shelf:"none"}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                   </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.authors? this.props.book.authors[0]:"unkown author"}</div>
            </div>
         )
    }
}
