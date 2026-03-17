import axios from "axios";
import API_BASE_URL from "../../api-config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Iconify from '../common/Iconify';

const AddAllergie = () => {
  const { id } = useParams();
  const [allergi, setAllergi] = useState('');
  const [record, setRecord] = useState([]);
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
    if (!allergi) return;
    
    const json = { "allergie": allergi.toString() };
    const updatedRecords = [...record];
    updatedRecords.forEach((object) => {
      if (!object.allergie) object.allergie = [];
      object.allergie.push(json);
      onUpdate(object);
    });

    navigate(-1);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-[3rem] shadow-2xl shadow-amber-200/20 border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <Iconify icon="eva:flash-outline" className="w-48 h-48" />
        </div>

        <div className="p-10 md:p-12 space-y-10 relative">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"
            >
              <Iconify icon="eva:arrow-back-fill" className="w-6 h-6" />
            </button>
            <div className="px-4 py-1.5 rounded-full bg-amber-50 text-amber-500 text-[10px] font-black uppercase tracking-widest">
              Immunological Risk
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Register Allergy</h2>
            <p className="text-slate-500 font-medium">Identify and log a specific substance or environmental trigger.</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Substance / Trigger</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-amber-500 transition-colors">
                  <Iconify icon="eva:alert-triangle-outline" className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Penicillin, Pollen, Peanuts"
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl font-bold text-slate-900 placeholder:text-slate-300 focus:bg-white focus:border-amber-500/20 focus:ring-4 focus:ring-amber-500/5 transition-all outline-none"
                  value={allergi}
                  onChange={(e) => setAllergi(e.target.value)}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleClick}
              className="w-full py-5 rounded-[1.5rem] bg-slate-900 text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-amber-500/20 hover:bg-amber-500 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <Iconify icon="eva:shield-outline" className="w-5 h-5" />
              Secure entry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAllergie;