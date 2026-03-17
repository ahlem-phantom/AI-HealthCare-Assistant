import AuthService from "../../services/auth.service";
import dayjs from 'dayjs'
import useGeoLocation from "../../hooks/useGeoLocation";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Delete_Talks, Send_Message, GetTalks } from "../../store/actions/chatapp"
import { Link } from "react-router-dom";
import DatePicker from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Iconify from '../../components/common/Iconify';

function TakeAppointment() {
    const currentUser = AuthService.getCurrentUser();
    const location = useGeoLocation();
    const dispatch = useDispatch();
    const talks = useSelector((state) => state.chatappReducer.talks);

    const [searchvalue, setSearch] = useState("");
    const [UserMessage, setMessage] = useState({
        message: "",
        Date: ""
    });

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [talks]);

    useEffect(() => {
        dispatch(GetTalks(currentUser.id));
    }, [dispatch, currentUser.id]);

    const handlesearchchange = (e) => {
        setSearch(e.target.value);
    }

    const filtredMessages = talks && talks.filter(
        (talk) =>
            talk.messageSent?.toLowerCase().includes(searchvalue.toLowerCase()) ||
            talk.messageReceived?.toLowerCase().includes(searchvalue.toLowerCase())
    );

    const handledateChange = (date) => {
        setMessage({
            ...UserMessage,
            Date: dayjs(date).toDate()
        });
    }

    const handleSend = (e) => {
        e.preventDefault();
        if (UserMessage.message.trim() !== "") {
            const messagePayload = {
                ...UserMessage,
                Userlat: localStorage.getItem("latitude") || "",
                Userlng: localStorage.getItem("longitude") || "",
                Username: currentUser.username,
                Usermail: currentUser.email
            };
            dispatch(Send_Message(messagePayload, currentUser.id));
            setMessage({ ...UserMessage, message: "" });
        }
    }

    return (
        <div className="flex flex-col h-[calc(100vh-140px)] min-h-[600px] animate-in fade-in duration-1000">
            {/* Standardized Header */}
            <div className="flex flex-row items-center justify-between gap-6 pb-4 border-b border-slate-100 shrink-0">
                <div className="text-left">
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                        Medical <span className="text-sky-500">Assistant</span>
                    </h1>
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-1">Smart Healthcare Guide</p>
                </div>
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => dispatch(Delete_Talks(currentUser.id))}
                        className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-all shadow-sm group"
                        title="Delete Conversation"
                    >
                        <Iconify icon="eva:trash-2-outline" className="w-5 h-5" />
                    </button>
                    <div className="hidden sm:flex items-center gap-3 px-6 py-3 rounded-2full bg-white border border-slate-100 shadow-sm whitespace-nowrap">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bot Online</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden mt-6 gap-8">
                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 overflow-hidden relative">
                    {/* Chat Header/Search */}
                    <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-100">
                                <Iconify icon="eva:message-circle-fill" className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-black text-slate-900 leading-none">Support Thread</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Encrypted for privacy</p>
                            </div>
                        </div>
                        <div className="relative group hidden sm:block">
                            <Iconify icon="eva:search-fill" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-sky-500" />
                            <input 
                                type="text" 
                                placeholder="Search messages..." 
                                className="pl-10 pr-4 py-2 bg-white border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                                onChange={handlesearchchange}
                            />
                        </div>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar bg-slate-50/20">
                        {/* Compact Location Prompt */}
                        <div className="flex flex-row justify-start">
                            <div className="flex flex-col max-w-[90%] space-y-2">
                                <div className="p-4 rounded-2xl rounded-tl-lg bg-white border border-slate-100 shadow-sm text-slate-700 leading-relaxed font-semibold text-xs border-l-4 border-l-sky-500">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                                            <Iconify icon="eva:pin-fill" className="w-4 h-4 text-sky-500" />
                                        </div>
                                        <p className="flex-1">Please share your location to find nearby specialists.</p>
                                        <button 
                                            onClick={() => {
                                                localStorage.setItem("latitude", JSON.stringify(location.coordinates.lat));
                                                localStorage.setItem("longitude", JSON.stringify(location.coordinates.lng));
                                                alert('Location shared successfully!');
                                            }}
                                            className="px-4 py-1.5 rounded-lg bg-sky-500 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-sm"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 ml-2">Smart Assistant</span>
                            </div>
                        </div>

                        {filtredMessages && filtredMessages.map((talk, idx) => (
                            <React.Fragment key={idx}>
                                {talk.messageSent && (
                                    <div className="flex flex-row justify-start animate-in slide-in-from-left-4 duration-500">
                                        <div className="flex flex-col max-w-[80%] space-y-1">
                                            <div className="p-5 rounded-[1.8rem] rounded-tl-lg bg-slate-50 border border-slate-100 text-slate-600 font-medium">
                                                {talk.messageSent}
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 ml-2">
                                                {dayjs(talk.date).format('hh:mm A')}
                                            </span>
                                        </div>
                                    </div>
                                )}
                                {talk.messageReceived && (
                                    <div className="flex flex-row justify-end animate-in slide-in-from-right-4 duration-500">
                                        <div className="flex flex-col max-w-[80%] space-y-1 items-end">
                                            <div className="p-5 rounded-[1.8rem] rounded-tr-lg bg-sky-500 text-white shadow-xl shadow-sky-100 font-medium">
                                                {talk.messageReceived}
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 mr-2">
                                                {dayjs(talk.date).format('hh:mm A')}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input Area */}
                    <div className="p-6 border-t border-slate-50 bg-white shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.03)] shrink-0">
                        <form onSubmit={handleSend} className="flex items-center gap-3">
                            <div className="flex-1 relative group">
                                <textarea 
                                    placeholder="Type your message..."
                                    className="w-full pl-6 pr-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:bg-white focus:border-sky-500 transition-all font-medium text-slate-900 resize-none h-[56px] min-h-[56px] max-h-[56px] text-sm"
                                    value={UserMessage.message}
                                    onChange={(e) => setMessage({ ...UserMessage, message: e.target.value })}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSend(e);
                                        }
                                    }}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="relative z-[100]">
                                    <div className="flex items-center gap-2 px-3 py-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-sky-500 transition-all cursor-pointer group">
                                        <Iconify icon="eva:calendar-outline" className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors pointer-events-none" />
                                        <DatePicker 
                                            inputProps={{ 
                                                placeholder: "Select Date", 
                                                className: "text-[10px] font-black uppercase tracking-wider text-slate-600 focus:outline-none bg-transparent w-24 cursor-pointer" 
                                            }}
                                            dateFormat="DD/MM/YYYY"
                                            timeFormat="hh:mm A"
                                            value={UserMessage.Date}
                                            onChange={handledateChange}
                                            closeOnSelect={true}
                                        />
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-sky-500 active:scale-95 transition-all shadow-lg shadow-slate-200 shrink-0"
                                >
                                    <Iconify icon="eva:paper-plane-fill" className="w-6 h-6" />
                                </button>
                            </div>
                        </form>
                        <div className="mt-3 flex items-center justify-center">
                             <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                 <Iconify icon="eva:clock-outline" className="w-3 h-3" />
                                 Appointment: <span className="text-sky-500">{UserMessage.Date ? dayjs(UserMessage.Date).format('MMM DD, hh:mm A') : 'Consultation Only'}</span>
                             </p>
                        </div>
                    </div>
                </div>

                {/* Right Profile Sidebar */}
                <div className="hidden xl:flex flex-col w-72 space-y-6 shrink-0 h-full">
                    <div className="bg-white rounded-[2rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-6 text-center space-y-6 flex flex-col items-center">
                        <div className="relative group">
                            <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden ring-4 ring-slate-50 shadow-inner">
                                <img 
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.username}`}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-sky-500 text-white shadow-lg">
                                <Iconify icon="eva:star-fill" className="w-3 h-3" />
                            </div>
                        </div>
                        
                        <div className="w-full">
                            <h3 className="text-lg font-black text-slate-900 leading-tight truncate">{currentUser.username}</h3>
                            <p className="text-[9px] font-black uppercase tracking-widest text-sky-500 mt-1">VIP Account</p>
                        </div>

                        <div className="w-full pt-6 border-t border-slate-50 space-y-3 text-left">
                            <div className="flex flex-col">
                                <label className="text-[8px] font-black uppercase tracking-widest text-slate-400">Registered</label>
                                <p className="text-[11px] font-bold text-slate-700">{dayjs(currentUser.birthdate).format('DD MMM, YYYY')}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[8px] font-black uppercase tracking-widest text-slate-400">Email Reference</label>
                                <p className="text-[11px] font-bold text-slate-700 truncate">{currentUser.email}</p>
                            </div>
                        </div>

                        <Link 
                            to="/patient/profile"
                            className="w-full py-3.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            <Iconify icon="eva:edit-2-fill" className="w-3 h-3" />
                            Update
                        </Link>
                    </div>

                    <div className="flex-1 bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden group">
                        <div className="relative z-10 space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/20">
                                <Iconify icon="eva:question-mark-circle-fill" className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-black text-sm">Need Help?</h4>
                                <p className="text-[10px] text-slate-400 font-medium leading-relaxed mt-1">Our specialists are here to guide your health roadmap.</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-sky-500/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TakeAppointment;
