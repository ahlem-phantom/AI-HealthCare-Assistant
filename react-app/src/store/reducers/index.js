import { combineReducers } from "redux";
import appointmentReducer from "./appointment.js";
import userReducer from "./user.js";
import chatappReducer from "./chatapp"
const rootReducer = combineReducers({
    appointmentReducer,
    userReducer,
    chatappReducer
    
});
export default rootReducer;
