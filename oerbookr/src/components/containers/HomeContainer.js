import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import BookCard from '../cards/BookCard';
import '../../styles/_homeContainerStyles.scss'

export default class HomeContainer extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios
      .get('https://sgs-lambda-bookr.herokuapp.com/books/books')
      .then(res => this.setState({ books: res.data }))

      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1 className='header'>Browse Our Books</h1>
        {this.state.books.map(book => {
          return <BookCard key={book.bookid} book={book} />;
        })}
      </div>
    );
  }
}
