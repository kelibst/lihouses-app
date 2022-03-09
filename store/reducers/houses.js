import Data from "../../DataFile";
import House from "../../models/house";
import { ADD_HSE } from "../actions/houses";

const initialState = {
  availableHouses: Data,
  userHouses: Data.filter((hse) => hse.id === 2),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HSE:
      const newHse = new House(
        2,
        action.product.title,
        action.product.description,
        action.product.product_img,
        action.product.price
      );

      return {
        ...state,
        availableHouses: [...state.availableHouses, newHse],
        userHouses: [...state.userHouses, newHse],
      };
  }
  return state;
};
