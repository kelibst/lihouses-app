import CartItem from "../../models/card-item";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totolAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("item added to cart");
      const addedProduct = action.product;

      if (state?.items[addedProduct.id]) {
        currentCardItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          addedProduct?.price,
          addedProduct?.price,
          addedProduct?.title,
          state.items[addedProduct.id].sum + addedProduct?.price
        );
      } else {
        currentCardItem = new CartItem(
          1,
          addedProduct?.price,
          addedProduct?.title,
          addedProduct?.price
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: currentCardItem },
        totolAmount: state.totolAmount + addedProduct?.price,
      };
  }
  return state;
};
