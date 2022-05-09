import {
    
    GET_ONE_USER,
    
} from"../actionTypes/user";
 const initialState = {
     user: [],
     errors: [],
     show: false,
 }
 
 const userReducer = (state = initialState, {type, payload}) => {
     switch (type) {
         case GET_ONE_USER:
            return { ...state, appointment: payload};
        default:
            return state;
     }
 };
 export default userReducer;