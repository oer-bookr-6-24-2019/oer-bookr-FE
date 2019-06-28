import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/bookCardStyles.scss';
import bookCover1 from '../../img/bookCover1.jpg';

const BookCard = props => {
  return (
    <div className='bookCard_container'>
      <Link to={`/book/${props.book.bookid}`}>
        <div className='book_img_container'>
          <img src={bookCover1} alt='book cover' />
        </div>
        <div className='bookInfo_container'>
          <h1>Title: {props.book.booktitle}</h1>
          <h2>Author: {props.book.author}</h2>
          <h2>Publisher: {props.book.publisher}</h2>
        </div>{' '}
        <p>Learn More...</p>
      </Link>
    </div>
  );
};

export default BookCard;
