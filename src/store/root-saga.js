import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

// generator function *
// yield key bring the value of value = it runs the code
//  it is use for multiple execution from the function
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
