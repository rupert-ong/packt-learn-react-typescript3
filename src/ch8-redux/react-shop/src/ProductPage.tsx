import * as React from "react";
import { connect } from "react-redux";
import { Prompt, RouteComponentProps } from "react-router-dom";

import { getProduct } from "./store/products/actions";
import { addToBasket } from "./store/basket/actions";
import { IApplicationState } from "./store";
import Product from "./Product";
import { IProduct } from "./ProductsData";
import { bindActionCreators } from "redux";

// The key part here is that we are going to use the RouteComponentProps type to access the id parameter in the path.
// Let's define the props type alias for our ProductPage component using the RouteComponentProps generic type and passing
// in a type with an id property
interface IProps extends RouteComponentProps<{ id: string }> {
  addToBasket: typeof addToBasket;
  getProduct: typeof getProduct;
  loading: boolean;
  product?: IProduct;
  added: boolean;
}

class ProductPage extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      this.props.getProduct(id);
    }
  }

  public render() {
    const product = this.props.product;
    return (
      <div className="page-container">
        <Prompt when={!this.props.added} message={this.navAwayMessage} />
        {product || this.props.loading ? (
          <Product
            loading={this.props.loading}
            product={product}
            inBasket={this.props.added}
            onAddToBasket={this.handleAddClick}
          />
        ) : (
          <p>Product not found!</p>
        )}
      </div>
    );
  }

  private navAwayMessage = () =>
    "Are you sure you leave without buying this product?";

  private handleAddClick = () => {
    if (this.props.product) {
      this.props.addToBasket(this.props.product);
    }
  };
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    basketProducts: store.basket.products,
    loading: store.products.productsLoading,
    product: store.products.currentProduct || undefined,
    // check whether the current product in the store is in the basket state in order to set this boolean value
    added: store.basket.products.some(p =>
      store.products.currentProduct
        ? p.id === store.products.currentProduct.id
        : false
    )
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToBasket: (product: IProduct) => dispatch(addToBasket(product)),
    getProduct: (id: number) => dispatch(getProduct(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
