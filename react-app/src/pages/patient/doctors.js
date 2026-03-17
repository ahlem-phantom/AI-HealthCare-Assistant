import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import Iconify from '../../components/common/Iconify';
import { MOCK_DOCTORS } from "../../constants/mockRecords";

function Doctors() {
  const [doctors, setDoctor] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const getDoctors = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/users`);
        if (res.data && res.data.length > 0) {
          setDoctor(res.data);
        } else {
          setDoctor(MOCK_DOCTORS);
        }
      } catch (err) {
        console.log("Using mock doctors due to error", err);
        setDoctor(MOCK_DOCTORS);
      }
    };
    getDoctors();
  }, []);
  const deletehandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`${API_BASE_URL}/users/delete-user/${id}`)
        .then((res) => {
          console.log(res.data);
          setDoctor(doctors.filter(d => d._id !== id));
        });
    }
  };
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-row items-center justify-between gap-6 pb-2">
        <div className="text-left">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Find <span className="text-sky-500">Doctors</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Discover expert medical professionals in your area.</p>
        </div>
        <Link
          to={"/patient/add-doctor"}
          className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 no-underline whitespace-nowrap"
        >
          <Iconify icon="eva:person-add-fill" className="w-5 h-5" />
          <span className="hidden sm:inline">Add Doctor</span>
          <span className="sm:hidden text-xs">Add</span>
        </Link>
      </div>

      {/* Modern Search/Filter placeholder */}
      <div className="relative w-full group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Iconify icon="eva:search-fill" className="w-6 h-6 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search by name, specialty, or location..."
            className="w-full pl-14 pr-6 py-5 rounded-[2rem] bg-white border border-slate-50 shadow-xl shadow-slate-200/20 focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-500 transition-all font-medium text-slate-900" 
          />
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {doctors.map((el) => (
          <div key={el._id} className="group relative bg-white rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-500 overflow-hidden flex flex-col">
            {/* Action Menu Toggle */}
            <div className="absolute top-6 right-6 z-10">
                <button className="p-2 rounded-xl bg-white/50 backdrop-blur-md border border-white/50 text-slate-400 hover:text-slate-900 transition-colors">
                    <Iconify icon="eva:more-vertical-fill" className="w-5 h-5" />
                </button>
            </div>

            {/* Profile Image & Background */}
            <div className="h-32 bg-gradient-to-br from-sky-50 to-blue-50 relative">
                <div className="absolute -bottom-12 left-8 p-1 bg-white rounded-[2rem] shadow-lg">
                    <div className="w-24 h-24 rounded-[1.8rem] overflow-hidden bg-slate-100">
                        <img 
                            src={el.picture || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"} 
                            alt={el.firstname}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                    </div>
                </div>
            </div>

            <div className="p-8 pt-16 flex-1 flex flex-col">
                <div className="mb-6">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-2">
                        Dr. {el.firstname} {el.lastname}
                    </h3>
                    <p className="text-xs font-black uppercase tracking-widest text-sky-500">{el.specialty || 'Medical Professional'}</p>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-500">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                            <Iconify icon="eva:pin-fill" className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold truncate">{el.address || 'Location Not Set'}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                            <Iconify icon="eva:award-fill" className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{el.experience || 'Experienced'} Years Exp.</span>
                    </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                    <Link 
                        to={`/patient/doctor-detail/${el._id}`}
                        className="py-3.5 rounded-2xl bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest text-center no-underline hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                    >
                        View Profile
                    </Link>
                    <button 
                        onClick={() => deletehandler(el._id)}
                        className="py-3.5 rounded-2xl bg-rose-50 text-rose-500 text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all"
                    >
                        Archive
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-center pt-8">
        <button className="px-10 py-4 rounded-[2rem] bg-white border border-slate-100 text-slate-400 font-bold hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all shadow-sm">
            Load More Results
        </button>
      </div>
    </div>
  );
}

export default Doctors;
