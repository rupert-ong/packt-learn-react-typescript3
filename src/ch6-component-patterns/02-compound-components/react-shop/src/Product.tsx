import * as React from "react";
import Tabs from "./components/Tabs";
import { IProduct, IReview } from "./ProductsData";

interface IProps {
  product: IProduct;
  inBasket: boolean;
  onAddToBasket: () => void;
}
const Product: React.FunctionComponent<IProps> = props => {
  const { product, inBasket, onAddToBasket } = props;

  const handleAddClick = () => {
    onAddToBasket();
  };

  return (
    <>
      <h1>{product.name}</h1>
      <Tabs>
        <Tabs.Tab
          name="Description"
          initialActive={true}
          heading={() => <b>Description</b>}
        >
          <p>{product.description}</p>
        </Tabs.Tab>
        <Tabs.Tab name="Reviews" heading={() => "Reviews"}>
          <ul className="product-reviews">
            {product.reviews.map(review => (
              <li key={review.reviewer} className="product-reviews-item">
                <em>{review.comment}</em> - {review.reviewer}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      </Tabs>
      <p className="product-price">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency"
        }).format(product.price)}
      </p>
      {!inBasket && <button onClick={handleAddClick}>Add to basket</button>}
    </>
  );
};

export default Product;
