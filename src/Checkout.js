import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Divider from "@material-ui/core/Divider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_Manual_ORIGIN_1227406_1193412_CA_ca_ca_ce_hsy_gold_ilm_en_fr_ca_en_3149889_650x45_1X_en_CA._CB428359618_.jpg"
          alt=""
          className="checkout__advert"
        />

        <h1 className="checkout__heading">Shopping Cart</h1>
        {basket?.length === 0 ? (
          <div className="checkout__empty">
            <h1>Your shopping Cart is empty</h1>
            <p>
              You have no items in your basket.To buy one or more items, click
              "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            {/* List out all the Checkout products */}
            {basket?.map((item) => (
              <div>
                <Divider />
                <CheckoutProduct item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
