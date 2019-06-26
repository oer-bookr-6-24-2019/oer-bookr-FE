import React from 'react';

export default function ReviewCard(props) {
  return (
    <div>
      {props.review.user}
      {props.review.review}
      {props.review.rating}
    </div>
  );
}
