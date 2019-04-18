import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import "url-search-params-polyfill";

import { IApplicationState } from "./store";
import { getProducts } from "./store/products/actions";

import { IProduct } from "./ProductsData";
import ProductsList from "./ProductsList";
import { bindActionCreators } from "redux";

interface IProps extends RouteComponentProps {
  getProducts: typeof getProducts;
  loading: boolean;
  products: IProduct[] | null;
}

class ProductsPage extends React.Component<IProps> {
  public componentDidMount() {
    this.props.getProducts();
  }

  public render() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const search = searchParams.get("search") || "";
    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools for ReactJS!
        </p>
        <ProductsList
          loading={this.props.loading}
          products={this.props.products}
          search={search}
        />
      </div>
    );
  }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    loading: store.products.productsLoading,
    products: store.products.products
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getProducts: bindActionCreators(getProducts, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
