import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import BookCard from '../cards/BookCard';

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
        {this.state.books.map(book => {
          return <BookCard key={book.bookid} book={book} />;
        })}
      </div>
    );
  }
}
