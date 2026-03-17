import axios from "axios";
import API_BASE_URL from "../../api-config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Iconify from '../common/Iconify';
import { MOCK_MEDICAL_RECORDS } from "../../constants/mockRecords";

const Medication = () => {
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
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-500">
            <Iconify icon="eva:thermometer-minus-fill" className="w-6 h-6" />
          </div>
          Active Medications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {record[0]?.medication?.map((value, i) => (
          <div key={i} className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/20 p-8 transition-all hover:shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Dose Regimen</span>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Iconify icon="eva:activity-outline" className="w-5 h-5" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">
                  {value.medica}
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                  <Iconify icon="eva:info-outline" className="w-4 h-4 text-emerald-400" />
                  {value.ill || 'Chronic Condition'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50/50 space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Dosage</p>
                  <p className="text-sm font-black text-slate-700">{value.value}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50/50 space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Frequency</p>
                  <p className="text-sm font-black text-slate-700">{value.number}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Currently Taking
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all">
                  <Iconify icon="eva:more-horizontal-outline" className="w-5 h-5" />
                </button>
            </div>
          </div>
        ))}

        {(!record[0]?.medication || record[0]?.medication.length === 0) && (
          <div className="col-span-full py-20 text-center bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
            <Iconify icon="eva:shake-outline" className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold">No active medications recorded.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Medication;
