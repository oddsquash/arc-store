import React from "react";

export default function CartColumns() {
  return (
    <div className="container text-center d-none d-lg-block dark-mode-text">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p>
            <strong>Products</strong>
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>
            <strong>Price</strong>
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>
            <strong>Remove?</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
