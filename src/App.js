import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider, ProductConsumer } from "./context";

import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ReviewsPage from './components/reviews/ReviewsPage';
import Contact from "./components/Contact";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details";
import ScrollToTop from "./components/Scroll";
import Modal from "./components/Modal";

function App() {
  return (
    <ProductProvider>
      <ProductConsumer>
        {value => {
          const { darkMode, toggleDarkMode } = value;
          return (
            <div className={darkMode ? "dark-mode" : "light-mode"}>
              <Router>
                <ScrollToTop>
                  <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                  <div className="content">
                    <Switch>
                      <Route path="/" exact component={Shop} />
                      <Route path="/reviews" component={ReviewsPage} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/cart" component={Cart} />
                      <Route path="/details" component={Details} />
                    </Switch>
                  </div>
                  <Modal />
                </ScrollToTop>
              </Router>
            </div>
          );
        }}
      </ProductConsumer>
    </ProductProvider>
  );
}

export default App;
