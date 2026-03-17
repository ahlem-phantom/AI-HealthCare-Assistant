import React from "react";
import AuthService from "../../services/auth.service";
import { Link, useParams } from "react-router-dom";
import Iconify from '../../components/common/Iconify';

const Profile = (props) => {
  const currentUser = AuthService.getCurrentUser() || { username: "Guest", email: "guest@example.com", roles: [], accessToken: "" };
  const params = useParams();
  
  if (params.confirmationCode) {
    AuthService.verifyUser(params.confirmationCode);
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-6 pb-2">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            My <span className="text-sky-500">Profile</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Manage your account settings and health information.</p>
        </div>
        <Link
          to="/patient/edit-profile"
          className="px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Iconify icon="eva:edit-2-fill" className="w-5 h-5" />
          <span className="hidden sm:inline">Edit Profile</span>
          <span className="sm:hidden text-xs">Edit</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - User Overview */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-8 text-center space-y-6">
            <div className="relative inline-block group">
              <div className="w-32 h-32 rounded-[2rem] overflow-hidden ring-4 ring-slate-50 shadow-inner mx-auto">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.username}`}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 p-3 rounded-2xl bg-sky-500 text-white shadow-lg">
                <Iconify icon="eva:checkmark-circle-2-fill" className="w-5 h-5" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-black text-slate-900 leading-tight">{currentUser.username}</h3>
              <p className="text-xs font-black uppercase tracking-widest text-sky-500 mt-2">Verified Patient Account</p>
            </div>

            <div className="pt-6 border-t border-slate-50 space-y-4">
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-slate-50 text-slate-600">
                <Iconify icon="eva:email-fill" className="text-sky-400 w-5 h-5" />
                <span className="text-sm font-bold truncate">{currentUser.email}</span>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-slate-50 text-slate-600">
                <Iconify icon="eva:shield-fill" className="text-sky-400 w-5 h-5" />
                <span className="text-sm font-bold">Status: {currentUser.status || 'Active'}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-8 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-bold">Permissions & Roles</h4>
            <div className="flex flex-wrap gap-2">
              {currentUser.roles && currentUser.roles.map((role, index) => (
                <span key={index} className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Account Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-10 space-y-8">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-50">
              <div className="p-3.5 rounded-2xl bg-sky-50 text-sky-500">
                <Iconify icon="eva:person-fill" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 leading-tight">Account Information</h2>
                <p className="text-slate-500 font-medium text-xs mt-1">Technical details regarding your portal access.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Access Token (Snippet)</label>
                <code className="block p-4 rounded-xl bg-slate-900 text-sky-400 text-xs font-mono break-all overflow-hidden opacity-80">
                  {currentUser.accessToken ? `${currentUser.accessToken.substring(0, 40)}...` : 'N/A'}
                </code>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-xs">User ID</label>
                  <p className="text-sm font-bold text-slate-700">{currentUser.id}</p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-xs">Auth Status</label>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-tight">Authenticated</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50">
               <div className="flex items-center gap-4 p-6 rounded-[2rem] bg-amber-50 border border-amber-100/50">
                  <Iconify icon="eva:alert-triangle-fill" className="text-amber-500 w-8 h-8" />
                  <div>
                    <h4 className="text-sm font-black text-amber-900">Security Note</h4>
                    <p className="text-xs font-medium text-amber-700 mt-0.5">Your access token is sensitive. Do not share it with unauthorized personnel.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
