import DatePicker from 'react-datetime';
import moment from 'moment'
import React,  {useState} from "react";
import  {getOneAppointment , UpdateAppointment }  from "../../Js/actions/appointment";
import  {useParams}   from "react-router-dom";
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from 'react';
import appointmentReducer from "../../Js/reducer/appointment";
import { createHashHistory } from "history";
import { date } from 'yup';



function Update (){
    const {id} = useParams();
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false);
    const history = createHashHistory();
    
    useEffect(() => {
        dispatch(getOneAppointment(id));
    },[]);
    
    const app = useSelector((state) => state.appointmentReducer.appointment);
    console.log("aa",app.appointment);
    
    const [Appointment , setAppointment] = useState({
        Title: "",
        StartDate: "",
        EndDate: "",
    })

   
    
        React.useEffect(() => {
            if (app.appointment) 
            setAppointment({
                Title: app.appointment.Title,
                StartDate: app.appointment.StartDate,
                EndDate: app.appointment.EndDate,
            });
            console.log("naluti", Appointment)
        },[app.appointment])
        if (!app.appointment || app.appointment == undefined){
                return null;
            }
         
    
    
    //console.log(Appointment)
    const handletitleChange =(e)=>{
        setAppointment({
            ...Appointment,
            Title: e.target.value
        });
      }
    const handlestartChange =(date)=>{
        setAppointment({
            ...Appointment,
            StartDate: moment(date).toDate()
        });
        console.log(moment(Appointment.StartDate).toDate())
      }
      const handleendChange =(date)=>{
        setAppointment({
            ...Appointment,
            EndDate:  moment(date).toDate()
        });
        console.log(moment(Appointment.EndDate).toDate())
      }
      


    if (!app.appointment || app.appointment == undefined) return null;
    return (

    <div className="content">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Edit Appointment</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>First Name <span className="text-danger">*</span></label>

                                <input className="form-control" type="text" value={Appointment.Title}  onChange={(e) =>{handletitleChange(e)} } />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Last Name</label>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Email <span className="text-danger">*</span></label>
                            <input className="form-control" type="email" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Phone </label>
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Start date </label>
                            <DatePicker 
                                dateFormat="DD-MM-YYYY"
                                timeFormat="hh:mm A"
                                placeholderText="Start Date" 
                                initialValue={moment(Appointment.StartDate).toDate()}
                                selected={Appointment.StartDate }
                                onChange={handlestartChange }
                             />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>End date </label>
                            <DatePicker 
                                dateFormat="DD-MM-YYYY"
                                timeFormat="hh:mm A"
                                placeholderText="End Date" 
                                initialValue={moment(Appointment.EndDate).toDate()}
                                selected={Appointment.EndDate}
                                onChange={handleendChange }
                             />
                            </div>
                        </div>
                    </div>
                    <div className="m-t-20 text-center">
                        <button className="btn btn-primary submit-btn" 
                        onClick={ () => {
                            dispatch(UpdateAppointment(app.appointment._id, Appointment));
                            history.go("/appointments");
                           }}>Save</button>
                    </div>
                </form>
            </div>
        </div>
        </div>

    );
}
export default Update;