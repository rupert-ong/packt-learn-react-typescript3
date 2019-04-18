import { Reducer } from "redux";
import { IBasketState, BasketActions, BasketActionTypes } from "./types";

const initialBasketState: IBasketState = {
  products: []
};

export const basketReducer: Reducer<IBasketState, BasketActions> = (
  state = initialBasketState,
  action
) => {
  switch (action.type) {
    case BasketActionTypes.ADD:
      return {
        ...state,
        products: state.products.concat(action.product)
      };
  }

  return state || initialBasketState;
};
