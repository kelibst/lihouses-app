import Data from "../../DataFile";

const initialState = {
  availableHouse: Data,
  userHouse: Data.filter((hse) => hse.id === 2),
};

export default (state = initialState, action) => {
  return state;
};
