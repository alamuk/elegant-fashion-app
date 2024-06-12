import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./shop.styles.scss";
import Category from "../category/Category";
import CategoriesPreview from "../categorires-preview/CategoriesPreview";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  // const getCategoriesMap = () => {
  // const categoriesArray = await getCategoriesAndDocuments("caregories");
  // console.log(categoriesArray);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
