import axios from "axios";
import API_BASE_URL from "../../api-config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iconify from '../common/Iconify';
import { MOCK_MEDICAL_RECORDS } from "../../constants/mockRecords";

const Laboratory = () => {
  const { id } = useParams();
  const [record, setRecord] = useState([]);

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
    getRecords();
  }, [id]);

  return (
    <div className="pt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-50 text-violet-500">
            <Iconify icon="eva:beaker-fill" className="w-6 h-6" />
          </div>
          Laboratory Diagnostics
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {record[0]?.resLabo?.map((value, i) => (
          <div key={i} className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/20 p-8 flex flex-col justify-between transition-all hover:shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:-rotate-6 transition-transform">
              <Iconify icon="eva:flask-outline" className="w-24 h-24" />
            </div>
            
            <div className="space-y-6 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Test Entry #{i+1}</span>
                <span className="px-2.5 py-1 rounded-lg bg-violet-50 text-violet-600 text-[10px] font-black uppercase tracking-wider italic">Lab Verified</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Investigation</p>
                  <h3 className="text-xl font-black text-slate-900">{value.test}</h3>
                </div>
                
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Result Value</p>
                    <p className="text-lg font-black text-violet-600 tracking-tight">{value.result}</p>
                  </div>
                  <Iconify icon="eva:checkmark-circle-2-fill" className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-slate-400">
                <Iconify icon="eva:calendar-outline" className="w-4 h-4" />
                Recent Test
              </div>
              <button className="flex items-center gap-1.5 text-xs font-bold text-violet-500 hover:text-violet-600 transition-colors">
                Report
                <Iconify icon="eva:file-text-outline" className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {(!record[0]?.resLabo || record[0]?.resLabo.length === 0) && (
          <div className="col-span-full py-20 text-center bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
            <Iconify icon="eva:beaker-outline" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">No laboratory diagnostics found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Laboratory;