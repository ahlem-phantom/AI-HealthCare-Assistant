import { GetAppointments, DeleteAppointment, AddAppointment } from "../../store/actions/appointment";
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import dayjs from 'dayjs'
import DatePicker from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import AuthService from "../../services/auth.service";
import Iconify from '../../components/common/Iconify';

import { MOCK_APPOINTMENTS } from "../../constants/mockRecords";

function Appointements() {
    const currentUser = AuthService.getCurrentUser();
    const dispatch = useDispatch();
    const appointmentsRedux = useSelector((state) => state.appointmentReducer.appointment);
    const appointments = (appointmentsRedux && appointmentsRedux.length > 0) ? appointmentsRedux : MOCK_APPOINTMENTS;
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [newApp, setNewApp] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Phone: "",
        StartDate: new Date(),
        EndDate: new Date(),
    });

    useEffect(() => {
        if (currentUser?.id) {
            dispatch(GetAppointments(currentUser.id));
        }
    }, [dispatch, currentUser?.id]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this appointment?")) {
            dispatch(DeleteAppointment(id));
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(AddAppointment(currentUser.id, newApp));
        setIsAddOpen(false);
        // Dispatching GetAppointments again to refresh the list might be needed depending on the action logic
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-row items-center justify-between gap-6 pb-2">
                <div className="text-left">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        Appointment <span className="text-sky-500">Center</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Manage and track all upcoming patient sessions.</p>
                </div>
                <button 
                    onClick={() => setIsAddOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95 whitespace-nowrap"
                >
                    <Iconify icon="eva:plus-fill" className="w-5 h-5" />
                    <span className="hidden sm:inline">New Appointment</span>
                    <span className="sm:hidden">New</span>
                </button>
            </div>

            {/* Quick Stats (Optional but helps layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
                        <Iconify icon="eva:calendar-outline" className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Booked</p>
                        <p className="text-2xl font-black text-slate-900">{appointments?.length || 0}</p>
                    </div>
                </div>
            </div>

            {/* Main Table Container */}
            <div className="rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden backdrop-blur-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Patient</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Contact</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Schedule</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {appointments && appointments.length > 0 ? (
                                appointments.map((app) => (
                                    <tr key={app._id} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-black text-sm">
                                                    {app.Firstname?.[0]}{app.Lastname?.[0]}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{app.Firstname} {app.Lastname}</p>
                                                    <p className="text-xs text-slate-500 font-medium">Regular Checkup</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <p className="text-sm text-slate-700 font-medium">{app.Email}</p>
                                            <p className="text-xs text-slate-400 mt-1">{app.Phone}</p>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-slate-900">{dayjs(app.StartDate).format('MMM DD, YYYY')}</span>
                                                <span className="text-xs font-bold text-sky-500 uppercase tracking-tighter mt-1">
                                                    {dayjs(app.StartDate).format('hh:mm A')} - {dayjs(app.EndDate).format('hh:mm A')}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link 
                                                    to={`/doctor/update_appointment/${app._id}`}
                                                    className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-all"
                                                >
                                                    <Iconify icon="eva:edit-2-fill" className="w-5 h-5" />
                                                </Link>
                                                <button 
                                                    onClick={() => handleDelete(app._id)}
                                                    className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all"
                                                >
                                                    <Iconify icon="eva:trash-2-fill" className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center gap-4 grayscale opacity-40">
                                            <Iconify icon="eva:calendar-outline" className="w-16 h-16 text-slate-300" />
                                            <p className="text-slate-500 font-medium">No appointments found.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Appointment Modal (Tailwind simplified) */}
            {isAddOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                            <h2 className="text-2xl font-black text-slate-900">New Appointment</h2>
                            <button onClick={() => setIsAddOpen(false)} className="p-2 rounded-xl hover:bg-slate-100 transition-colors">
                                <Iconify icon="eva:close-fill" className="w-6 h-6 text-slate-400" />
                            </button>
                        </div>
                        <form onSubmit={handleAdd} className="p-8 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                                    <input 
                                        type="text" required
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                                        placeholder="Enter first name"
                                        onChange={(e) => setNewApp({...newApp, Firstname: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                                    <input 
                                        type="text" required
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                                        placeholder="Enter last name"
                                        onChange={(e) => setNewApp({...newApp, Lastname: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                <input 
                                    type="email" required
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
                                    placeholder="patient@example.com"
                                    onChange={(e) => setNewApp({...newApp, Email: e.target.value})}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Start Time</label>
                                    <DatePicker 
                                        value={newApp.StartDate}
                                        onChange={(date) => setNewApp({...newApp, StartDate: dayjs(date).toDate()})}
                                        className="custom-datepicker"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">End Time</label>
                                    <DatePicker 
                                        value={newApp.EndDate}
                                        onChange={(date) => setNewApp({...newApp, EndDate: dayjs(date).toDate()})}
                                    />
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 mt-4"
                            >
                                Schedule Appointment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Appointements;
