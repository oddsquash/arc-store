import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from "./context";

import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
          </Switch>
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;