import { combineReducers } from "redux";
import FavReducer from "./favoritesReducer";
import getMoviesReducer from "./getMoviesReducer";

export default combineReducers ({
    movieList: getMoviesReducer,
    fav: FavReducer,
});