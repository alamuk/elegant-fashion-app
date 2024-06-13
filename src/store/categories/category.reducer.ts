import { Category } from './category.types';
import { AnyAction } from 'redux';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFail,
} from './category.action';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INTIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INTIAL_STATE,
  action: AnyAction,
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    };
  }
  if (fetchCategoriesFail.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }
  return state;
};

/////////////////////////
// switch (action.type) {
//   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
//     return {
//       ...state,
//       isLoading: true,
//     };
//   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
//     return {
//       ...state,
//       categories: action.payload,
//       isLoading: false,
//     };
//   case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL:
//     return {
//       ...state,
//       error: action.payload,
//       isLoading: false,
//     };
//
//   default:
//     return state;
// }
