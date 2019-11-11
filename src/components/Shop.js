import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Product from "./Product";
import Loading from "./Loading";

/**
 * Shop component.
 */
export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  /**
   * Render.
   */
  render() {
    const { isLoading } = this.state;
    let count = 0;

    /**
     * Waits for all images to load.
     */
    const imageLoaded = () => {
      count += 1;
      if (count === 3) {
        this.setState({ isLoading: false });
      }
    };

    return (
      <>
        {isLoading && <Loading />}
        <div className="full-screen">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return (
                      <Product
                        key={product.id}
                        product={product}
                        imageLoaded={() => imageLoaded()}
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
}
