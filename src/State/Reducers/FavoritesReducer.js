import { ActionTypes } from '../ActionTypes/Index';
import {favorites} from "../../Components/Ui/Favorites";
const reducer = (state=[],action) =>{
    switch(action.type){

        case ActionTypes.ADD_FAVORITE:


            let exists= false;
            for(let i=0;i<state.length;i++)
                if (state[i].name===action.payload.name)
                    exists=true;
            if (exists!==true)
                return [...state,action.payload];
            return state;
        case ActionTypes.REMOVE_FAVORITE:
            let exist=false;
            for(let i=0;i<state.length;i++)
            if (state[i].name===action.payload.name)
                exist=true;
            if (exist===true)
                return state.filter(item => item.name !== action.payload.name);



        case ActionTypes.SET_FAVORITES:

            return action.payload? action.payload: [];
        default: return state;
    }
}

export default reducer;