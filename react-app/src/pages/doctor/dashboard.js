import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetAppointments } from "../../store/actions/appointment";
import { GetTalks } from "../../store/actions/chatapp";
import AuthService from "../../services/auth.service";
import dayjs from "dayjs";
import Iconify from '../../components/common/Iconify';
import Chart from 'react-apexcharts';
import { MOCK_APPOINTMENTS, MOCK_PATIENTS } from "../../constants/mockRecords";

const Dashboard = () => {
    const currentUser = AuthService.getCurrentUser();
    const dispatch = useDispatch();
    const liveAppointments = useSelector((state) => state.appointmentReducer.appointment);
    const liveTalks = useSelector((state) => state.chatappReducer.talks) || [];

    const appointments = liveAppointments && liveAppointments.length > 0 ? liveAppointments : MOCK_APPOINTMENTS;
    const talks = liveTalks && liveTalks.length > 0 ? liveTalks : MOCK_PATIENTS;

    useEffect(() => {
        if (currentUser?.id) {
            dispatch(GetAppointments(currentUser.id));
            dispatch(GetTalks(currentUser.id));
        }
    }, [dispatch, currentUser?.id]);

    if (!currentUser) {
        return (
            <div className="min-h-screen bg-slate-50/50 flex items-center justify-center">
                <div className="animate-pulse text-slate-400 font-bold uppercase tracking-widest">Initializing Session...</div>
            </div>
        );
    }

    // Calculate Dynamic Stats
    const totalPatients = appointments ? new Set(appointments.map(app => app.Firstname || app.PatientName)).size : 0;
    const todayCounts = appointments ? appointments.filter(app => dayjs(app.StartDate).isSame(dayjs(), 'day')).length : 0;
    const pendingQueue = appointments ? appointments.filter(app => dayjs(app.StartDate).isAfter(dayjs())).length : 0;
    const attendedCount = appointments ? appointments.filter(app => dayjs(app.StartDate).isBefore(dayjs())).length : 0;

    // Chart Data Preparation (Last 7 Days)
    const getLast7Days = () => {
        const days = [];
        for (let i = 6; i >= 0; i--) {
            days.push(dayjs().subtract(i, 'day').format('MMM DD'));
        }
        return days;
    };

    const getAppointmentTrends = () => {
        const counts = new Array(7).fill(0);
        if (appointments) {
            appointments.forEach(app => {
                const appDate = dayjs(app.StartDate);
                for (let i = 0; i < 7; i++) {
                    if (appDate.isSame(dayjs().subtract(6 - i, 'day'), 'day')) {
                        counts[i]++;
                    }
                }
            });
        }
        return counts;
    };

    const lineChartOptions = {
        chart: { toolbar: { show: false }, zoom: { enabled: false }, sparkline: { enabled: false } },
        stroke: { curve: 'smooth', width: 4, colors: ['#0ea5e9'] },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0, stops: [0, 90, 100] } },
        xaxis: { categories: getLast7Days(), labels: { style: { colors: '#94a3b8', fontWeight: 600 } } },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { theme: 'dark', x: { show: false } }
    };

    const donutChartOptions = {
        labels: ['Completed', 'Pending', 'Cancelled'],
        colors: ['#10b981', '#f59e0b', '#ef4444'],
        legend: { position: 'bottom', fontWeight: 600 },
        plotOptions: { pie: { donut: { size: '80%' } } },
        dataLabels: { enabled: false }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-row items-center justify-between gap-6 pb-6 w-full border-b border-slate-100/50">
                <div className="text-left">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                        Doctor <span className="text-sky-500 font-extrabold italic">Dashboard</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Real-time clinical insights and patient management.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all shadow-sm">
                        <Iconify icon="eva:printer-fill" className="w-5 h-5" />
                        <span className="hidden lg:inline">Quick Report</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 whitespace-nowrap">
                        <Iconify icon="eva:calendar-fill" className="w-5 h-5" />
                        <span>Manage Schedule</span>
                    </button>
                </div>
            </div>

            {/* Performance Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Database', value: '1,072', icon: 'eva:heart-fill', color: 'rose', trend: '+12%' },
                    { label: 'Your Patients', value: totalPatients, icon: 'eva:people-fill', color: 'sky', trend: 'Active' },
                    { label: 'Today Sprints', value: todayCounts, icon: 'eva:person-done-fill', color: 'emerald', trend: 'Live' },
                    { label: 'Upcoming', value: pendingQueue, icon: 'eva:clock-fill', color: 'amber', trend: 'Next 24h' },
                ].map((stat) => (
                    <div key={stat.label} className="p-8 rounded-[2.5rem] bg-white border border-slate-50 shadow-sm hover:shadow-xl hover:shadow-sky-50 transition-all duration-300 group relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-500/5 rounded-full -translate-y-12 translate-x-12 blur-2xl group-hover:bg-${stat.color}-500/10 transition-colors`} />
                        <div className="flex flex-col gap-6 relative z-10">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-500 group-hover:scale-110 transition-transform shadow-sm`}>
                                <Iconify icon={stat.icon} className="w-7 h-7" />
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full bg-${stat.color}-50 text-${stat.color}-600 border border-${stat.color}-100/50`}>{stat.trend}</span>
                                </div>
                                <h3 className="text-4xl font-black text-slate-900">{stat.value}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 rounded-[3rem] bg-white border border-slate-50 shadow-xl shadow-slate-100/50 p-10">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Appointment Trends</h2>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Last 7 Days Performance</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-sky-500"></div>
                            <span className="text-xs font-bold text-slate-500">Appointments</span>
                        </div>
                    </div>
                    <div className="h-64">
                        <Chart 
                            options={lineChartOptions} 
                            series={[{ name: 'Appointments', data: getAppointmentTrends() }]} 
                            type="area" 
                            height="100%" 
                        />
                    </div>
                </div>
                <div className="rounded-[3rem] bg-white border border-slate-50 shadow-xl shadow-slate-100/50 p-10">
                    <h2 className="text-2xl font-black text-slate-900 mb-2 text-center">Volume</h2>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-8 text-center">Status Distribution</p>
                    <div className="h-64 flex flex-col justify-center">
                        <Chart 
                            options={donutChartOptions} 
                            series={[attendedCount || 45, todayCounts || 20, 10]} 
                            type="donut" 
                            width="100%" 
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Queue */}
                <div className="lg:col-span-2 rounded-[3rem] bg-white border border-slate-50 shadow-xl shadow-slate-100/50 overflow-hidden">
                    <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-[1.25rem] bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-100">
                                <Iconify icon="eva:list-fill" className="w-7 h-7" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">Active Queue</h2>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Live monitoring</p>
                            </div>
                        </div>
                        <button className="hidden sm:block px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all shadow-sm text-sm">Full History</button>
                    </div>
                    <div className="p-8 space-y-4">
                        {appointments && appointments.length > 0 ? (
                            appointments.slice(0, 3).map((app) => (
                                <div key={app._id} className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-slate-50 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-50 transition-all group cursor-pointer">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-100 flex items-center justify-center text-slate-400 text-xl font-black group-hover:from-sky-50 group-hover:to-sky-100 group-hover:text-sky-500 transition-all">
                                        {app.Firstname?.charAt(0) || 'P'}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-black text-slate-900 text-lg group-hover:text-sky-600 transition-colors uppercase tracking-tight">{app.Firstname || 'Patient'} {app.Lastname || ''}</p>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-slate-400 font-bold">Medical Session</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-200" />
                                            <span className="text-xs text-sky-500 font-black uppercase tracking-widest">Active</span>
                                        </div>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <p className="font-black text-slate-900 text-xl tracking-tighter">{dayjs(app.StartDate).format("hh:mm A")}</p>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Expected</p>
                                    </div>
                                    <button className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-sky-500 transition-all shadow-lg active:scale-95">
                                        <Iconify icon="eva:arrow-forward-fill" className="w-6 h-6" />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="py-20 text-center flex flex-col items-center opacity-40">
                                <Iconify icon="eva:calendar-outline" className="w-16 h-16 mb-4 text-slate-200" />
                                <p className="font-black uppercase tracking-widest text-sm text-slate-300">Queue is currently empty</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Quick Chat / Conversations */}
                <div className="rounded-[3rem] bg-slate-900 p-10 flex flex-col relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl font-black text-white flex items-center gap-3">
                                <span className="w-2 h-8 bg-sky-500 rounded-full" />
                                Quick Chat
                            </h2>
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sky-400">
                                <Iconify icon="eva:message-square-fill" className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="space-y-6 flex-1">
                            {talks && talks.length > 0 ? (
                                talks.slice(0, 4).map((talk, idx) => (
                                    <div key={idx} className="flex items-center gap-4 hover:bg-white/5 rounded-2xl p-3 -mx-3 transition-all cursor-pointer group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white font-black border border-white/5 group-hover:bg-sky-500 transition-colors">
                                            {talk.Firstname?.charAt(0) || 'U'}
                                        </div>
                                        <div className="flex-1 overflow-hidden">
                                            <p className="font-bold text-white text-md truncate leading-none mb-1.5">{talk.Firstname || 'New Patient'}</p>
                                            <p className="text-xs text-white/30 truncate italic group-hover:text-white/60">"Click to view recent analysis..."</p>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                                    </div>
                                ))
                            ) : (
                                <div className="space-y-6">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center gap-4 opacity-30 animate-pulse">
                                            <div className="w-12 h-12 rounded-xl bg-white/10" />
                                            <div className="flex-1 space-y-2">
                                                <div className="h-2 w-20 bg-white/20 rounded" />
                                                <div className="h-2 w-full bg-white/10 rounded" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className="mt-10 w-full py-5 rounded-2xl bg-sky-500 text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-sky-400 transition-all shadow-xl shadow-sky-500/20">
                            Open Multi-Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
