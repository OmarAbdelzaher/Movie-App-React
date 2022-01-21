import { createStore,applyMiddleware} from "redux";
import reducers from "./reducers/combineReducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

//redux dev tool

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;
