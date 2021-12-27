import CartItem from "../../models/card-item";
import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  items: {},
  totolAmount: 0,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price,
            const prodTitle = addedProduct.title

            let currentCardItem;
            if (state?.items[addedProduct.id]) {
                 currentCardItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
            } else {
                currentCardItem = new CartItem(1, prodPrice, prodTitle, prodPrice)
              
            }  
            return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: currentCardItem},
                    totolAmount: state.totolAmount+ prodPrice
                }
    }
  return state;
};
