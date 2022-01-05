import { combineReducers } from 'redux';
import favoritesReducer from "./FavoritesReducer";
const reducers = combineReducers({
    favorites: favoritesReducer
});
export default reducers;