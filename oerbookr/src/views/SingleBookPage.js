import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class SingleBookPage extends Component {
  state = {
    book: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://sgs-lambda-bookr.herokuapp.com/books/${
          this.props.match.params.id
        }`,
      )
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.book.booktitle}</h1>
        <h2>{this.state.book.author}</h2>
        <h2>{this.state.book.license}</h2>
        <h2>{this.state.book.publisher}</h2>
        {/* {this.state.book.reviews.map(review => {} )} */}
        <Link>
          <button>Add a Review</button>
        </Link>
      </div>
    );
  }
}
