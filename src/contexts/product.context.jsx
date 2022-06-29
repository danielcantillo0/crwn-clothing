import { createContext, useState } from "react";

import PRODUCTS from "../shop.data.json";

export const ProductContext = createContext({
  currentProduct: [],
});

export const ProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState(PRODUCTS);
  const value = { currentProduct };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
