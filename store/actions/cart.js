export const ADD_TO_CART = "ADD_TO_CART";
export const RM_FR_CART = "RM_FRM_CART";

export const rmFrmCart = (productId) => {
  return { type: RM_FR_CART, pid: productId };
};

export const addToCart = (product) => {
  return { type: ADD_TO_CART, product: product };
};
