import Data from "../../DataFile";

const initialState = {
  availableHouses: Data,
  userHouses: Data.filter((hse) => hse.id === 2),
};

export default (state = initialState, action) => {
  return state;
};
