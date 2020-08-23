import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Home />
          </Route>
          <Route exact path="/login">
            <h1>login here please</h1>
          </Route>
          <Route exact path="/checkout">
            <Nav />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
