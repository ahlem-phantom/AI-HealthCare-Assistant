import React, { useState, useEffect } from 'react';
import AuthService from '../../services/auth.service';
import { Link, useNavigate } from 'react-router-dom';
import Iconify from '../common/Iconify';
import userAvatar from '../../assets/user.jpg';

const DashboardHeader = ({ onToggleSidebar, isSidebarOpen }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    navigate('/login');
  };

  if (!currentUser) return null;

  const userRole = (currentUser?.role || (currentUser?.roles && currentUser.roles[0]) || "").toLowerCase();

  return (
    <header className="sticky top-0 z-[40] bg-white/80 backdrop-blur-xl border-b border-slate-100/80 px-6 md:px-12 lg:px-16 py-4">
      <div className="w-full flex items-center justify-between gap-8">
        
        {/* Toggle & Search Area */}
        <div className="flex items-center gap-6 flex-1">
          <button 
            onClick={onToggleSidebar}
            className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-sky-500 transition-all flex items-center justify-center border border-slate-100 focus:ring-2 focus:ring-sky-500/10"
          >
            <Iconify icon={isSidebarOpen ? "solar:hamburger-menu-linear" : "solar:side-menu-linear"} className="w-6 h-6" />
          </button>

          <div className="flex-1 relative group max-w-xl hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-sky-500 transition-colors">
            <Iconify icon="eva:search-fill" className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search for appointments, records, or doctors..."
            className="w-full bg-slate-100/50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all outline-none"
          />
        </div>
      </div>

        {/* Action icons & Profile */}
        <div className="flex items-center gap-6">
          <button className="relative p-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-sky-500 transition-all">
            <Iconify icon="eva:bell-fill" className="w-6 h-6" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full" />
          </button>

          <div className="h-8 w-px bg-slate-100 hidden sm:block" />

          {/* User Dropdown */}
          <div className="flex items-center gap-3 group cursor-pointer relative py-1">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-none">{currentUser.username}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-sky-500 mt-1">
                {userRole.includes('doctor') ? 'Medical Professional' : 'Patient Account'}
              </p>
            </div>
            <div className="relative">
              <img 
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-white shadow-md transition-transform group-hover:scale-110" 
                src={userAvatar} 
                alt={currentUser.username} 
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            {/* Hover Dropdown */}
            <div className="absolute top-full right-0 mt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[110]">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-2">
                <Link 
                  to={userRole.includes('doctor') ? "/doctor/settings" : "/patient/settings"} 
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-sky-50 text-slate-700 text-sm font-bold no-underline transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center"><Iconify icon="eva:settings-2-fill" /></div>
                  Settings
                </Link>
                <hr className="my-2 border-slate-50" />
                <button 
                  onClick={logOut}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 text-sm font-bold no-underline transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center"><Iconify icon="eva:log-out-fill" /></div>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
