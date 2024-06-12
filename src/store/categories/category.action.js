import { CreateAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./category.type";

// export const setCategories = (categoriesArray) =>
//   CreateAction(
//     CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
//     categoriesArray,
//   );

export const fetchCategoriesStart = () =>
  CreateAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  CreateAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray,
  );

export const fetchCategoriesFail = (error) =>
  CreateAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL, error);
//
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocuments("caregories");
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFail(error));
//   }
// };
