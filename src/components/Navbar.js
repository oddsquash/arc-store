import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light nav-font">
      //   <Link to="/">
      //     <img src={logo} id="logo" alt="logo" />
      //   </Link>
      //   <div className="nav-align">
      //     <ul className="nav navbar-nav">
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link">
      //           [ Shop ]
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/contact" className="nav-link">
      //           [ Contact Us ]
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      //   {/* <Link to="/cart" className="ml-auto">
      //       <div className="btn btn-outline-secondary btn-sm pt-2">
      //         <i className="fas fa-shopping-cart mr-2" />
      //         <span>Cart</span>
      //       </div>
      //     </Link> */}
      // </nav>
      <div className="container">
        <ul id="nav" className="nav-font">
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
        </ul>
      </div>
    );
  }
}
