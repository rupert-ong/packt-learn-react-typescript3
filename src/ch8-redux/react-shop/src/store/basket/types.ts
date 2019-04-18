import { IProduct } from "../../ProductsData";

export enum BasketActionTypes {
  ADD = "BASKET/ADD"
}

export interface IBasketState {
  products: IProduct[];
}

export interface IBasketAddAction {
  type: BasketActionTypes.ADD;
  product: IProduct;
}

export type BasketActions = IBasketAddAction;
