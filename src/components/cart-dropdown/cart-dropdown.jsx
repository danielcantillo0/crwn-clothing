import Button from "../button/button";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
