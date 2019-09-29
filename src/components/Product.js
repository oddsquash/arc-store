import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import ScrollReveal from "scrollreveal";

export default class Product extends Component {
  render() {
    const { id, title, img, price, sold } = this.props.product;
    ScrollReveal().reveal(".card", {
      distance: "150%",
      origin: "right",
      duration: 500,
      easing: "ease-out",
      interval: 100,
      opacity: 0
      // reset: true,
    });

    return (
      <div className="col-lg-6 col-12 mt-5">
        <div className="card product">
          <ProductConsumer>
            {value =>
              sold ? (
                <div
                  className="img-container text-center"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="product"
                      className="card-img-top product-image rounded"
                      onLoad={this.props.imageLoaded}
                    />
                    <p className="product-text-sold">[ Sold Out ]</p>
                  </Link>
                </div>
              ) : (
                <div
                  className="img-container text-center"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="product"
                      className="card-img-top product-image rounded"
                      onLoad={this.props.imageLoaded}
                    />
                    <p className="product-text-details">[ Details ]</p>
                  </Link>
                </div>
              )
            }
          </ProductConsumer>
          <div className="desc-text dark-mode-text">
            <div>
              <p className="text-center pt-3 mb-0">{title}</p>
              <p className="text-center">${price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
