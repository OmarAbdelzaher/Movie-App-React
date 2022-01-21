import { createStore,applyMiddleware} from "redux";
import reducers from "./reducers/combineReducers";
import thunk from "redux-thunk";

//redux dev tool
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

export default store;
