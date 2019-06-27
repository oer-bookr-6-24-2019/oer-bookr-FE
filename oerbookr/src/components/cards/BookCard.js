import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/bookCardStyles.scss';

const BookCard = props => {
  return (
    <div className='bookCard_container'>
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
