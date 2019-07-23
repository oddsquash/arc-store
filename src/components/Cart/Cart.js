import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";

export default class Cart extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <CartColumns />
                  <CartList value={value} />
                  {/* <CartTotals value={value} history={this.props.history} /> */}
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </>
    );
  }
}
