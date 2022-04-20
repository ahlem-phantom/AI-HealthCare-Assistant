import  {GetAppointments , DeleteAppointment, AddAppointment}  from "../../Js/actions/appointment";
import {useDispatch , useSelector} from "react-redux"
import { useEffect, useState } from 'react';
import UpdateAppointment from './updateAppointment'
import {Link} from "react-router-dom";
import { createHashHistory } from "history";
import { AiFillCloseCircle  } from 'react-icons/ai';
import $ from 'jquery';
import "../../assets/AddAppBox.scss";
import DatePicker from 'react-datetime';
import moment from 'moment'
import DatePicker2 from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const AddAppBox = $.noConflict();
    AddAppBox(() => {
        AddAppBox(".AddAppBox-open").click(()  =>
            AddAppBox(".AddAppBox-popup, .AddAppBox-close").fadeIn()
        );
        AddAppBox(".AddAppBox-close").click(() =>
            AddAppBox(".AddAppBox-popup, .AddAppBox-close").fadeOut()
        );
        AddAppBox(".AddAppBox-panel-close").click(() => {
            AddAppBox(".AddAppBox-panel").fadeOut();
            AddAppBox(".AddAppBox-open").fadeIn();
        });
        });

function Appointements (){
    //get appointments
    const dispatch = useDispatch();    
    const appointments = useSelector((state) => state.appointmentReducer.appointment);
    useEffect(() => {
        dispatch(GetAppointments());
    })   
    // delete appointment
    const handleClick = (id) => {
        let result = window.confirm("are you sure to delete that?");
        if (result) {
            dispatch(DeleteAppointment(id));
        }
    }
    // Add appointment
    const [submit, setSubmit] = useState(false);
    const [appointement , setAppointment] = useState({
        Title: "",
        StartDate: "",
        EndDate: "",
    })
    const history = createHashHistory();
    const handleConfirm = (e) => {
        console.log(appointement)
        e.preventDefault();
        setSubmit(true);
        dispatch(AddAppointment(appointement));
        history.go("/calendar");

    }   
    const handletitleChange =(e)=>{
        setAppointment({
            ...appointement,
            Title: e.target.value
        });
      }
      const handlestartChange =(date)=>{
        setAppointment({
            ...appointement,
            StartDate: moment(date).toDate()
        });
        console.log(appointement);
      }
      const handleendChange =(date)=>{
        setAppointment({
            ...appointement,
            EndDate:  moment(date).toDate()
        });
      }
      //fomulaire search
    const [FormState , setForm] = useState({
        Name : "",
        Title: "",
        Formdate: "",
    })
    const handleformdateChange = (date) =>{
        setForm({
            ...FormState,
            Formdate: moment(date).toDate()
        })
        console.log("date", FormState)
    }
    const handleformtitle = (e)=>{
        e.preventDefault()
        setForm({
            ...FormState,
            Title: e.target.value
        })
        console.log("title", FormState)
    }
    const handleformname = (e)=>{
        e.preventDefault()
        setForm({
            ...FormState,
            Name: e.target.value
        })
        console.log("name", FormState)
    }
    return (
            <div >
                <div className="content">
                    <div className="row">
                        <div className="col-sm-4 col-3">
                            <h4 className="page-title">Appointements</h4>
                        </div>
                        <div className="col-sm-8 col-9 text-right m-b-20">
                            <a  className="AddAppBox-open btn btn-primary float-right btn-rounded"><i className="fa fa-plus" /> Add Employee</a>
                        </div>
                    </div>
                    <section className="AddAppBox-popup">
                        <header className="AddAppBox-popup__header">
                            <aside style={{flex: 3}}>
                                <button className="AddAppBox-close">
                                    <AiFillCloseCircle style={{ fontSize: '50px'}}/>
                                </button>
                            </aside>
                            <aside style={{flex: 8}}>
                                <p style={{ textAlign : 'center'}} >Add an appointement</p> 
                            </aside>
                        </header>
                                <main className="AddAppBox-popup__main">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="card-box" />
                                                    <h4 className="card-title">Add an appointement</h4>
                                                    <form action="#">
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Title:</label>
                                                            <div className="col-md-10">
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control"
                                                                    placeholder="Add Title..." 
                                                                    onChange={(e) =>{handletitleChange(e)} } 
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">Start date:</label>
                                                            <div className="col-md-10">
                                                                <DatePicker 
                                                                    dateFormat="DD-MM-YYYY"
                                                                    timeFormat="hh:mm A"
                                                                    placeholderText="Start Date" 
                                                                    selected={appointement.StartDate}
                                                                    onChange={handlestartChange} 
                                                                    
                                                                    
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-form-label col-md-2">End date:</label>
                                                            <div className="col-md-10">
                                                                <DatePicker 
                                                                    dateFormat="DD-MM-YYYY"
                                                                    timeFormat="hh:mm A"
                                                                    placeholderText="End Date" 
                                                                    selected={appointement.EndDate}
                                                                    onChange={handleendChange }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <button 
                                                                className="AddAppBox-open btn btn-primary btn-rounded" 
                                                                onClick={handleConfirm}
                                                                style={{ backgroundColor: '#0464B3' }}>
                                                                Add an appointement
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                </main>                   
                    </section>
                    <div className="row filter-row">
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group form-focus">
                                <input 
                                type="text" 
                                placeholder="Title" 
                                onChange={(e) => {handleformtitle(e)}} 
                                className="form-control floating" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group form-focus">
                                <input 
                                type="text" 
                                placeholder="Patient name" 
                                onChange={(e) => {handleformname(e)}} 
                                className="form-control floating" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="form-group form-focus">
                                <DatePicker2 
                                    dateFormat="dd-mm-yyyy"
                                    placeholderText="Start Date" 
                                    selected={FormState.Formdate}
                                    onChange={handleformdateChange}
                                />                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <a href="#" className="btn btn-success btn-block"> Search </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th style={{minWidth: 200}}>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th style={{minWidth: 110}}>Appointment date </th>
                                    <th style={{minWidth: 110}}>Join Date</th>
                                    <th className="text-right">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                { appointments && appointments.map((app) => (
                                    <tr>
                                        <td><h2>{app.Title}</h2></td>
                                        <td>NS-0001</td>
                                        <td>albinasimonis@example.com</td>
                                        <td>828-634-2744</td>
                                        <td>{moment(app.StartDate).format('DD-MM-YYYY hh:mm')}</td>
                                        <td>7 May 2015</td>
                                        <td className="text-right">
                                        <div className="dropdown dropdown-action">
                                            <a href="#" className="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" ><i className="fa fa-edit m-r-5" /><Link  to={`/doctor/update_appointment/${app._id}`}> Edit </Link></a>
                                            <a className="dropdown-item"  data-toggle="modal"  onClick={() => handleClick(app._id)}><i className="fa fa-trash m-r-5" /> Delete</a>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>

    );
}

export default Appointements;