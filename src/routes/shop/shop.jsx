import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";

import Pcard from "../../components/pcard/pcard";
import "./shop.styles.scss";

const Shop = () => {
  const { currentProduct } = useContext(ProductContext);
  return (
    <div className="product-containers">
      {currentProduct.map((product) => {
        return (
          <div key={product.id}>
            <Pcard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
