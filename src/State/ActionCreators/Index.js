
import { ActionTypes } from '../ActionTypes/Index';

export const addFavorite = (favorite) =>{
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ADD_FAVORITE,
            payload: favorite
        })
    }
}

export const removeFavorite = (favorite) =>{
    return (dispatch) => {
        dispatch({
            type: ActionTypes.REMOVE_FAVORITE,
            payload: favorite
        })
    }
}

export const setFavorites = (favorites) =>{
    return (dispatch) => {
        dispatch({
            type: ActionTypes.SET_FAVORITES,
            payload: favorites
        })
    }
}