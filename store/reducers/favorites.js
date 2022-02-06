import CartItem from "../../models/card-item";
import { ADD_TO_FAV } from "../actions/favorites";
import { RM_FR_FAV } from "../actions/favorites";

const initialState = {
  favorites: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      const addedProduct = action.product;
      let currentCardItem;

      currentCardItem = new CartItem(
        1,
        addedProduct?.price,
        addedProduct?.description,
        addedProduct?.product_img,
        addedProduct?.title,
        addedProduct?.price
      );
      return {
        ...state,
        favorites: { ...state.favorites, [addedProduct.id]: currentCardItem },
      };
    case RM_FR_FAV:
      let updatedCartItems;
      const selectedItem = state.favorites[action.pid];

      updatedCartItems = { ...state.favorites };
      delete updatedCartItems[action.pid];
      return {
        ...state,
        favorites: updatedCartItems,
      };
  }

  return state;
};
