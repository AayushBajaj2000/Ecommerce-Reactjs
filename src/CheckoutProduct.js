import React from "react";
import "./Checkout.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ item }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_Basket",
      id: item.id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__imageContainer">
        <img className="checkoutProduct__image" src={item.image} alt="" />
      </div>
      <div className="checkout__info">
        <h3 className="product__title">{item.title}</h3>
        <h3 className="product__price">
          <small>$</small>
          {item.price}
        </h3>
        <div className="product__rating">
          {Array(item.rating)
            .fill()
            .map((_) => {
              return <StarIcon />;
            })}
        </div>
        <button onClick={removeFromBasket} className="product__remove">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
