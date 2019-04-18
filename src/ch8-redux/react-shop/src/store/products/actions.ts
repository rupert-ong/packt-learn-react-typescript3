import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import {
  getProducts as getProductsFromAPI,
  getProduct as getProductFromAPI
} from "../../ProductsData";

import {
  IProductsGetAllAction,
  IProductsLoadingAction,
  IProductsState,
  ProductsActionTypes,
  IProductsGetSingleAction
} from "./types";

// Regular Action Creators
const loading: ActionCreator<IProductsLoadingAction> = () => ({
  type: ProductsActionTypes.LOADING
});

// Thunk Action Creators
// ActionCreator's ThunkAction type declaration has 4 generic parameters:
// 1) Promise<AnyAction>, would ideally be Promise<IProductsGetAllAction>, but TS struggles with this currently
// 2) State interface we wish to interact with
// 3) Any parameters we wish to pass into the action creator (null here)
// 4) The type of action
export const getProducts: ActionCreator<
  ThunkAction<Promise<AnyAction>, IProductsState, null, IProductsGetAllAction>
> = () => {
  // Asynchronous actions need to return an asynchronous function that will eventually dispatch our action:
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const products = await getProductsFromAPI();
    return dispatch({
      type: ProductsActionTypes.GETALL,
      products
    });
  };
};

export const getProduct: ActionCreator<
  ThunkAction<
    Promise<AnyAction>,
    IProductsState,
    null,
    IProductsGetSingleAction
  >
> = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(loading());
    const product = await getProductFromAPI(id);
    return dispatch({
      type: ProductsActionTypes.GETSINGLE,
      product
    });
  };
};
