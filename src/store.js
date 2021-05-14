import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const filterProductsByStatusItems = localStorage.getItem("filterProductsByStatusItems")
  ? JSON.parse(localStorage.getItem("filterProductsByStatusItems"))
  : [];
const initState = { filterProductsByStatus: { items: filterProductsByStatusItems } };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
