import CartItem from "../../models/card-item";
import { ADD_TO_CART } from "../actions/cart";
import { RM_FR_CART } from "../actions/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      let currentCardItem;
      if (state?.items[addedProduct.id]) {
        currentCardItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          addedProduct?.price,
          addedProduct?.description,
          addedProduct?.product_img,
          addedProduct?.title,
          state.items[addedProduct.id].sum + addedProduct?.price
        );
      } else {
        currentCardItem = new CartItem(
          1,
          addedProduct?.price,
          addedProduct?.description,
          addedProduct?.product_img,
          addedProduct?.title,
          addedProduct?.price
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: currentCardItem },
        totalAmount: state.totalAmount + addedProduct?.price,
      };
    case RM_FR_CART:
      let updatedCartItems;
      const selectedItem = state.items[action.pid];
      const curQuty = selectedItem?.quantity;
      if (curQuty > 1) {
        const updatedCartItem = new CartItem(
          selectedItem?.quantity - 1,
          selectedItem?.productPrice,
          selectedItem?.proDes,
          selectedItem?.product_img,
          selectedItem?.productTitle,
          selectedItem?.sum - selectedItem?.productPrice
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state?.totalAmount - selectedItem?.productPrice,
      };
  }

  return state;
};
