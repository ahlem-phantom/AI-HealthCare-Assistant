import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-datetime/css/react-datetime.css';
import "../../App.css"
import {useDispatch , useSelector} from "react-redux"
import {  GetAppointments } from "../../Js/actions/appointment";
import { useEffect } from 'react';
import { createHashHistory } from "history";
import AuthService from "../../services/auth.service";





// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer




    

function Calendrier() {
    const currentUser = AuthService.getCurrentUser();
    const dispatch = useDispatch();
    
    const appointments = useSelector((state) => state.appointmentReducer.appointment);
    useEffect(() => {
        dispatch(GetAppointments(currentUser.id));
    })   

    
    const history = createHashHistory();

    

      const apps = () => {
        appointments.map((app) => {
            app.StartDate = moment(app.StartDate).toDate();
            app.EndDate = moment(app.EndDate).toDate();
          });
          return appointments;
      }
     

    return(
    <section >
            <div style={{textAlign:'center'}}>       
                <h1 style={{ color: '#0464B3' ,fontSize: '30px'}}>Calendrier des rendez-vous</h1>
                <br/><br/><br/>
            </div>         
        <Calendar
            localizer={localizer}
            
            events={apps()}
            startAccessor= "StartDate"
            endAccessor="EndDate"
            titleAccessor="Firstname"
            defaultView='day'
            style={{ height: 500, margin: "50px", borderTopColor:'black' }}
            />
            <br/><br/><br/>
    </section>);
}
export default Calendrier;