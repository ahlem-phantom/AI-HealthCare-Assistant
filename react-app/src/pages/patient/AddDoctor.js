import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import Iconify from '../../components/common/Iconify';
import Swal from 'sweetalert2';

function AddDoctor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    birthdate: "",
    gender: "Male",
    country: "Tunisia",
    city: "",
    state: "California",
    zip: "",
    phone: "",
    status: "Active",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/users/create-user`, {
        ...formData,
        role: "doctor"
      });
      
      Swal.fire({
        icon: 'success',
        title: 'Doctor Added',
        text: 'The medical professional has been successfully registered.',
        timer: 2000,
        showConfirmButton: false
      });
      
      navigate("/patient/doctors", { replace: true });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Could not add doctor.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700 max-w-5xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-2">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Register <span className="text-sky-500 font-extrabold italic">Medical Expert</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Onboard a new specialist to the NearestDoctor network.</p>
        </div>
        <button 
          onClick={() => navigate('/patient/doctors')}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-100 text-slate-500 font-bold hover:bg-slate-50 transition-all shadow-sm"
        >
          <Iconify icon="eva:arrow-back-fill" />
          <span>Back to Directory</span>
        </button>
      </div>

      <form onSubmit={handleAdd} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 p-8 sm:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section: Personal Info */}
          <div className="sm:col-span-2 lg:col-span-3 pb-2 border-b border-slate-50 mb-4">
             <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest text-xs flex items-center gap-2">
                <Iconify icon="eva:person-fill" className="text-sky-500" />
                Personal Information
             </h3>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
            <input 
              required
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900" 
              placeholder="John"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
            <input 
              required
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900" 
              placeholder="Doe"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Username</label>
            <input 
              required
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900" 
              placeholder="dr_doe"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <input 
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900" 
              placeholder="doe@medical.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Birth Date</label>
            <input 
              required
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900 text-sm" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Gender</label>
            <div className="flex gap-4 p-2 bg-slate-50 rounded-2xl border border-slate-100">
              {['Male', 'Female'].map(g => (
                <label key={g} className="flex-1 flex items-center justify-center gap-2 cursor-pointer py-2 rounded-xl transition-all has-[:checked]:bg-white has-[:checked]:text-sky-500 has-[:checked]:shadow-sm">
                  <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleInputChange} className="hidden" />
                  <span className="text-xs font-black uppercase tracking-widest">{g}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Section: Contact & Location */}
          <div className="sm:col-span-2 lg:col-span-3 pb-2 border-b border-slate-50 mb-4 mt-4">
             <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest text-xs flex items-center gap-2">
                <Iconify icon="eva:pin-fill" className="text-sky-500" />
                Contact & Location
             </h3>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
            <input 
              required
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900" 
              placeholder="+216 -- --- ---"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Country</label>
            <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900 appearance-none">
              <option value="Tunisia">Tunisia</option>
              <option value="Algeria">Algeria</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">City</label>
            <input 
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium text-slate-900" 
              placeholder="Tunis"
            />
          </div>

          <div className="space-y-1">
             <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Status</label>
             <div className="flex gap-4 p-2 bg-slate-50 rounded-2xl border border-slate-100">
               {['Active', 'Inactive'].map(s => (
                 <label key={s} className="flex-1 flex items-center justify-center gap-2 cursor-pointer py-2 rounded-xl transition-all has-[:checked]:bg-white has-[:checked]:text-sky-500 has-[:checked]:shadow-sm">
                   <input type="radio" name="status" value={s} checked={formData.status === s} onChange={handleInputChange} className="hidden" />
                   <span className="text-xs font-black uppercase tracking-widest">{s}</span>
                 </label>
               ))}
             </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-50">
          <button 
            type="button"
            onClick={() => navigate('/patient/doctors')}
            className="flex-1 px-8 py-4 rounded-2xl bg-slate-100 text-slate-600 font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all shadow-sm"
          >
            Discard Changes
          </button>
          <button 
            type="submit"
            disabled={loading}
            className="flex-[2] py-4 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
          >
            {loading ? (
               <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
            ) : "Confirm Registration"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDoctor;