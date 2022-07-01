import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, quantity, imageUrl, price } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearHandler = () => clearItemFromCart(cartItem);
  const addHandler = () => addItemToCart(cartItem);
  const removeHandler = () => removeItemFromCart(cartItem);
  return (
    <div key={id} className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <span className="remove-button" onClick={clearHandler}>
        &chi;
      </span>
    </div>
  );
};

export default CheckoutItem;
