import {
    GET_APPOINTMENTS,
    GET_ONE_APPOINTMENT,
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    UPDATE_APPOINTMENT,
    SEND_MESSAGE
} from"../actionTypes/appointment";
 const initialState = {
     appointment: [],
     errors: [],
     show: false,
 }
 
 const appointmentReducer = (state = initialState, {type, payload}) => {
     switch (type) {
         case GET_APPOINTMENTS:
            return { ...state, appointment: payload};
        case ADD_APPOINTMENT:
            return { ...state, appointment: payload};
        case DELETE_APPOINTMENT:
            return { ...state, appointment: payload};
        case GET_ONE_APPOINTMENT:
            return { ...state, appointment: payload};
        case UPDATE_APPOINTMENT:
            return { ...state, appointment: payload};
        default:
            return state;
     }
 };
 export default appointmentReducer;