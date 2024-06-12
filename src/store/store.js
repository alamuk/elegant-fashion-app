import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

// custom logger

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// creating saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// the logger will be used here only when we are in development not in production.
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
  // thunk,
].filter(Boolean);

// /// thunk concept
// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof (action === "function")) {
//     action();
//   }
// };

//////

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
