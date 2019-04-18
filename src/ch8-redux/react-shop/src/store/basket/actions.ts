import { IProduct } from "../../ProductsData";
import { IBasketAddAction, BasketActionTypes } from "./types";

export const addToBasket = (product: IProduct): IBasketAddAction => ({
  type: BasketActionTypes.ADD,
  product
});
