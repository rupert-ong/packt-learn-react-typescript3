import * as React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "./ProductsData";
import withLoader from "./hocs/withLoader";

interface IProps {
  products?: IProduct[] | null;
  search: string;
}

const ProductsList: React.FunctionComponent<IProps> = props => {
  const { products, search } = props;
  if (!products) {
    return null;
  }
  return (
    <ul className="product-list">
      {products.map(product => {
        if (
          !search ||
          product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
        ) {
          return (
            <li key={product.id} className="product-list-item">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default withLoader(ProductsList);
