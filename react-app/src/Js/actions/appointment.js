import {
    GET_APPOINTMENTS,
    GET_ONE_APPOINTMENT,
    ADD_APPOINTMENT,
    UPDATE_APPOINTMENT,
} from "../actionTypes/appointment";
import axios from "axios";

export const AddAppointment = (id ,appointment) => async (dispatch) => {
    try{
        let res = await axios.post(`http://localhost:8080/Appointments/${id}`, appointment);
        dispatch({type: ADD_APPOINTMENT, payload: res.data.appointment});
    } catch (error){
        console.log(error);
    }
};
export const GetAppointments = (id) => async (dispatch) =>{
    try{
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.get(`http://localhost:8080/Appointments/getAll/${id}`, config)
        dispatch({ type: GET_APPOINTMENTS, payload: res.data.appointments })
    }
    catch(error) {
        console.log(error);
    }
}
export const DeleteAppointment = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        await axios.delete(`http://localhost:8080/Appointments/delete/${id}`, config);
        dispatch(GetAppointments());
    } catch (error) {
        console.log(error);
    }
};
export const getOneAppointment = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.get(`http://localhost:8080/Appointments/${id}`, config);
        dispatch({ type: GET_ONE_APPOINTMENT, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};
export const UpdateAppointment = (id, appointment) => async (dispatch) => {
    try{
        let res = await axios.put(`http://localhost:8080/Appointments/${id}`, appointment);
        dispatch({type: UPDATE_APPOINTMENT, payload: res.data.appointment});
    } catch (error){
        console.log(error);
    }
};
