import axios from "axios";
import API_BASE_URL from "../../api-config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Iconify from '../common/Iconify';

const AddMedication = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);
  const [medica, setMedica] = useState('');
  const [value, setValue] = useState('');
  const [number, setNumber] = useState('');
  const [ill, setIll] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getRecords = async () => {
      try {
        const res = await axios(`${API_BASE_URL}/records/${id}`);
        setRecord(res.data);
      } catch (err) {
        console.error("Error fetching records:", err);
      }
    };
    getRecords();
  }, [id]);

  const onUpdate = async (object) => {
    try {
      await axios.put(`${API_BASE_URL}/records/${id}`, object);
    } catch (err) {
      console.error("Error updating record:", err);
    }
  };

  const handleClick = () => {
    if (!medica || !value || !number || !ill) return;
    
    const json = { 
      "medica": medica.toString(), 
      "value": value.toString(), 
      "number": number.toString(), 
      "ill": ill.toString() 
    };
    
    const updatedRecords = [...record];
    updatedRecords.forEach((object) => {
      if (!object.medication) object.medication = [];
      object.medication.push(json);
      onUpdate(object);
    });

    navigate(-1);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl shadow-emerald-200/20 border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <Iconify icon="eva:cube-outline" className="w-64 h-64" />
        </div>

        <div className="p-10 md:p-12 space-y-10 relative">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"
            >
              <Iconify icon="eva:arrow-back-fill" className="w-6 h-6" />
            </button>
            <div className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
              Pharmaceutical Inventory
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Add Medication</h2>
            <p className="text-slate-500 font-medium">Register a new therapeutic agent to the patient's current regimen.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2 col-span-full">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Agent Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Iconify icon="eva:thermometer-outline" className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Amoxicillin, Lisinopril"
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                  value={medica}
                  onChange={(e) => setMedica(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Dosage</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Iconify icon="eva:hash-outline" className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. 500mg"
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Frequency</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Iconify icon="eva:clock-outline" className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. 2x Daily"
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2 col-span-full">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Target Condition</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                  <Iconify icon="eva:info-outline" className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Reason for medication..."
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                  value={ill}
                  onChange={(e) => setIll(e.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleClick}
              className="col-span-full py-5 rounded-[1.5rem] bg-slate-900 text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <Iconify icon="eva:plus-fill" className="w-5 h-5" />
              Authorize Allocation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMedication;