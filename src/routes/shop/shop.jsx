import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import Preview from "../preview/preview";
import Category from "../category/category";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<Preview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
