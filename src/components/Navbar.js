import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <ProductConsumer>
          {value => {
            return (
              <ul id="nav" className="nav-font dark-mode-text">
                <li>
                  <Link to="/">
                    <img src={logo} id="logo" alt="logo" />
                  </Link>
                </li>
                <li>
                  <Link className="nav-text" to="/">
                    [ Shop ]
                  </Link>
                </li>
                <li>
                  <Link className="nav-text" to="/contact">
                    [ Contact Us ]
                  </Link>
                </li>
                <li>
                  <Link className="nav-text" to="/cart">
                    <i className="fas fa-shopping-cart mr-2" />
                  </Link>
                </li>
                <li>
                  <div
                    className="nav-text"
                    onClick={() => this.props.toggleDarkMode()}
                  >
                    <i className="fas fa-lightbulb" />
                  </div>
                </li>
              </ul>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
