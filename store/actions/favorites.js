export const ADD_TO_FAV = "ADD_TO_FAVORITE";
export const RM_FR_FAV = "RM_FRM_FAVORITE";

export const rmFrmCart = (productId) => {
  return { type: RM_FR_FAV, pid: productId };
};

export const addToCart = (product) => {
  return { type: ADD_TO_FAV, product: product };
};
