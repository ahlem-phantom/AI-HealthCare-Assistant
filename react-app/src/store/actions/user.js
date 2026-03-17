import {
    GET_ONE_USER
} from "../action-types/user";
import axios from "axios";
import API_BASE_URL from "../../api-config";
export const getOneUser = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.get(`${API_BASE_URL}/users/user/${id}`, config);
        dispatch({ type: GET_ONE_USER, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};