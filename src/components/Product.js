import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, sold } = this.props.product;

    return (
      <div className="col-lg-6 col-12 mb-5">
        <div className="card product">
          <ProductConsumer>
            {(value) => (
              <>
                <div
                  className="img-container text-center"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="product"
                      className="card-img-top product-image rounded"
                      // onLoad={this.props.imageLoaded}
                    />
                    <p className="product-text-details">Details</p>
                  </Link>
                </div>
                <div className="desc-text dark-mode-text">
                  <div>
                    <p className="text-center pt-3 mb-0">{title}</p>
                    <p className="text-center">
                      {sold ? "Sold" : `$${price}`}
                    </p>
                  </div>
                </div>
              </>
            )}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
