import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const ProductContext = createContext({
  productsMap: {},
});

export const ProductProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProductsMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { productsMap };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
