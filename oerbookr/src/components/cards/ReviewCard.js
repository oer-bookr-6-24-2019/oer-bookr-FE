import React from 'react';

export default function ReviewCard(props) {
  return (
    <div>
      <h2>Name: {props.review.user}</h2>
      <h2>Review: "{props.review.review}"</h2>
      <h2>Rating: {props.review.rating} Stars</h2>
    </div>
  );
}
