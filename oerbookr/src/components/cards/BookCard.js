import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = props => {
  return (
    <div>
      <Link to={`/book/${props.book.bookid}`}>
        <h1>{props.book.booktitle}</h1>
        <h2>{props.book.author}</h2>
        <h2>{props.book.publisher}</h2>
        <h2>{props.book.bookid}</h2>
      </Link>
    </div>
  );
};

export default BookCard;
