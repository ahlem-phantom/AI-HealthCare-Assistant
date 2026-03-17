import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneAppointment, UpdateAppointment } from "../../store/actions/appointment";
import dayjs from 'dayjs';
import DatePicker from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Iconify from '../../components/common/Iconify';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const appointmentData = useSelector((state) => state.appointmentReducer.appointment);
    
    const [appointment, setAppointment] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Phone: "",
        StartDate: new Date(),
        EndDate: new Date(),
    });

    useEffect(() => {
        dispatch(getOneAppointment(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (appointmentData?.appointment) {
            const app = appointmentData.appointment;
            setAppointment({
                Firstname: app.Firstname || "",
                Lastname: app.Lastname || "",
                Email: app.Email || "",
                Phone: app.Phone || "",
                StartDate: app.StartDate ? dayjs(app.StartDate).toDate() : new Date(),
                EndDate: app.EndDate ? dayjs(app.EndDate).toDate() : new Date(),
            });
        }
    }, [appointmentData]);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(UpdateAppointment(id, appointment));
        // Navigation back to appointments list after a short delay to allow dispatch
        setTimeout(() => navigate("/doctor/appointments"), 500);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <div className="flex flex-row items-center justify-between gap-6 pb-2">
                <div className="text-left">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        Edit <span className="text-sky-500">Appointment</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Review and update session details for this patient.</p>
                </div>
                <button 
                    onClick={() => navigate("/doctor/appointments")}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all shadow-sm"
                >
                    <Iconify icon="eva:arrow-back-fill" className="w-6 h-6" />
                </button>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
                <form onSubmit={handleSave} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                            <input 
                                type="text" required
                                value={appointment.Firstname}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                                onChange={(e) => setAppointment({...appointment, Firstname: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                            <input 
                                type="text" required
                                value={appointment.Lastname}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                                onChange={(e) => setAppointment({...appointment, Lastname: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                        <input 
                            type="email" required
                            value={appointment.Email}
                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                            onChange={(e) => setAppointment({...appointment, Email: e.target.value})}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                        <input 
                            type="text" required
                            value={appointment.Phone}
                            className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                            onChange={(e) => setAppointment({...appointment, Phone: e.target.value})}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">Start Date & Time</label>
                            <DatePicker 
                                value={appointment.StartDate}
                                onChange={(date) => setAppointment({...appointment, StartDate: dayjs(date).toDate()})}
                                inputProps={{ className: "w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none font-medium" }}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1 mb-2 block">End Date & Time</label>
                            <DatePicker 
                                value={appointment.EndDate}
                                onChange={(date) => setAppointment({...appointment, EndDate: dayjs(date).toDate()})}
                                inputProps={{ className: "w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none font-medium" }}
                            />
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button 
                            type="button"
                            onClick={() => navigate("/doctor/appointments")}
                            className="flex-1 py-4 rounded-2xl bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 transition-all"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="flex-[2] py-4 rounded-2xl bg-sky-500 text-white font-bold hover:bg-sky-600 transition-all shadow-xl shadow-sky-100"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Update;