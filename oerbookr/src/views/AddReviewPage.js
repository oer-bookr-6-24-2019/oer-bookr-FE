import React from "react";
import { withRouter } from "react-router-dom";
import { reviewStructure } from "../dummy-data-structures/review-structure";

class AddReviewPage extends React.Component {
  state = { review: "", rating: null, user: "" };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setRating = ratingNumber => {
    this.setState({
        rating: ratingNumber
    })
  }

  render() {
    return (
      <div className="review_container">
        <form>
          <label>Review</label>
          <textarea
            required
            cols="75"
            rows="6"
            name="review"
            onChange={this.changeHandler}
          />
          <label>Full Name</label>
          <input name="user" onChange={this.changeHandler} required />
          <div className="ratings_container">
          {reviewStructure.map(ratingObj => {
            return <i className="far fa-star fa-3x" onClick={() => this.setRating(ratingObj.rating)}/>;
          })}
          </div>
          <button>Add Review</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddReviewPage);
