import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { Gallery } from "./Gallery";

export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const {
              id,
              img,
              moreImages,
              intro,
              desc,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;

            const photos = [
              {
                photo: moreImages[0],
                number: 1,
                caption: title,
                subcaption: desc
              },
              {
                photo: moreImages[1],
                number: 2,
                caption: title,
                subcaption: desc
              },
              {
                photo: moreImages[2],
                number: 3,
                caption: title,
                subcaption: desc
              },
              {
                photo: moreImages[3],
                number: 3,
                caption: title,
                subcaption: desc
              },
              {
                photo: moreImages[4],
                number: 3,
                caption: title,
                subcaption: desc
              }
            ];

            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img
                      src={img}
                      className="rounded img-fluid"
                      alt="product"
                    />
                    <Gallery images={photos} />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <h2>{title}</h2>
                    <h4 className="text-muted">
                      Price : <span>$</span>
                      {price}
                    </h4>
                    <p className="text-muted lead">{intro}</p>
                    <p className="font-weight-bold mt-3 mb-0">Description:</p>
                    <p className="text-muted lead">{info}</p>
                    <p className="font-weight-bold mt-3 mb-0">Instructions:</p>
                    <ul
                      style={{ listStyle: "none" }}
                      className="text-muted lead pl-0 pt-1"
                    >
                      <li>
                        <p>-Hand wash only</p>
                      </li>
                      <li>
                        <p>-Do not soak</p>
                      </li>
                      <li>
                        <p>-Towel dry</p>
                      </li>
                      <li>
                        <p>-Apply wax mixture as needed</p>
                      </li>
                      <li>
                        <h6>
                          *Caution: People with a nut or tree nut allergy can be
                          allergic to tung oil, but it is very rare.
                        </h6>
                      </li>
                    </ul>
                    <div>
                      <Link to="/">
                        <button className="button pt-1 shadow-sm my-1 border-0 bg-transparent">
                          [ Back to products ]
                        </button>
                      </Link>
                      <div>
                        <button
                          className="button pt-1 shadow-sm my-1 border-0 bg-transparent"
                          disabled={inCart}
                          onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                          }}
                        >
                          {inCart ? "[ In cart ]" : "[ Add to cart ]"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
