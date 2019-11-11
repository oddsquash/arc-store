import React, { Component } from "react";

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.changeInput = this.changeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      date: "",
      review: ""
    };
  }

  changeInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit() {
    setTimeout(
      () =>
        this.setState(
          {
            name: "",
            date: "",
            review: ""
          },
          () => {
            alert("Thank you for submitting your review!");
          }
        ),
      2000
    );
  }

  render() {
    const { name, date, review } = this.state;
    return (
      <div className="reviews-form">
        <input
          className="input-field"
          type="text"
          placeholder="Name..."
          value={name}
          name="name"
          onChange={e => this.changeInput(e)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Date..."
          value={date}
          name="date"
          onChange={e => this.changeInput(e)}
        />
        <textarea
          className="input-field"
          placeholder="Enter your review here..."
          value={review}
          name="review"
          onChange={e => this.changeInput(e)}
        />
        <button className='button review-btn p-1 shadow-sm my-1 border-0 dark-mode-text' type="submit" onClick={this.onSubmit}>
          <a
            href={`mailto:arc.woodworking@yahoo.com?subject=My Review&body=Name: ${name}%0D%0ADate: ${date}%0D%0AReview: ${review}%0D%0A`}
            target='_blank'
            rel="noopener noreferrer"
          >
            Submit
          </a>
        </button>
      </div>
    );
  }
}
