import { Reducer } from "redux";
import { IProductsState, ProductsActionTypes, ProductsActions } from "./types";

const initialProductsState: IProductsState = {
  currentProduct: null,
  products: [],
  productsLoading: false
};

export const productsReducer: Reducer<IProductsState, ProductsActions> = (
  state = initialProductsState,
  action
) => {
  switch (action.type) {
    case ProductsActionTypes.LOADING:
      return {
        ...state,
        productsLoading: true
      };
    case ProductsActionTypes.GETSINGLE:
      return {
        ...state,
        currentProduct: action.product,
        productsLoading: false
      };
    case ProductsActionTypes.GETALL:
      return {
        ...state,
        products: action.products,
        productsLoading: false
      };
    default:
      return state;
  }
};
