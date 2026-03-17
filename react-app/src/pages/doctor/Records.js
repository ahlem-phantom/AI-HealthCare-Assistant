import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MOCK_PATIENTS } from "../../constants/mockRecords";
import Iconify from '../../components/common/Iconify';

// Note: Heroku endpoints seem to be legacy. Using a fallback or local simulation if needed.
import API_BASE_URL from "../../api-config";

const API_BASE = API_BASE_URL;

function Records() {
  const [users, setUsers] = useState([]);
  const [searchvalue, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const res = await axios(`${API_BASE}/users/users-patients/patient`);
        if (res.data && res.data.length > 0) {
          setUsers(res.data);
        } else {
          console.log("Backend empty, using mock patients");
          setUsers(MOCK_PATIENTS);
        }
      } catch (err) {
        console.error("Failed to fetch patients, using mock data:", err);
        setUsers(MOCK_PATIENTS);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  const filteredUsers = users?.filter(
    (user) =>
      user.firstname?.toLowerCase().includes(searchvalue.toLowerCase()) ||
      user.lastname?.toLowerCase().includes(searchvalue.toLowerCase())
  ) || [];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-6 pb-2">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Medical <span className="text-sky-500">Records</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Access and manage comprehensive patient health histories.</p>
        </div>

        {/* Search Bar */}
        <div className="relative hidden sm:block w-72 lg:w-96 group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Iconify icon="solar:magnifer-bold-duotone" width={20} className="text-slate-400 group-focus-within:text-sky-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search patients..."
            className="w-full pl-14 pr-6 py-4 rounded-[1.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 outline-none transition-all font-medium"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50 bg-slate-50/30">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Patient Name</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Info</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Birthday</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-8 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border-4 border-sky-500/20 border-t-sky-500 rounded-full animate-spin"></div>
                      <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Loading Records...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((object, index) => (
                  <tr key={index} className="group hover:bg-slate-50/50 transition-all duration-300">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-sm uppercase">
                          {object.firstname?.[0]}{object.lastname?.[0]}
                        </div>
                        <div>
                          <p className="font-black text-slate-900 leading-tight transition-colors group-hover:text-sky-600">
                            {object.firstname} {object.lastname}
                          </p>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mt-1">ID: {object._id?.slice(-8)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Iconify icon="solar:phone-bold-duotone" width={14} className="text-slate-300" />
                          <span className="text-sm font-bold">{object.phone || 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Iconify icon="solar:letter-bold-duotone" width={14} className="text-slate-300" />
                          <span className="text-xs font-medium">{object.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 text-slate-600 font-bold text-xs">
                        <Iconify icon="solar:calendar-bold-duotone" width={14} className="text-slate-400" />
                        {object.birthdate || 'Not set'}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/doctor/record/medicalrecord/${object._id}`}
                          className="px-6 py-2.5 rounded-[1.25rem] bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center gap-2 group/btn"
                        >
                          <Iconify icon="solar:notebook-bold-duotone" width={16} className="text-slate-400 group-hover/btn:text-white transition-colors" />
                          View Dossier
                        </Link>
                        <button className="p-2.5 rounded-xl bg-slate-100 text-slate-400 hover:bg-sky-50 hover:text-sky-600 transition-all">
                          <Iconify icon="solar:menu-dots-bold" width={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-8 py-20 text-center">
                    <div className="max-w-xs mx-auto space-y-4">
                      <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto">
                        <Iconify icon="solar:folder-error-bold-duotone" width={40} className="text-slate-200" />
                      </div>
                      <h3 className="text-lg font-black text-slate-900">No Records Found</h3>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">We couldn't find any medical records matching your search. Try a different name.</p>
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
}

export default Records;
