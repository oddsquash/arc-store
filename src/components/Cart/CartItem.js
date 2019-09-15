import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price } = item;
  const { removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center dark-mode-text">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
        <span className="d-none d-lg-block">{title}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2 d-lg-none">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
    </div>
  );
}
