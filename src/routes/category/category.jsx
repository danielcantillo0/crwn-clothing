import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import Pcard from "../../components/pcard/pcard";

import { ProductContext } from "../../contexts/product.context";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { productsMap } = useContext(ProductContext);
  const [products, setProducts] = useState(productsMap[category]);

  useEffect(() => {
    setProducts(productsMap[category]);
  }, [category, productsMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <Pcard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
