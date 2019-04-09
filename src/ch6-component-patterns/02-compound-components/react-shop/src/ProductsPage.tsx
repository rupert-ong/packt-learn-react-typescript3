import * as React from "react";
import "url-search-params-polyfill";

import { IProduct, products } from "./ProductsData";
import { RouteComponentProps, Link } from "react-router-dom";

interface IState {
  products: IProduct[];
  search: string;
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
    search: ""
  };

  public componentDidMount() {
    this.setState({ products });
  }

  public render() {
    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools for ReactJS!
        </p>
        <ul className="product-list">
          {this.state.products.map(product => {
            if (
              !this.state.search ||
              product.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) > -1
            ) {
              return (
                <li key={product.id} className="product-list-item">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default ProductsPage;
