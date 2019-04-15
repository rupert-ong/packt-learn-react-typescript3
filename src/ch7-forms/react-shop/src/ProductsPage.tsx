import * as React from "react";
import "url-search-params-polyfill";

import { IProduct, getProducts } from "./ProductsData";
import { RouteComponentProps, Link } from "react-router-dom";
import ProductsList from "./ProductsList";

interface IState {
  products: IProduct[] | null;
  search: string;
  loading: boolean;
}

class ProductsPage extends React.Component<RouteComponentProps, IState> {
  public static getDerivedStateFromProps(
    props: RouteComponentProps,
    state: IState
  ) {
    const searchParams = new URLSearchParams(props.location.search);
    const search = searchParams.get("search") || "";
    return {
      ...state,
      search
    };
  }

  public readonly state: IState = {
    products: [],
    search: "",
    loading: true
  };

  public async componentDidMount() {
    const products = await getProducts();
    this.setState({ products, loading: false });
  }

  public render() {
    const { loading, products, search } = this.state;
    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools for ReactJS!
        </p>
        <ProductsList loading={loading} products={products} search={search} />
      </div>
    );
  }
}

export default ProductsPage;
