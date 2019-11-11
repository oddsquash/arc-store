import React from "react";

export default function EmptyCart() {
  return (
    <div>
      <div className="mt-5" style={{ maxWidth: '100%'}}>
        <div className="col-8 mx-auto text-center dark-mode-title">
          <h2>Your Cart is Empty</h2>
        </div>
      </div>
    </div>
  );
}
