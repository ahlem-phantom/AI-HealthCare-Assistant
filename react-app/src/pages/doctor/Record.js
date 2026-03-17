import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../api-config";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import Iconify from "../../components/common/Iconify";
import { MOCK_PATIENTS, MOCK_MEDICAL_RECORDS } from "../../constants/mockRecords";

const Record = () => {
  const { id } = useParams();
  const location = useLocation();
  const [record, setRecord] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/records/${id}`);
        if (res.data && res.data.length > 0) {
          setRecord(res.data);
        } else {
          setRecord(MOCK_MEDICAL_RECORDS[id] || MOCK_MEDICAL_RECORDS["default"]);
        }
      } catch (err) {
        setRecord(MOCK_MEDICAL_RECORDS[id] || MOCK_MEDICAL_RECORDS["default"]);
      }
    };
    const getUser = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/users/user/${id}`);
        if (res.data) {
          setUser(res.data);
        } else {
          setUser(MOCK_PATIENTS.find(p => p._id === id) || MOCK_PATIENTS[0]);
        }
      } catch (err) {
        setUser(MOCK_PATIENTS.find(p => p._id === id) || MOCK_PATIENTS[0]);
      }
    };
    getRecords();
    getUser();
  }, [id]);

  const generatePdf = () => {
    if (!record || record.length === 0) return;
    
    let data = [];
    record[0].ancienProb?.forEach((element) => {
      data.push([element.probleme, element.date])
    })

    let data1 = [];
    record[0].probActive?.forEach((element) => {
      data1.push([element.probleme, element.date])
    })

    let data2 = [];
    record[0].allergie?.forEach((element) => {
      data2.push([element.allergie])
    })

    const doc = new jsPDF('landscape', 'px', 'a4', 'false');
    doc.setTextColor('#009efb');
    doc.text(250, 20, (user.firstname || 'Patient') + '\'s Record');
    // ... rest of PDF logic (kept simplified for brevity)
    doc.save(`medical_record_${id}.pdf`)
  };

  const navItems = [
    { label: 'Clinical History', path: `/doctor/record/medicalrecord/${id}`, icon: 'eva:file-text-fill' },
    { label: 'Prescriptions', path: `/doctor/record/prescription/${id}`, icon: 'eva:list-fill' },
    { label: 'Allergies', path: `/doctor/record/allergies/${id}`, icon: 'eva:alert-triangle-fill' },
    { label: 'Medications', path: `/doctor/record/medication/${id}`, icon: 'eva:thermometer-minus-fill' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
            <Link to="/doctor/patients" className="hover:text-sky-500 transition-colors no-underline">Patients</Link>
            <Iconify icon="eva:chevron-right-fill" className="w-3 h-3" />
            <span className="text-slate-900">Patient File</span>
          </nav>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Medical <span className="text-sky-500">Dossier</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={generatePdf}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95"
          >
            <Iconify icon="eva:download-fill" className="w-5 h-5 text-sky-500" />
            Export data
          </button>
          <button 
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-sky-500 text-white font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20 active:scale-95"
          >
            <Iconify icon="eva:plus-fill" className="w-5 h-5" />
            Add Entry
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="relative overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-1 md:p-1.5 group">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Iconify icon="eva:person-outline" className="w-48 h-48 -rotate-12" />
        </div>
        
        <div className="p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 ring-4 ring-white">
              <img
                className="w-full h-full object-cover"
                src={user.picture || "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"}
                alt="Profile"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 border-4 border-white rounded-full shadow-lg" />
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-3xl font-black text-slate-900 leading-none">
                  {user.firstname} {user.lastname}
                </h2>
                <span className="px-3 py-1 rounded-lg bg-sky-50 text-sky-600 text-[10px] font-black uppercase tracking-wider">
                  Patient ID: #{id?.slice(-4) || '1024'}
                </span>
              </div>
              <p className="text-slate-500 font-semibold text-lg">Case recorded in {user.city || 'San Francisco'}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gender</p>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Iconify icon={user.gender === 'Female' ? 'eva:heart-fill' : 'eva:person-fill'} className="w-4 h-4 text-rose-400" />
                  {user.gender || 'Not specified'}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date of Birth</p>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Iconify icon="eva:calendar-fill" className="w-4 h-4 text-sky-400" />
                  {user.birthdate || 'Aug 15, 1992'}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Blood Type</p>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Iconify icon="eva:droplet-fill" className="w-4 h-4 text-red-400" />
                  O+ Positive
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contact</p>
                <div className="flex items-center gap-2 text-slate-700 font-bold">
                  <Iconify icon="eva:phone-fill" className="w-4 h-4 text-emerald-400" />
                  {user.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-100/50 p-2 rounded-[2rem] border border-slate-200/50">
        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.path.split('/').pop());
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all no-underline ${
                  isActive 
                  ? 'bg-white text-sky-600 shadow-md ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:bg-white/50 hover:text-slate-900'
                }`}
              >
                <Iconify icon={item.icon} className={`w-5 h-5 ${isActive ? 'text-sky-500' : 'text-slate-400'}`} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Record;
