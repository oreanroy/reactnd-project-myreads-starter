import React, {Component} from "react";
import * as BooksAPI from '../BooksAPI';
import {PropTypes} from 'prop-types';

export default class BookSearch extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired

    } 
    change = async (event) =>{
        await BooksAPI.update(this.props.book, event.target.value);
        this.props.changeShelf()
    }
    
    
    render() {
        let shelf = "none";
        for(var i in this.props.books){
            if(this.props.book.id == this.props.books[i].id)
            {
                shelf = this.props.books[i].shelf; 
                break;
            }
        }
        return (
            <div className="book" key={this.props.book.id}>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail? this.props.book.imageLinks.smallThumbnail: ""}")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.change} value={shelf}>
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
