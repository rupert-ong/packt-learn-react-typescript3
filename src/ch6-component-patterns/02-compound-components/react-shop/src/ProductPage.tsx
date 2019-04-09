import * as React from "react";
import { Prompt, RouteComponentProps } from "react-router-dom";
import { IProduct, products } from "./ProductsData";
import Product from "./Product";

// The key part here is that we are going to use the RouteComponentProps type to access the id parameter in the path.
// Let's define the props type alias for our ProductPage component using the RouteComponentProps generic type and passing
// in a type with an id property
type Props = RouteComponentProps<{ id: string }>;

interface IState {
  product?: IProduct;
  added: boolean;
}

class ProductPage extends React.Component<Props, IState> {
  public readonly state: IState = {
    added: false
  };

  public componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      const product = products.filter(p => p.id === id)[0];
      this.setState({ product });
    }
  }

  public render() {
    const product = this.state.product;
    return (
      <div className="page-container">
        <Prompt when={!this.state.added} message={this.navAwayMessage} />
        {product ? (
          <Product
            product={product}
            inBasket={this.state.added}
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
    this.setState({ added: true });
  };
}
export default ProductPage;
