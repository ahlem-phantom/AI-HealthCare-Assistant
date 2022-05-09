import {
    GET_ONE_USER
} from "../actionTypes/user";
import axios from "axios";
export const getOneUser = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.get(`http://localhost:8080/users/user/${id}`, config);
        dispatch({ type: GET_ONE_USER, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};