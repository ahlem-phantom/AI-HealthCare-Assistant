import React, { useState } from "react";
import Iconify from '../../components/common/Iconify';
import doctorImg from '../../assets/doctor-profile.jpg';

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "dr_smith",
    email: "dr.smith@example.com",
    firstName: "John",
    lastName: "Smith",
    phone: "+1 (555) 123-4567",
    gender: "Male",
    dob: "1980-05-15",
    biography: "Dr. John Smith is a dedicated professional with over 15 years of experience in cardiology...",
    clinicName: "HeartCare Plus",
    clinicAddress: "123 Medical Plaza, Suite 400",
    services: "Cardiology, Internal Medicine",
    specialization: "Echo Cardiography, Heart Failure"
  });

  const handleSave = (e) => {
    e.preventDefault();
    // Simulate save logic
    console.log("Saving profile:", profile);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="text-left uppercase">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Account <span className="text-sky-500">Profile</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Manage your professional information and clinic details.</p>
        </div>
        <button 
          onClick={handleSave}
          className="px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2"
        >
          <Iconify icon="eva:save-fill" className="w-5 h-5" />
          <span className="hidden sm:inline">Save Changes</span>
          <span className="sm:hidden">Save</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Avatar & Basic Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-8 text-center space-y-6">
            <div className="relative inline-block group">
              <div className="w-32 h-32 rounded-[2rem] overflow-hidden ring-4 ring-slate-50 shadow-inner mx-auto">
                <img 
                  src={doctorImg} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <label className="absolute -bottom-2 -right-2 p-3 rounded-2xl bg-sky-500 text-white shadow-lg cursor-pointer hover:scale-110 transition-all active:scale-95">
                <Iconify icon="eva:camera-fill" className="w-5 h-5" />
                <input type="file" className="hidden" />
              </label>
            </div>
            
            <div>
              <h3 className="text-xl font-black text-slate-900 leading-tight">{profile.firstName} {profile.lastName}</h3>
              <p className="text-xs font-black uppercase tracking-widest text-sky-500 mt-2">MBBS, Cardiology Specialist</p>
            </div>

            <div className="pt-6 border-t border-slate-50 space-y-4">
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-slate-50 text-slate-600">
                <Iconify icon="eva:person-fill" className="text-sky-400 w-5 h-5" />
                <span className="text-sm font-bold">{profile.username}</span>
              </div>
              <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-slate-50 text-slate-600 overflow-hidden">
                <Iconify icon="eva:email-fill" className="text-sky-400 w-5 h-5" />
                <span className="text-sm font-bold truncate">{profile.email}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-8 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Account Safety</h4>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all text-slate-600 font-bold group text-sm">
                <div className="flex items-center gap-3">
                  <Iconify icon="eva:lock-fill" className="text-slate-300 group-hover:text-sky-500 w-5 h-5 transition-colors" />
                  Change Password
                </div>
                <Iconify icon="eva:chevron-right-fill" className="w-4 h-4" />
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-rose-50 transition-all text-rose-500 font-bold group text-sm">
                <div className="flex items-center gap-3">
                  <Iconify icon="eva:trash-2-fill" className="text-rose-200 group-hover:text-rose-500 w-5 h-5 transition-colors" />
                  Delete Account
                </div>
                <Iconify icon="eva:chevron-right-fill" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Form Fields */}
        <div className="lg:col-span-2 space-y-8">
          {/* General Information */}
          <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-10 space-y-8">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-50">
              <div className="p-3.5 rounded-2xl bg-sky-50 text-sky-500">
                <Iconify icon="eva:info-fill" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 leading-tight">General Information</h2>
                <p className="text-slate-500 font-medium text-xs mt-1">Update your personal contact and ID details.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                <input 
                  type="text"
                  value={profile.firstName}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900"
                  onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                <input 
                  type="text"
                  value={profile.lastName}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900"
                  onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                <input 
                  type="text"
                  value={profile.phone}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900"
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Gender</label>
                <select 
                  value={profile.gender}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium appearance-none text-slate-900"
                  onChange={(e) => setProfile({...profile, gender: e.target.value})}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Biography</label>
              <textarea 
                rows={4}
                value={profile.biography}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium resize-none text-slate-900"
                onChange={(e) => setProfile({...profile, biography: e.target.value})}
              />
            </div>
          </div>

          {/* Clinic & Professional Info */}
          <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-100/50 p-10 space-y-8">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-50">
              <div className="p-3.5 rounded-2xl bg-sky-50 text-sky-500">
                <Iconify icon="eva:home-fill" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900 leading-tight">Clinic & Professional</h2>
                <p className="text-slate-500 font-medium text-xs mt-1">Details about your practice and medical expertise.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Clinic Name</label>
                <input 
                  type="text"
                  value={profile.clinicName}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900"
                  onChange={(e) => setProfile({...profile, clinicName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Clinic Address</label>
                <input 
                  type="text"
                  value={profile.clinicAddress}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900"
                  onChange={(e) => setProfile({...profile, clinicAddress: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Services</label>
                <input 
                  type="text"
                  value={profile.services}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900"
                  onChange={(e) => setProfile({...profile, services: e.target.value})}
                />
                <p className="text-[10px] text-slate-400 font-bold ml-1 uppercase tracking-tighter">Multiple services separate with commas</p>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Specializations</label>
                <input 
                  type="text"
                  value={profile.specialization}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900"
                  onChange={(e) => setProfile({...profile, specialization: e.target.value})}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    