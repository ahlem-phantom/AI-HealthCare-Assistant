import {
    SEND_MESSAGE,
    GET_TALKS,
    DELETE_TALKS
} from"../actionTypes/chatapp";
const initialState = {
    chattalks: [],
    errors: [],
    show: false,
}
const chatappReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SEND_MESSAGE:
           return { ...state, chattalks: payload};
        case GET_TALKS:
           return { ...state, talks: payload};
        case DELETE_TALKS:
            return { ...state, talks: payload};
       default:
           return state;
    }
};
export default chatappReducer;