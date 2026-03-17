import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../../services/auth.service";
import {useDispatch , useSelector} from "react-redux"
import  {GetAppointments }  from "../../store/actions/appointment";
import dayjs from "dayjs";
import Iconify from '../../components/common/Iconify';

const MOCK_PATIENT_APPOINTMENTS = [
  { _id: 'a1', DoctorName: 'Sarah Johnson', StartDate: dayjs().add(2, 'day').toISOString(), status: 'Confirmed', type: 'Consultation' },
  { _id: 'a2', DoctorName: 'Michael Chen', StartDate: dayjs().add(5, 'day').toISOString(), status: 'Pending', type: 'Follow-up' },
  { _id: 'a3', DoctorName: 'Emily White', StartDate: dayjs().subtract(3, 'day').toISOString(), status: 'Completed', type: 'General Checkup' },
];

function Appointements() {
  const currentUser = AuthService.getCurrentUser();
  const dispatch = useDispatch();    
  const reduxAppointments = useSelector((state) => state.appointmentReducer.appointment);
  const appointments = (reduxAppointments && reduxAppointments.length > 0) ? reduxAppointments : MOCK_PATIENT_APPOINTMENTS;

  useEffect(() => {
    dispatch(GetAppointments(currentUser?.id));
  }, [dispatch, currentUser?.id]);
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-6 pb-2">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            My <span className="text-sky-500">Schedule</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Track and manage your upcoming consultations.</p>
        </div>
        <Link
          to={"/patient/take-appointment"}
          className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 no-underline whitespace-nowrap"
        >
          <Iconify icon="eva:plus-fill" className="w-5 h-5" />
          <span className="hidden sm:inline">Book New</span>
          <span className="sm:hidden text-xs">Book</span>
        </Link>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-[2rem] bg-white border border-slate-50 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
                <Iconify icon="eva:calendar-fill" className="w-6 h-6" />
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Visits</p>
                <p className="text-xl font-black text-slate-900">{appointments?.length || 0}</p>
            </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-6">
        {appointments && appointments.length > 0 ? (
          appointments.map((app) => (
            <div key={app._id} className="group bg-white rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-xl hover:shadow-sky-50 transition-all duration-500 p-2 overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6">
                {/* Doctor Info */}
                <div className="flex items-center gap-5 lg:w-1/3">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center text-slate-400 text-xl font-black">
                    {app.DoctorName?.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 group-hover:text-sky-500 transition-colors">Dr. {app.DoctorName}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Specialist Consultation</p>
                  </div>
                </div>

                {/* Vertical Divider for desktop */}
                <div className="hidden lg:block w-px h-12 bg-slate-100" />

                {/* Timing Info */}
                <div className="flex items-center gap-6 flex-1">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-slate-400 mb-1">
                            <Iconify icon="eva:calendar-outline" className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Date</span>
                        </div>
                        <p className="font-bold text-slate-900">{dayjs(app.StartDate).format("MMMM DD, YYYY")}</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-slate-400 mb-1">
                            <Iconify icon="eva:clock-outline" className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Time</span>
                        </div>
                        <p className="font-bold text-sky-500">{dayjs(app.StartDate).format("hh:mm A")}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 lg:ml-auto">
                  <button className="flex-1 lg:flex-none px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all shadow-lg shadow-slate-100 uppercase tracking-widest">
                    Details
                  </button>
                  <button className="p-3.5 rounded-2xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all">
                    <Iconify icon="eva:trash-2-fill" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-[3rem] bg-white border border-slate-50 shadow-xl shadow-slate-100/50 p-20 text-center">
             <div className="max-w-xs mx-auto space-y-6">
                <div className="w-24 h-24 rounded-[2.5rem] bg-slate-50 flex items-center justify-center mx-auto">
                    <Iconify icon="eva:calendar-outline" className="w-12 h-12 text-slate-200" />
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Empty Schedule</h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">You don't have any appointments scheduled yet. Start by finding a professional.</p>
                </div>
                <Link to="/patient/doctors" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-sky-500 text-white font-bold shadow-xl shadow-sky-100 hover:bg-sky-600 transition-all no-underline">
                    Find Doctors
                </Link>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Appointements;