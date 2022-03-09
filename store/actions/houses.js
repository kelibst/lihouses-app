export const ADD_HSE = "ADD_HSE";
export const RM_HSE = "RM_HSE";

export const addHouse = (product) => {
  return { type: ADD_HSE, product: product };
};

export const rmHouse = (product_Id) => {
  return { type: RM_HSE, product_id: product_Id };
};
