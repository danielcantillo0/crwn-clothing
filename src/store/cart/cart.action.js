import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, itemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

export const setCartItems = (cartItems) => {
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
};

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItem = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const newCartItem = removeCartItem(cartItems, itemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
};

export const clearItemFromCart = (cartItems, itemToDelete) => {
  const newCartItem = deleteCartItem(cartItems, itemToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
};
