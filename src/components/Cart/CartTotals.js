import React from "react";
// import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const {
    cartSubTotal,
    shipping,
    cartTotal
    // clearCart,
    // updateSold,
    // openModal
  } = value;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-4 pt-2 ml-sm-5 ml-md-auto col-sm-8 text-right dark-mode-text">
            <h5>
              <span className="text-title">Subtotal : </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Shipping : </span>
              <strong>${shipping}</strong>
            </h5>
            <h5>
              <span className="text-title">Total : </span>
              <strong>${cartTotal}</strong>
            </h5>
            {/* <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
              updateSold={updateSold}
              openModal={openModal}
            /> */}
            <div className="mt-4">
              <p>
                Contact us at{" "}
                <a href="mailto:arc.woodworking@yahoo.com" target="_top">
                  arc.woodworking@yahoo.com
                </a>{" "}
                to purchase or with any questions you have!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
