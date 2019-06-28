import React from 'react';
import { withRouter } from 'react-router-dom';
import { reviewStructure } from '../dummy-data-structures/review-structure';
import axios from 'axios';

class AddReviewPage extends React.Component {
  state = { review: '', rating: 0, user: '' };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setRating = ratingNumber => {
    this.setState({
      rating: ratingNumber,
    });
  };

  reviewSubmitHandler = e => {
    e.preventDefault();
    axios
      .post(
        `https://sgs-lambda-bookr.herokuapp.com/reviews/add/bybookid/${
          this.props.match.params.id
        }`,
        this.state,
      )
      .then(res =>
        this.props.history.push(`/book/${this.props.match.params.id}`),
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='review_container'>
        <form>
          <label>Review</label>
          <textarea
            required
            cols='75'
            rows='6'
            name='review'
            onChange={this.changeHandler}
          />
          <label>Full Name</label>
          <input name='user' onChange={this.changeHandler} required />
          <div className='ratings_container'>
            {reviewStructure.map(ratingObj => {
              return (
                <i
                  className={
                    this.state.rating >= ratingObj.rating
                      ? 'fas fa-star fa-3x selected'
                      : 'fas fa-star fa-3x'
                  }
                  onClick={() => this.setRating(ratingObj.rating)}
                />
              );
            })}
          </div>
          <button className='btn' onClick={this.reviewSubmitHandler}>
            Add Review
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddReviewPage);
