import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Nav() {
  const [{ basket }] = useStateValue();

  return (
    <div className="nav">
      <Link to="/" className="link">
        <h3>Ecommerce</h3>
      </Link>
      <div className="nav__search">
        <input type="text" className="nav__search__input" />
        <SearchIcon className="nav__search__button" />
      </div>
      <div className="nav__options">
        <Link to="/login" className="link">
          <p>
            Hello
            <br />
            Sign In
          </p>
        </Link>
        <div className="vl"></div>
        <Link to="/" className="link">
          <p>
            Returns <br />
            and Orders
          </p>
        </Link>

        <div className="vl"></div>
        <Link to="/" className="link">
          <p>
            Your
            <br />
            Account
          </p>
        </Link>
        <div className="vl"></div>
        <Link to="/checkout" className="link">
          <ShoppingBasketIcon />
          <p style={{ marginLeft: "10px" }}>{basket?.length}</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
