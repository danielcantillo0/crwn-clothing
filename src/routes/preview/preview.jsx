import { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";
import CategoryPreview from "../../components/category-preview/category-preview";

const Preview = () => {
  const { productsMap } = useContext(ProductContext);
  return (
    <>
      {Object.keys(productsMap).map((title) => {
        const products = productsMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default Preview;
