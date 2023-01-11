import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
  cartItems: CartItem[],
  itemToRemove: CartItem
): CartItem[] => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingCartItems && existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

export type SetIscartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
  }
);

export const setIsCartOpen = withMatcher((bool: boolean): SetIscartOpen => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
});

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItem = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItem);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  itemToRemove: CartItem
) => {
  const newCartItem = removeCartItem(cartItems, itemToRemove);
  return setCartItems(newCartItem);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  itemToDelete: CartItem
) => {
  const newCartItem = deleteCartItem(cartItems, itemToDelete);
  return setCartItems(newCartItem);
};
