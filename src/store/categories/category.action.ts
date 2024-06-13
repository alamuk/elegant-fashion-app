import {
  CreateAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPE, Category } from './category.types';

//
export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFail = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL,
  Error
>;

//
export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart => CreateAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START),
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    CreateAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray),
);

export const fetchCategoriesFail = withMatcher(
  (error: Error): FetchCategoriesFail =>
    CreateAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAIL, error),
);
