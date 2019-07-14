import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light nav-font">
          <Link to="/">
            <img src={logo} id="logo" alt="logo" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5 ml-sm-auto">
              <Link to="/" className="nav-link">
                [ Shop ]
              </Link>
            </li>
            <li className="nav-item ml-5 ml-sm-auto">
              <Link to="/contact" className="nav-link">
                [ Contact Us ]
              </Link>
            </li>
          </ul>
          {/* <Link to="/cart" className="ml-auto">
            <div className="btn btn-outline-secondary btn-sm pt-2">
              <i className="fas fa-shopping-cart mr-2" />
              <span>Cart</span>
            </div>
          </Link> */}
        </nav>
      </div>
    );
  }
}
