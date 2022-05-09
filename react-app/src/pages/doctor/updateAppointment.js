import DatePicker from 'react-datetime';
import moment from 'moment'
import React,  {useState} from "react";
import  {getOneAppointment , UpdateAppointment }  from "../../Js/actions/appointment";
import  {useParams}   from "react-router-dom";
import {useDispatch , useSelector} from "react-redux"
import { useEffect } from 'react';
import appointmentReducer from "../../Js/reducer/appointment";
import { createHashHistory } from "history";



function Update (){
    const {id} = useParams();
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState(false);
    const history = createHashHistory();
    
    useEffect(() => {
        dispatch(getOneAppointment(id));
    },[]);
    
    const app = useSelector((state) => state.appointmentReducer.appointment);
    
    
    const [Appointment , setAppointment] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Phone: "",
        StartDate: "",
        EndDate: "",
    })

   
        React.useEffect(() => {
           
            setAppointment({
                Firstname:app.appointment && app.appointment.Firstname,
                Lastname:app.appointment && app.appointment.Lastname,
                Email:app.appointment && app.appointment.Email,
                Phone:app.appointment && app.appointment.Phone,
                StartDate:app.appointment &&  app.appointment.StartDate,
                EndDate:app.appointment && app.appointment.StartDate,
            });
            
        },[app.appointment])
        
         
    
    
    //console.log(Appointment)
    const handleFirstnameChange =(e)=>{
        setAppointment({
            ...Appointment,
            Firstname: e.target.value
        });
      }
    const handleLastnameChange =(e)=>{
        setAppointment({
            ...Appointment,
            Lastname: e.target.value
        });
      }
      const handleEmailChange =(e)=>{
        setAppointment({
            ...Appointment,
            Email: e.target.value
        });
      }
      const handlePhoneChange =(e)=>{
        setAppointment({
            ...Appointment,
            Phone: e.target.value
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
      


    //if (!app.appointment || app.appointment == undefined) return null;
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

                                <input className="form-control" type="text" value={Appointment.Firstname}  onChange={(e) =>{handleFirstnameChange(e)} } />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Last Name <span className="text-danger">*</span></label>
                                <input className="form-control" value={Appointment.Lastname} type="text" onChange={(e) =>{handleLastnameChange(e)} } />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Email <span className="text-danger">*</span></label>
                            <input className="form-control" value={Appointment.Email} type="email" onChange={(e) =>{handleEmailChange(e)} } />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Phone <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" value={Appointment.Phone} onChange={(e) =>{handlePhoneChange(e)} } />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>Start date <span className="text-danger">*</span></label>
                            <DatePicker 
                                //dateFormat="DD-MM-YYYY"
                                //timeFormat="hh:mm A"
                                //placeholderText="Start Date" 
                               // initialValue={Appointment.StartDate}
                                //selected={Appointment.StartDate }
                               // onChange={handlestartChange }
                             />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label>End date <span className="text-danger">*</span></label>
                            <DatePicker 
                                //dateFormat="DD-MM-YYYY"
                                //timeFormat="hh:mm A"
                                //placeholderText="End Date" 
                               // initialValue={Appointment.EndDate}
                               // selected={Appointment.EndDate}
                               // onChange={handleendChange }
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