import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { ProductCartContainer, Footer, Name, Price } from "./pcard.styles";

const Pcard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const addProduct = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProduct}>
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default Pcard;
