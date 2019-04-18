import { IProduct } from "../../ProductsData";

/*
  With types, define and export
  1) type constants (as enum)
  2) action (object) interfaces
  3) (generic) type: union of all action interfaces listed
  4) state interface
*/
export enum ProductsActionTypes {
  GETALL = "PRODUCTS/GETALL",
  GETSINGLE = "PRODUCTS/GETSINGLE",
  LOADING = "PRODUCTS/LOADING"
}

export interface IProductsGetAllAction {
  type: ProductsActionTypes.GETALL;
  products: IProduct[] | null;
}

export interface IProductsGetSingleAction {
  type: ProductsActionTypes.GETSINGLE;
  product: IProduct;
}

export interface IProductsLoadingAction {
  type: ProductsActionTypes.LOADING;
}

export type ProductsActions =
  | IProductsGetAllAction
  | IProductsGetSingleAction
  | IProductsLoadingAction;

export interface IProductsState {
  readonly currentProduct: IProduct | null;
  readonly products: IProduct[] | null;
  readonly productsLoading: boolean;
}
