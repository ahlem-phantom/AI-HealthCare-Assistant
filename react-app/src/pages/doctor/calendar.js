import { Calendar, DateLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import React, { useEffect } from 'react';
import "react-big-calendar/lib/css/react-big-calendar.css";

import { useDispatch, useSelector } from "react-redux"
import { GetAppointments } from "../../store/actions/appointment";
import AuthService from "../../services/auth.service";
import Iconify from '../../components/common/Iconify';
import { MOCK_APPOINTMENTS } from "../../constants/mockRecords";

const dayjsLocalizer = (jsDT) => {
  return new DateLocalizer({
    formats: {
      dateFormat: 'DD',
      dayFormat: 'DD ddd',
      weekdayFormat: 'dddd',
      monthHeaderFormat: 'MMMM YYYY',
      dayHeaderFormat: 'dddd MMM DD',
      agendaDateFormat: 'ddd MMM DD',
      timeGutterFormat: 'HH:mm',
      agendaTimeFormat: 'HH:mm',
    },
    firstOfWeek: (culture) => jsDT().locale(culture || 'en').startOf('week').day(),
    parse: (value, format, culture) => jsDT(value, format, culture).toDate(),
    format: (value, format, culture) => {
      const result = jsDT(value).format(format);
      if (result === 'Invalid Date') {
        console.warn('Localizer failed to format:', value, 'with format:', format);
      }
      return result;
    },
  })
}

const localizer = dayjsLocalizer(dayjs);

function Calendrier() {
    const currentUser = AuthService.getCurrentUser();
    const dispatch = useDispatch();
    const appointmentsRedux = useSelector((state) => state.appointmentReducer.appointment);
    const appointments = (appointmentsRedux && appointmentsRedux.length > 0) ? appointmentsRedux : MOCK_APPOINTMENTS;

    useEffect(() => {
        if (currentUser?.id) {
            dispatch(GetAppointments(currentUser.id));
        }
    }, [dispatch, currentUser?.id]);

    if (!currentUser) {
        return (
            <div className="min-h-screen bg-slate-50/50 flex items-center justify-center">
                <div className="animate-pulse text-slate-400 font-bold uppercase tracking-widest">Initializing...</div>
            </div>
        );
    }

    const apps = () => {
        if (!appointments || !Array.isArray(appointments)) return [];
        const result = appointments.map((app) => {
            const start = dayjs(app.StartDate || app.start);
            const end = dayjs(app.EndDate || app.end);
            console.log('Mapping app:', app.title || app.Firstname, 'Start:', start.format(), 'End:', end.format());
            return {
                ...app,
                StartDate: start.toDate(),
                EndDate: end.toDate(),
                title: app.Firstname || app.title || 'Appointment'
            };
        });
        return result;
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-row items-center justify-between gap-8 pb-4">
                <div className="text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
                            <Iconify icon="solar:calendar-date-bold-duotone" className="w-6 h-6 text-sky-500" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">Scheduler Engine</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                        Schedule <span className="text-sky-500">Planner</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-2 text-lg">Orchestrate your medical sessions with geometric precision.</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-50 border border-emerald-100/50">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Live Syncing</span>
                    </div>
                </div>
            </div>

            <div className="rounded-[3rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 p-6 md:p-10 overflow-hidden relative group">
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
                
                <Calendar
                    localizer={localizer}
                    events={apps()}
                    startAccessor="StartDate"
                    endAccessor="EndDate"
                    titleAccessor="title"
                    defaultView='day'
                    style={{ height: 700 }}
                    className="premium-calendar relative z-10"
                    components={{
                        toolbar: CustomToolbar
                    }}
                />
            </div>
        </div>
    );
}

// Custom Toolbar Component
const CustomToolbar = (toolbar) => {
    const goToBack = () => { toolbar.onNavigate('PREV'); };
    const goToNext = () => { toolbar.onNavigate('NEXT'); };
    const goToToday = () => { toolbar.onNavigate('TODAY'); };

    const viewNamesGroup = [
        { view: 'month', label: 'Month' },
        { view: 'week', label: 'Week' },
        { view: 'day', label: 'Day' },
        { view: 'agenda', label: 'Agenda' }
    ];

    return (
        <div className="calendar-toolbar">
            <div className="flex items-center gap-6">
                <div className="calendar-nav-group">
                    <button onClick={goToBack} className="calendar-nav-btn">
                        <Iconify icon="eva:chevron-left-fill" width={20} />
                    </button>
                    <button onClick={goToToday} className="calendar-nav-btn px-6 border-x border-slate-200/50">
                        Today
                    </button>
                    <button onClick={goToNext} className="calendar-nav-btn">
                        <Iconify icon="eva:chevron-right-fill" width={20} />
                    </button>
                </div>
                
                <h2 className="text-xl font-black text-slate-800 tracking-tight hidden sm:block">
                    {toolbar.label}
                </h2>
            </div>

            <div className="calendar-view-group">
                {viewNamesGroup.map((item) => (
                    <button
                        key={item.view}
                        onClick={() => toolbar.onView(item.view)}
                        className={`calendar-view-btn ${toolbar.view === item.view ? 'active' : ''}`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calendrier;