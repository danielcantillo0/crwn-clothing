import { useContext } from "react";

import { ReactComponent as ShoppinIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppinIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
