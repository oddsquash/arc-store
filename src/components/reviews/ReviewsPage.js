import React, { Component } from "react";

import Review from "./Review";
import ReviewForm from "./ReviewForm";

import data from "./reviews.json";

export default class ReviewsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="full-screen reviews-page">
        <div className="col-10 mx-auto text-center cart dark-mode-title header">
          <h1>Reviews</h1>
        </div>
        <div className="reviews-area">
          {data.Reviews.length > 0 ? (
            data.Reviews.map((data, id) => {
              return <Review key={id} data={data} />;
            })
          ) : (
            <h5 className="dark-mode-text">No Reviews Yet</h5>
          )}
        </div>
        <div className="divider"></div>
        <div className="reviews-form-area">
          <ReviewForm />
        </div>
      </div>
    );
  }
}
