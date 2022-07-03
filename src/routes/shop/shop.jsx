import { Routes, Route } from "react-router-dom";

import Preview from "../preview/preview";
import Category from "../category/category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<Preview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
