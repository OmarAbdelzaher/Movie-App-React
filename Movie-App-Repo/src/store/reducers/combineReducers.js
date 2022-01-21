import { combineReducers } from "redux";
import FavReducer from "./favoritesReducer";
import getMoviesReducer from "./getMoviesReducer";

export default combineReducers ({
    fav : FavReducer,
    movieList : getMoviesReducer,
})