import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (e) => {
    //Add to basket
    dispatch({
      type: "Add_To_Basket",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        {/* title */}
        <p>{title}</p>
        {/* Price */}
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* Rating */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <StarIcon />;
            })}
        </div>
      </div>
      {/* Image */}
      <div className="product__specs">
        <img className="product__image" src={image} alt="" />
        <button onClick={addToBasket} className="product__button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
