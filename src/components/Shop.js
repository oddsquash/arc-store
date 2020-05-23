import React from "react";

import { ProductConsumer } from "../context";
import Product from "./Product";

/**
 * Shop component.
 */
export default function Shop() {
  return (
    <>
      <div className="full-screen">
        <div className="container">
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      // imageLoaded={() => imageLoaded()}
                    />
                  );
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  );
}
