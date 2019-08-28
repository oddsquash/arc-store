import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct,
    cart: [],
    modalOpen: false,
    cartSubTotal: 0,
    shipping: 0,
    cartTotal: 0
  };

  componentWillMount() {
    localStorage.getItem("detail") &&
      this.setState({
        detailProduct: JSON.parse(localStorage.getItem("detail"))
      });
    localStorage.getItem("cart") &&
      this.setState({
        cart: JSON.parse(localStorage.getItem("cart"))
      });
    localStorage.getItem("subTotal") &&
      this.setState({
        cartSubTotal: JSON.parse(localStorage.getItem("subTotal"))
      });
    localStorage.getItem("shipping") &&
      this.setState({
        shipping: JSON.parse(localStorage.getItem("shipping"))
      });
    localStorage.getItem("total") &&
      this.setState({
        cartTotal: JSON.parse(localStorage.getItem("total"))
      });
  }

  componentDidMount() {
    this.setProducts();
  }

  //   Copies the value instead of referencing them and changing the original data
  setProducts = () => {
    if (localStorage.getItem("products") === null) {
      let products = [];
      storeProducts.forEach(item => {
        const singleItem = { ...item };
        products = [...products, singleItem];
      });
      this.setState({ products });
    } else {
      let products = JSON.parse(localStorage.getItem("products"));
      this.setState({ products });
    }
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(
      { detailProduct: product },
      localStorage.setItem("detail", JSON.stringify(product))
    );
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id)); // using getItem to return the index instead of the id
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      { products: tempProducts, cart: [...this.state.cart, product] },
      () => {
        this.addTotals();
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        localStorage.setItem("products", JSON.stringify(this.state.products));
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState({ cart: tempCart, products: tempProducts }, () => {
      this.addTotals();
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
      localStorage.setItem("products", JSON.stringify(this.state.products));
    });
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.setProducts();
      this.addTotals();
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    });
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    let shipping = 0;
    this.state.cart.forEach(() => (shipping += 10));
    let total = subTotal + shipping;
    this.setState(
      { cartSubTotal: subTotal, shipping, cartTotal: total },
      () => {
        localStorage.setItem(
          "subTotal",
          JSON.stringify(this.state.cartSubTotal)
        );
        localStorage.setItem("shipping", JSON.stringify(this.state.shipping));
        localStorage.setItem("total", JSON.stringify(this.state.cartTotal));
      }
    );
  };

  updateSold = () => {
    // let products = [];
    // this.state.cart.forEach(item => {
    //   const singleItem = { ...item };
    //   singleItem.sold = true;
    //   products = [...products, singleItem];
    // });
    // this.setState({ products });

    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart.forEach(item => {
      let index = tempProducts.findIndex(obj => obj.id === item.id);
      let soldProduct = tempProducts[index];
      soldProduct.sold = true;
      soldProduct.inCart = false;
    });

    // this.state.cart.forEach(item => {
    //   const singleItem = { ...item };
    //   singleItem.sold = true;
    //   tempProducts = [...tempProducts, singleItem];
    // });

    this.setState({ products: tempProducts }, () => {
      localStorage.setItem("products", JSON.stringify(this.state.products));
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          updateSold: this.updateSold
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
