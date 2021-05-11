export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
    // &&
    // cartItem.color === cartItemToAdd.color &&
    // cartItem.size === cartItemToAdd.size
  );

  if (existingCartItem) {
    if (existingCartItem.quantity < cartItemToAdd.stock) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + cartItemToAdd.quantity,
            }
          : cartItem
      );
    }
    if (existingCartItem.quantity >= cartItemToAdd.stock) {
      return [...cartItems];
    }
  }
  return [...cartItems, cartItemToAdd];
};

export const addOneItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
    // &&
    // cartItem.color === cartItemToAdd.color &&
    // cartItem.size === cartItemToAdd.size
  );

  if (existingCartItem) {
    if (existingCartItem.quantity < cartItemToAdd.stock) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    }
  }
  return [...cartItems];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
    // &&
    // cartItem.color === cartItemToRemove.color &&
    // cartItem.size === cartItemToRemove.size
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === existingCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
