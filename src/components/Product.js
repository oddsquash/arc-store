import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price } = this.props.product;
    return (
      <div className="col-11 mx-auto col-md-6 col-lg-4 my-5">
        <div className="card rounded">
          <ProductConsumer>
            {value => (
              <div
                className="img-container text-center"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product"
                    className="card-img-top product-image rounded"
                  />
                  <p className="product-text">[ Details ]</p>
                </Link>
              </div>
            )}
          </ProductConsumer>
          <div className="desc-text">
            <p className="text-center pt-3 mb-0">{title}</p>
            <p className="text-center">${price}</p>
          </div>
        </div>
      </div>
    );
  }
}
