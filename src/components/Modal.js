import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal, cart } = value;

          if (!modalOpen) {
            return null;
          } else if (modalOpen && cart.length > 0) {
            return (
              <div className="modal-container">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5"
                    >
                      <h5 className="modal-text dark-mode-text">
                        Item added to the Cart!
                      </h5>
                      <Link to="/" className="link">
                        <div
                          className="modal-button dark-mode-text"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          [ Back to Store ]
                        </div>
                      </Link>
                      <Link to="/cart" className="link">
                        <div
                          className="modal-button dark-mode-text"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          [ Go to Cart ]
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (modalOpen && cart.length === 0) {
            return (
              <div className="modal-container">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5"
                    >
                      <h5 className="modal-text dark-mode-text">
                        Thank you for your purchase!
                      </h5>
                      <Link to="/" className="link">
                        <div
                          className="modal-button dark-mode-text"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          [ Back to Store ]
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
