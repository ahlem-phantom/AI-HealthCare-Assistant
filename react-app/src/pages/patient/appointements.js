import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import {useDispatch , useSelector} from "react-redux"
import  {GetAppointments }  from "../../Js/actions/appointment";
import dayjs from "dayjs";

function Appointements() {
  const currentUser = AuthService.getCurrentUser();
  //get appointments
  const dispatch = useDispatch();    
  const appointments = useSelector((state) => state.appointmentReducer.appointment);
  
  const displayAppointments = appointments && appointments.map((app) => {

    return ( 
                        <tr>
                          <td style={{minWidth: 200}}>
                            <a className="avatar" href="profile.html">B</a>
                            <h2><a href="profile.html">{app.Firstname} {app.Lastname} </a></h2>
                          </td>                 
                          <td>
                            <h5 className="time-title p-0">Appointment With</h5>
                            <p>Dr. {app.DoctorName}</p>
                          </td>
                          <td>
                            <h5 className="time-title p-0">Timing</h5>
                            <p>{dayjs(app.StartDate).format("YYYY/MM/DD hh:mm")}</p>
                          </td>
                          <td className="text-right">
                            <a href="appointments.html" className="btn btn-outline-primary take-btn">Take up</a>
                          </td>
                        </tr>

    )
  })
      
       useEffect(() => {
        dispatch(GetAppointments(currentUser.id));
        })
    return (
      <div className="main-wrapper">

      <div className="page-wrapper">
      <div className="content">
        
      <div className="row doctor-grid">
      <div className="col-md-4 col-sm-4  col-lg-12">
      </div>
    
    </div>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-inline-block">Upcoming Appointments</h4> <a href="appointments.html" className="btn btn-primary float-right">View all</a>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="d-none">
                      <tr>
                        <th>Patient Name</th>
                        <th>Doctor Name</th>
                        <th>Timing</th>
                        <th className="text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {displayAppointments}                
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
    </div>
    </div>
    </div>
    </div>

    );
}

export default Appointements;