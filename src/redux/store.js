import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import pokemonReducer from "./reducers/pokemonReducer";

const intialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  pokemonList: pokemonReducer,
});

const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
