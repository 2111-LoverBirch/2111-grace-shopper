import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import superheroes from "./superheroes";
import cart from "./cart";
import singleSuperHero from "./singleSuperhero";
import users from "./users"
import orders from "./orders"
import order from "./order"

const reducer = combineReducers({ auth, superheroes, singleSuperHero, cart, users, orders, order });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
