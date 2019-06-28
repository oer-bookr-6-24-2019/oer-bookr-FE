import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/bookCardStyles.scss';

const BookCard = props => {
  return (
    <div className='bookCard_container'>
      <Link to={`/book/${props.book.bookid}`}>
        <img src={props.book.imageurl} alt='book' />
        <h1>Title: {props.book.booktitle}</h1>
        <h2>Author: {props.book.author}</h2>
        <h2>Publisher: {props.book.publisher}</h2>
      </Link>
    </div>
  );
};

export default BookCard;
