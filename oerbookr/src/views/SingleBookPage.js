import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReviewCard from '../components/cards/ReviewCard';
import Modal from 'react-responsive-modal';
import '../styles/_singleBookPageStyles.scss';
export default class SingleBookPage extends Component {
  state = {
    book: {},
    fetched: false,
    isOpen: false,
  };

  componentDidMount() {
    axios
      .get(
        `https://sgs-lambda-bookr.herokuapp.com/books/${
          this.props.match.params.id
        }`,
      )
      .then(res => this.setState({ book: res.data, fetched: true }))
      .catch(err => console.log(err));
  }

  deleteBookHandler = e => {
    e.preventDefault();
    axios
      .delete(
        `https://sgs-lambda-bookr.herokuapp.com/books/delete/${
          this.props.match.params.id
        }`,
      )
      .then(res => this.props.history.push('/'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>{this.state.book.booktitle}</h1>
        <h2>{this.state.book.author}</h2>
        <h2>{this.state.book.license}</h2>
        <h2>{this.state.book.publisher}</h2>
        <h2>
          {this.state.fetched &&
            this.state.book.reviews.map(review => {
              return <ReviewCard key={review.reviewid} review={review} />;
            })}
        </h2>
        <h2>
          <Link
            className='link'
            to={`/add-review/${this.props.match.params.id}`}
          >
            Add a Review
          </Link>{' '}
        </h2>
        <h2>
          <a onClick={() => this.setState({ isOpen: true })}>Delete Book</a>
          <Modal
            open={this.state.isOpen}
            closeIconSize={25}
            styles={{}}
            onClose={() => this.setState({ isOpen: false })}
          >
            <p>Are you sure?</p>
            <button onClick={this.deleteBookHandler}>Yes</button>
            <button>No</button>
          </Modal>
        </h2>
      </div>
    );
  }
}
