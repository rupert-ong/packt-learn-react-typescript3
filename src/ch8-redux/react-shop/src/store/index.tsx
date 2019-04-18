import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./products/reducer";
import { IProductsState } from "./products/types";
import { basketReducer } from "./basket/reducer";
import { IBasketState } from "./basket/types";

export interface IApplicationState {
  products: IProductsState;
  basket: IBasketState;
}

const rootReducer = combineReducers<IApplicationState>({
  products: productsReducer,
  basket: basketReducer
});

export default function configureStore(): Store<IApplicationState> {
  // reducers, initialState (undefined because we're using reducers), middleware
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
