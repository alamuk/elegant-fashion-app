import { CategoryItem } from '../categories/category.types';

import { CART_ACTION_TYPE, CartItem } from './cart.type';
import {
  CreateAction,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

// ///
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// check if quantity is equal to 1, if it is - remove that item from the cart
const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem,
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );
  // return back cart items with matching cart item with reduced quantity
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
////
export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPE.SET_CART_ITEMS, CartItem[]>;

// ////
const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

// ////  helper functions:
export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    CreateAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean),
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    CreateAction(CART_ACTION_TYPE.SET_CART_ITEMS, cartItems),
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
