import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetAppointments } from "../../store/actions/appointment";
import AuthService from "../../services/auth.service";
import dayjs from "dayjs";
import Iconify from '../../components/common/Iconify';

const MOCK_APPOINTMENTS = [
    { _id: 'm1', DoctorName: 'Sarah Johnson', StartDate: dayjs().add(2, 'day').toISOString(), status: 'Confirmed', type: 'Consultation' },
    { _id: 'm2', DoctorName: 'Michael Chen', StartDate: dayjs().add(5, 'day').toISOString(), status: 'Pending', type: 'Follow-up' },
    { _id: 'm3', DoctorName: 'Emily White', StartDate: dayjs().subtract(3, 'day').toISOString(), status: 'Completed', type: 'General Checkup' },
    { _id: 'm4', DoctorName: 'Robert Brown', StartDate: dayjs().add(1, 'week').toISOString(), status: 'Confirmed', type: 'Specialist' },
    { _id: 'm5', DoctorName: 'Jessica Lee', StartDate: dayjs().add(3, 'hour').toISOString(), status: 'Confirmed', type: 'Urgent' },
];

const Dashboard = () => {
  const currentUser = AuthService.getCurrentUser();
  const dispatch = useDispatch();
  const liveAppointments = useSelector((state) => state.appointmentReducer.appointment);

  const appointments = liveAppointments && liveAppointments.length > 0 ? liveAppointments : MOCK_APPOINTMENTS;

  useEffect(() => {
    if (currentUser?.id) {
      dispatch(GetAppointments(currentUser.id));
    }
  }, [dispatch, currentUser?.id]);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-50/50 flex items-center justify-center">
        <div className="animate-pulse text-slate-400 font-bold uppercase tracking-widest">Initializing Session...</div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
        {/* Header Section */}
        <div className="flex flex-row items-center justify-between gap-6 pb-2">
          <div className="text-left">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Welcome back, <span className="text-sky-500">{currentUser.username}</span>!
            </h1>
            <p className="text-slate-500 font-medium mt-1">Here is what's happening with your medical profile today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              <Iconify icon="eva:settings-2-fill" className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 whitespace-nowrap">
              <Iconify icon="eva:plus-fill" className="w-5 h-5" />
              <span className="hidden sm:inline">New Appointment</span>
              <span className="sm:hidden text-xs">New</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Appointments', value: appointments?.length || '0', icon: 'eva:calendar-fill', color: 'sky' },
            { label: 'Active Treatments', value: '2', icon: 'eva:activity-fill', color: 'emerald' },
            { label: 'Pending Results', value: '1', icon: 'eva:file-text-fill', color: 'amber' },
          ].map((stat) => (
            <div key={stat.label} className="p-8 rounded-[2rem] bg-white border border-slate-50 shadow-sm hover:shadow-xl hover:shadow-sky-50 transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{stat.label}</p>
                  <h3 className="text-4xl font-black text-slate-900">{stat.value}</h3>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-500 group-hover:scale-110 transition-transform`}>
                  <Iconify icon={stat.icon} className="w-7 h-7" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointments Table Card */}
        <div className="rounded-[2.5rem] bg-white border border-slate-50 shadow-xl shadow-slate-100/50 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center">
                <Iconify icon="eva:list-fill" className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-black text-slate-900">Upcoming Appointments</h2>
            </div>
            <button className="text-sky-500 font-bold hover:underline py-2">Full History</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/30">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans">Professional</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans">Service</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans">Timing</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {appointments && appointments.length > 0 ? (
                  appointments.map((app) => (
                    <tr key={app._id} className="hover:bg-sky-50/50 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 font-black text-sm">
                            {app.DoctorName?.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 leading-none">Dr. {app.DoctorName}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1.5">Primary Specialist</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1.5 rounded-xl bg-sky-50 text-sky-600 text-[10px] font-black uppercase tracking-widest border border-sky-100">Consultation</span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="font-bold text-slate-700">{dayjs(app.StartDate).format("MMM DD, YYYY")}</p>
                        <p className="text-xs text-slate-400 mt-1">{dayjs(app.StartDate).format("hh:mm A")}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center opacity-40 py-10">
                        <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center mb-6">
                            <Iconify icon="eva:calendar-outline" className="w-10 h-10 text-slate-300" />
                        </div>
                        <p className="font-black text-slate-400 uppercase tracking-widest text-sm">No scheduled appointments</p>
                        <button className="mt-6 px-8 py-3 rounded-2xl bg-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-100 hover:bg-sky-600 transition-all">
                            Book First Visit
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;