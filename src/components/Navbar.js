import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo-filled.svg";
import { ProductConsumer } from "../context";

import { Button, Menu, MenuItem } from "@material-ui/core";

export default function Navbar(props) {
  const { toggleDarkMode } = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container">
      <ProductConsumer>
        {value => {
          return (
            <>
              {/* Begin Mobile Menu */}
              <div className="mobile-menu">
                <img src={logo} id="logo" alt="logo" />
                <div></div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  className='px-3 mt-2'
                >
                  Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/" className='link'>
                    <MenuItem style={{ color: 'black' }} onClick={handleClose}>Shop</MenuItem>
                  </Link>
                  <Link to="/reviews" className='link'>
                    <MenuItem style={{ color: 'black' }} onClick={handleClose}>Reviews</MenuItem>
                  </Link>
                  <Link to="/contact" className='link'>
                    <MenuItem style={{ color: 'black' }} onClick={handleClose}>Contact Us</MenuItem>
                  </Link>
                  <Link to="/cart" className='link'>
                    <MenuItem style={{ color: 'black' }} onClick={handleClose}>Cart</MenuItem>
                  </Link>
                </Menu>
              </div>
              {/* Begin larger menu */}
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
                  <Link className="nav-text" to="/reviews">
                    [ Reviews ]
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
                    onClick={() => toggleDarkMode()}
                  >
                    <i className="fas fa-lightbulb" />
                  </div>
                </li>
              </ul>
            </>
          );
        }}
      </ProductConsumer>
    </div>
  );
}
