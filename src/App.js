import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Contact from './components/Contact';
import Details from './components/Details';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import ReviewsPage from './components/reviews/ReviewsPage';
import ScrollToTop from './components/Scroll';
import Shop from './components/Shop';
import { ProductConsumer, ProductProvider } from './context';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  componentWillUnmount() {
    window.sessionStorage.removeItem('state');
  }
  
  render() {
    const { isLoading } = this.state;

    // const numbers = document.querySelectorAll('#logo path')
    // console.log(numbers)
    // for (let i = 0; i<numbers.length; i++) {
    //   console.log(`${i} = ${numbers[i].getTotalLength()}`)
    // }

    console.log()
    return (
      <ProductProvider>
        <ProductConsumer>
          {(value) => {
            const { darkMode, toggleDarkMode } = value;
            return (
              <div className={darkMode ? "dark-mode" : "light-mode"}>
                <Router>
                  <ScrollToTop>
                    {isLoading && <Loading />}
                    <Navbar
                      darkMode={darkMode}
                      toggleDarkMode={toggleDarkMode}
                    />
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
}
