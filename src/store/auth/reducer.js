import { userInitialState } from "./initial-state";
import { USER_LOGIN, USER_LOGOUT } from "./types";

export const userReducer= (state=userInitialState,action)=>{

    if(action.type==USER_LOGIN){
        return { ...state, isUserLogin: true, user: action.payload};

    }else if(action.type==USER_LOGOUT){
        return {...state,isUserLogin: false, user: {} };
    }
    return state
    
}