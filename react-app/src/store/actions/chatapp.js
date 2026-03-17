import {
    GET_TALKS,
    SEND_MESSAGE,
    
} from "../action-types/chatapp";
import axios from "axios";
import API_BASE_URL from "../../api-config";
export const Send_Message = (message , id) => async (dispatch) => {
    try {
        console.log("msg:"+message.message+"\ntest:"+id+"\nlat:"+ message.Userlat+"\nlng:"+message.Userlng)
        let res = await axios.post(`${API_BASE_URL}/ChatApp/send/${id}`, message);
        dispatch({type: SEND_MESSAGE, payload: res.data.message});
    }catch (error) {
        console.log(error);
    }
}
export const GetTalks = (id) => async (dispatch) =>{
    try{
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.get(`${API_BASE_URL}/ChatApp/get/${id}`, config)
        dispatch({ type: GET_TALKS, payload: res.data.talks })
    }
    catch(error) {
        console.log(error);
    }
}
export const Delete_Talks = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        await axios.delete(`${API_BASE_URL}/ChatApp/delete/${id}`, config);
        dispatch(GetTalks());
    } catch (error) {
        console.log(error);
    }
};