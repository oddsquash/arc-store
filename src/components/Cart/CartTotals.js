import React from "react";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const {
    cartSubTotal,
    shipping,
    cartTotal,
    clearCart,
    updateSold,
    openModal
  } = value;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-4 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">shipping : </span>
              <strong>${shipping}</strong>
            </h5>
            <h5>
              <span className="text-title">total : </span>
              <strong>${cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
              updateSold={updateSold}
              openModal={openModal}
            />
          </div>
        </div>
      </div>
    </>
  );
}
