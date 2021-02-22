import "./App.css";
// import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage/ProductPage";

const App = () => {
  return (
    <Router>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/products/:productId" component={ProductPage} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
