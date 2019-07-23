import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p>Products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>Remove?</p>
        </div>
      </div>
    </div>
  );
}
